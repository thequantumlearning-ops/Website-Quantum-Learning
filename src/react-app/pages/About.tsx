import { useEffect } from "react";
import { Users, Award, Target } from "lucide-react";

export default function About() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative pt-20">
      {/* Background */}
      <div className="absolute inset-0 opacity-30 -z-0">
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative text-center max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          About Quantum Learning
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Our mission is to empower young learners with confidence, financial
          wisdom, and innovative thinking to thrive in the modern world.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-slate-800/50 rounded-full text-gray-200">
            Student-Centered
          </span>
          <span className="px-4 py-2 bg-slate-800/50 rounded-full text-gray-200">
            Future-Ready
          </span>
          <span className="px-4 py-2 bg-slate-800/50 rounded-full text-gray-200">
            Real-World Skills
          </span>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-slate-800/50 p-8 rounded-2xl shadow-lg">
            <Target className="h-10 w-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-300">
              To equip students with lifelong skills in communication,
              financial literacy, and innovation, ensuring they are ready to
              lead and succeed in any environment.
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl shadow-lg">
            <Users className="h-10 w-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
            <p className="text-gray-300">
              We combine engaging live instruction with interactive activities,
              fostering both critical thinking and creativity in every student.
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl shadow-lg">
            <Award className="h-10 w-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-300">
              A generation of confident, financially responsible, and
              innovative young leaders who embrace opportunities to shape the
              future.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Meet the Team
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Krishnav */}
          <div className="bg-slate-800/50 p-8 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-2">Krishnav Gudepu</h3>
            <p className="text-blue-400 mb-4">Founder and Master of Public Speaking and Communications</p>
            <p className="text-gray-300">
              As the Founder of Quantum Learning, Krishnav lead the vision of creating
              a platform that inspires students to become confident
              communicators, financially literate decision-makers, and creative
              innovators. His focus is on blending leadership, technology, and
              education to prepare students for real-world challenges and
              opportunities.
            </p>
          </div>

          {/* Ushnish */}
          <div className="bg-slate-800/50 p-8 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-2">Ushnish Ghosh</h3>
            <p className="text-blue-400 mb-4">Co-Founder & Financial Master</p>
            <p className="text-gray-300">
              Ushnish brings expertise in financial literacy and real-world
              money management. As a Co-Founder, he ensures our programs
              provide students with practical financial knowledge, from
              budgeting and saving to investing, laying the foundation for
              lifelong responsibility.
            </p>
          </div>

          {/* Kaustav */}
          <div className="bg-slate-800/50 p-8 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-2">Kaustav Ghosh</h3>
            <p className="text-blue-400 mb-4">
              Co-Founder & Innovation Master
            </p>
            <p className="text-gray-300">
              Kaustav drives the innovation and entrepreneurship track,
              teaching students how to think creatively, solve complex
              problems, and work collaboratively. His role as Co-Founder is to
              inspire a new generation of young entrepreneurs and innovators.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

