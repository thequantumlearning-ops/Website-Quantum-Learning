import { useEffect, useRef } from 'react';
import { Calendar, User, CheckCircle } from 'lucide-react';

export default function Schedule() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  const popupLoadedRef = useRef(false);
  useEffect(() => {
    if (popupLoadedRef.current) return;
    popupLoadedRef.current = true;

    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;

    script.onload = () => {
      (window as any).calendar?.schedulingButton?.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0JIYF3UZj73Dg7hZm-6Li3SyDHtlzYBA80vnQYK6ULvL2gqNnvKmtmtjftbVbzFMIh5EYigjho?gv=true',
        color: '#039BE5',
        label: 'Book an appointment',
        target: document.getElementById('google-calendar-button'),
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-[36rem] h-[36rem] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Schedule Your Consultation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book a free consultation to learn how Skillsvera can help unlock your child's potential 
            through our innovative special skills programs.
          </p>
        </div>
      </section>

      {/* Consultation Benefits */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your personalized consultation will help us understand your goals and recommend the perfect program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: "Personalized Assessment",
                description: "We'll discuss your child's current skills, interests, and learning goals to create a tailored recommendation."
              },
              {
                icon: Calendar,
                title: "Program Overview",
                description: "Learn about our synchronous and asynchronous programs, curriculum details, and scheduling options."
              },
              {
                icon: CheckCircle,
                title: "Next Steps",
                description: "Get a clear path forward with enrollment information, pricing details, and start date options."
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calendly Booking Widget */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Schedule Your Free Consultation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Book directly with our calendar system. Select a time that works best for you and we'll send you the meeting details instantly.
            </p>
          </div>

          <div className="text-center my-8">
            <div id="google-calendar-button"></div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Google Calendar Appointment Scheduling */}
              <iframe
                src="https://calendar.google.com/calendar/embed?src=skillsvera.team%40gmail.com&ctz=America%2FNew_York"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="yes"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Having trouble viewing the calendar? Email us directly at{' '}
              <a 
                href="mailto:skillsvera.team@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                skillsvera.team@gmail.com
              </a>
              {' '}or call to schedule your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Consultation FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long is the consultation?",
                answer: "Consultations typically last 30-45 minutes, giving us enough time to understand your needs and explain our programs in detail."
              },
              {
                question: "Is the consultation really free?",
                answer: "Yes, absolutely! There's no cost or obligation. We want to make sure our programs are the right fit for your family before you enroll."
              },
              {
                question: "What should I prepare for the consultation?",
                answer: "Come with questions about your child's learning goals, any specific skills you'd like them to develop, and your family's schedule preferences."
              },
              {
                question: "Can both parents attend?",
                answer: "Of course! We encourage both parents to join the consultation. We can also accommodate different time zones for separated families."
              },
              {
                question: "What if I need to reschedule?",
                answer: "No problem! Just email us or call, and we'll find a new time that works better for your schedule."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
