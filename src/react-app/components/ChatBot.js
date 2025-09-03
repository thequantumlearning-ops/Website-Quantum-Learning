import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Send, X, Bot, User } from "lucide-react";
export default function ChatBot({ onClose }) {
    const [messages, setMessages] = useState([
        {
            id: "1",
            role: "assistant",
            content: "Hello! I'm your Quantum Learning assistant. I can help you with questions about our programs, pricing, scheduling, and more. How can I assist you today?",
            timestamp: Date.now(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const handleSend = async () => {
        if (!input.trim() || isLoading)
            return;
        const userMessage = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: input,
                    history: messages,
                }),
            });
            if (!res.ok) {
                throw new Error("Failed to send message");
            }
            const { response: aiResponse } = (await res.json());
            const assistantMessage = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: aiResponse,
                timestamp: Date.now(),
            };
            setMessages((prev) => [...prev, assistantMessage]);
        }
        catch (error) {
            console.error("Chat error:", error);
            const errorMessage = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "I apologize, but I'm having trouble responding right now. Please try again or contact us directly for assistance.",
                timestamp: Date.now(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return (_jsxs("div", { className: "fixed bottom-6 right-6 w-96 h-96 bg-gradient-to-br from-slate-900/95 to-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 z-50 flex flex-col", children: [_jsxs("div", { className: "flex items-center justify-between p-4 border-b border-white/10", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-8 h-8 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full flex items-center justify-center", children: _jsx(Bot, { className: "w-5 h-5 text-white" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-white font-semibold", children: "Quantum AI Assistant" }), _jsx("p", { className: "text-xs text-gray-400", children: "Online" })] })] }), _jsx("button", { onClick: onClose, className: "text-gray-400 hover:text-white transition-colors", children: _jsx(X, { className: "w-5 h-5" }) })] }), _jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [messages.map((message) => (_jsxs("div", { className: `flex items-start space-x-2 ${message.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`, children: [_jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === "user" ? "bg-gradient-to-r from-slate-600 to-blue-600" : "bg-gradient-to-r from-blue-600 to-slate-600"}`, children: message.role === "user" ? _jsx(User, { className: "w-3 h-3 text-white" }) : _jsx(Bot, { className: "w-3 h-3 text-white" }) }), _jsx("div", { className: `max-w-[80%] p-3 rounded-lg ${message.role === "user" ? "bg-gradient-to-r from-slate-600 to-blue-600 text-white" : "bg-white/10 text-gray-100 backdrop-blur-sm"}`, children: _jsx("p", { className: "text-sm whitespace-pre-wrap", children: message.content }) })] }, message.id))), isLoading && (_jsxs("div", { className: "flex items-start space-x-2", children: [_jsx("div", { className: "w-6 h-6 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full flex items-center justify-center", children: _jsx(Bot, { className: "w-3 h-3 text-white" }) }), _jsx("div", { className: "bg-white/10 backdrop-blur-sm p-3 rounded-lg", children: _jsxs("div", { className: "flex space-x-1", children: [_jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }), _jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" }), _jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" })] }) })] })), _jsx("div", { ref: messagesEndRef })] }), _jsx("div", { className: "p-4 border-t border-white/10", children: _jsxs("div", { className: "flex space-x-2", children: [_jsx("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), onKeyDown: handleKeyDown, placeholder: "Ask me anything about Quantum Learning...", className: "flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm", disabled: isLoading }), _jsx("button", { onClick: handleSend, disabled: !input.trim() || isLoading, className: "bg-gradient-to-r from-slate-600 to-blue-600 text-white p-2 rounded-lg hover:from-slate-700 hover:to-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed", children: _jsx(Send, { className: "w-4 h-4" }) })] }) })] }));
}
