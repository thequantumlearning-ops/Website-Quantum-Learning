/// <reference types="@cloudflare/workers-types" />
import { Hono } from "hono";
import { cors } from "hono/cors";
import { zValidator } from "@hono/zod-validator";
import OpenAI from "openai";
import { AppointmentSchema } from "@/shared/types";
const app = new Hono();
app.use("*", cors());
app.post("/api/chat", async (c) => {
    try {
        const openai = new OpenAI({
            apiKey: c.env.OPENAI_API_KEY,
        });
        const { message, history } = await c.req.json();
        const systemPrompt = `You are a helpful AI assistant for Quantum Learning, an innovative special skills education company. You have comprehensive knowledge about our programs, pricing, and services.`;
        const messages = [
            { role: "system", content: systemPrompt },
            ...history.map((msg) => ({
                role: msg.role,
                content: msg.content,
            })),
            { role: "user", content: message },
        ];
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages,
            max_tokens: 500,
            temperature: 0.7,
        });
        const response = completion.choices[0]?.message?.content ||
            "I apologize, but I'm having trouble responding right now. Please try again or contact us directly.";
        return c.json({ response });
    }
    catch (error) {
        console.error("Chat error:", error);
        return c.json({ error: "Failed to process your message. Please try again." }, 500);
    }
});
app.post("/api/appointments", zValidator("json", AppointmentSchema), async (c) => {
    try {
        const data = c.req.valid("json");
        const result = await c.env.DB.prepare(`
        INSERT INTO appointments (name, email, phone, service_type, preferred_date, preferred_time, message, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')
      `)
            .bind(data.name, data.email, data.phone || null, data.service_type, data.preferred_date, data.preferred_time, data.message || null)
            .run();
        if (!result.success) {
            throw new Error("Failed to save appointment");
        }
        return c.json({
            success: true,
            message: "Appointment scheduled successfully",
            appointmentId: result.meta.last_row_id,
        });
    }
    catch (error) {
        console.error("Appointment booking error:", error);
        return c.json({ error: "Failed to schedule appointment. Please try again." }, 500);
    }
});
app.get("/api/appointments", async (c) => {
    try {
        const { results } = await c.env.DB.prepare(`
      SELECT * FROM appointments
      ORDER BY created_at DESC
    `).all();
        return c.json({ appointments: results });
    }
    catch (error) {
        console.error("Get appointments error:", error);
        return c.json({ error: "Failed to fetch appointments" }, 500);
    }
});
app.patch("/api/appointments/:id", async (c) => {
    try {
        const id = c.req.param("id");
        const { status } = await c.req.json();
        const result = await c.env.DB.prepare(`
      UPDATE appointments
      SET status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `)
            .bind(status, id)
            .run();
        if (!result.success) {
            throw new Error("Failed to update appointment");
        }
        return c.json({
            success: true,
            message: "Appointment updated successfully",
        });
    }
    catch (error) {
        console.error("Update appointment error:", error);
        return c.json({ error: "Failed to update appointment" }, 500);
    }
});
app.get("/api/health", (c) => {
    return c.json({ status: "healthy", timestamp: new Date().toISOString() });
});
export default app;
