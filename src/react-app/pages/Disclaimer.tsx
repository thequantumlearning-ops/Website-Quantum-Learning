import { useEffect } from 'react';
import { AlertTriangle, BookOpen, TrendingUp, Users, Info, Mail } from 'lucide-react';

export default function Disclaimer() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AlertTriangle className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent">
              Disclaimer
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Important information about Quantum Learning's educational services and what families can expect.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            
            {/* Educational Nature */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Educational Service Nature</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <div className="bg-blue-600/10 border border-blue-400/30 rounded-lg p-4">
                  <p><strong className="text-blue-400">Supplemental Education:</strong></p>
                  <p>
                    Quantum Learning provides <strong className="text-white">supplemental educational programs</strong> designed to enhance students' skills in public speaking, financial literacy, and innovation. Our programs are <strong className="text-white">not a substitute for formal schooling</strong> or required academic curriculum.
                  </p>
                </div>
                
                <p>Our services include:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Skill-building workshops and classes in specialized areas</li>
                  <li>Interactive learning experiences and peer collaboration</li>
                  <li>Educational resources and practice opportunities</li>
                  <li>Feedback and guidance from qualified instructors</li>
                </ul>
                
                <p>
                  <strong className="text-white">Complementary Learning:</strong> Our programs work best when combined with traditional education 
                  and family support. We encourage parents to integrate learnings from our programs into ongoing educational conversations at home.
                </p>
              </div>
            </div>

            {/* Results and Outcomes */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Results and Individual Outcomes</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Info className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p><strong className="text-yellow-400">Individual Results May Vary:</strong></p>
                      <p>
                        While we design our programs based on proven educational methodologies and have seen positive outcomes 
                        with many students, <strong className="text-white">individual results will vary</strong> based on multiple factors.
                      </p>
                    </div>
                  </div>
                </div>
                
                <p><strong className="text-white">Factors Affecting Learning Outcomes:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Individual student learning style and pace</li>
                  <li>Level of engagement and participation in activities</li>
                  <li>Consistent attendance and completion of assignments</li>
                  <li>Family support and reinforcement of concepts</li>
                  <li>Student's starting skill level and background</li>
                  <li>Age, developmental stage, and readiness to learn</li>
                </ul>
                
                <p>
                  <strong className="text-white">No Guarantees:</strong> We cannot guarantee specific educational outcomes, skill improvements, 
                  or performance results. Our commitment is to provide high-quality instruction and support to help each student 
                  reach their individual potential within the program framework.
                </p>
              </div>
            </div>

            {/* Age Appropriateness */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Age and Grade Level Suitability</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">Target Audience:</strong> Our programs are designed for students in grades 2-8, 
                  with content and activities appropriate for typical developmental stages within this range.
                </p>
                
                <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                  <p><strong className="text-white">Developmental Considerations:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Some concepts may be challenging for younger students and may require additional parental support</li>
                    <li>Advanced students may find certain activities below their current skill level</li>
                    <li>Students with special needs may require accommodations not specifically addressed in our standard curriculum</li>
                    <li>Individual maturity and social readiness affect participation in group activities</li>
                  </ul>
                </div>
                
                <p>
                  Parents are encouraged to consider their child's individual readiness and learning needs when enrolling. 
                  We're happy to discuss specific concerns during consultations.
                </p>
              </div>
            </div>

            {/* Technology Requirements */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Technology and Access Requirements</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">Technical Dependencies:</strong> Our programs rely on internet connectivity and digital devices. 
                  We cannot control or guarantee the reliability of individual internet connections, devices, or third-party platforms.
                </p>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p><strong className="text-red-400">Technical Issues:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Internet outages or slow connections may affect class participation</li>
                    <li>Device compatibility issues may impact access to materials</li>
                    <li>Platform updates or changes by third-party services may temporarily affect access</li>
                    <li>We provide technical support when possible but cannot resolve all individual technical challenges</li>
                  </ul>
                </div>
                
                <p>
                  Families are responsible for ensuring adequate technology and internet access for program participation. 
                  We provide guidance on technical requirements but cannot guarantee compatibility with all devices or connections.
                </p>
              </div>
            </div>

            {/* Instructor Qualifications */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Instructor Qualifications and Expertise</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">Qualified Instructors:</strong> Our instructors are selected based on their expertise in relevant 
                  subject areas, teaching experience, and ability to work effectively with children in the target age range.
                </p>
                
                <p><strong className="text-white">Areas of Expertise:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Educational background and/or professional experience in program subject areas</li>
                  <li>Training in age-appropriate teaching methodologies</li>
                  <li>Experience with online education and digital learning platforms</li>
                  <li>Understanding of child development and learning differences</li>
                </ul>
                
                <div className="bg-blue-600/10 border border-blue-400/30 rounded-lg p-4">
                  <p><strong className="text-blue-400">Not Licensed Professionals:</strong> Unless specifically stated, our instructors are not licensed teachers, therapists, or financial advisors. Our programs provide general education and skill development, not professional advice or therapeutic intervention.</p>
                </div>
              </div>
            </div>

            {/* Limitation of Scope */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Info className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Scope and Limitations</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p><strong className="text-white">What We Provide:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Educational content and structured learning activities</li>
                  <li>Opportunities for skill practice and development</li>
                  <li>Peer interaction and collaborative learning experiences</li>
                  <li>Instructor feedback and encouragement</li>
                  <li>Age-appropriate introduction to specialized topics</li>
                </ul>
                
                <p><strong className="text-white">What We Do Not Provide:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Formal academic credit or transcripts</li>
                  <li>Professional certifications or credentials</li>
                  <li>Therapeutic services or special education interventions</li>
                  <li>Personal financial, legal, or business advice</li>
                  <li>Guaranteed preparation for specific tests or competitions</li>
                  <li>Childcare or supervision beyond class time</li>
                </ul>
              </div>
            </div>

            {/* Parent Involvement */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Parent and Family Involvement</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">Collaborative Approach:</strong> Our programs work best when families are engaged and supportive 
                  of their child's learning experience. Parent involvement enhances outcomes and helps reinforce program concepts.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p><strong className="text-green-400">Recommended Family Support:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Regular check-ins with your child about program activities and learnings</li>
                    <li>Encouragement to practice skills outside of class time</li>
                    <li>Creating opportunities for your child to apply new concepts</li>
                    <li>Communication with instructors when questions or concerns arise</li>
                  </ul>
                </div>
                
                <p>
                  While we provide structured learning experiences, family reinforcement and support significantly impact 
                  the long-term retention and application of program concepts.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-slate-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-slate-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Questions About Our Programs</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>
                  If you have questions about program content, expectations, or whether our services are right for your child, 
                  we encourage you to schedule a consultation or contact us directly:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong className="text-white">Email:</strong> <a href="mailto:thequantumlearning@gmail.com" className="text-blue-400 hover:text-blue-300">thequantumlearning@gmail.com</a></p>
                  <p><strong className="text-white">Consultation Booking:</strong> Available through our website scheduling system</p>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  We're committed to helping families make informed decisions about their child's supplemental education and are happy to discuss any concerns or questions you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
