import { useEffect } from 'react';
import { Scale, Users, Shield, AlertCircle, FileText, Mail } from 'lucide-react';

export default function TermsOfService() {
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
            <Scale className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These terms outline the agreement between Quantum Learning and families using our educational services.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            
            {/* Acceptance of Terms */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                By enrolling your child in Quantum Learning programs or using our website, you ("Parent/Guardian") agree to these Terms of Service. 
                These terms apply to all users of our educational services, including parents, guardians, and students. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </div>

            {/* Description of Services */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Our Educational Services</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Quantum Learning provides online educational programs for students in grades 2-8, focusing on:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Public Speaking & Communication Skills</li>
                  <li>Financial Literacy Education</li>
                  <li>Innovation & Entrepreneurship</li>
                </ul>
                <p>
                  Our programs are offered in both live (synchronous) and self-paced (asynchronous) formats, lasting approximately 9 weeks each. 
                  We also offer trial classes, consultation services, and enterprise solutions for educational organizations.
                </p>
              </div>
            </div>

            {/* Website Use */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Website Use and Access</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p><strong className="text-white">Permitted Use:</strong> Our website and educational materials are for personal, non-commercial use only. You may access and use our services for the educational benefit of enrolled students.</p>
                
                <p><strong className="text-white">Prohibited Activities:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Sharing login credentials or allowing unauthorized access</li>
                  <li>Recording, copying, or redistributing class content without permission</li>
                  <li>Using our services for any illegal or inappropriate purposes</li>
                  <li>Attempting to disrupt or interfere with our platform's operation</li>
                  <li>Impersonating other users or providing false information</li>
                </ul>
                
                <p><strong className="text-white">Account Security:</strong> You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>
              </div>
            </div>

            {/* Class Participation */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Class Participation Guidelines</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p><strong className="text-white">Live Class Requirements:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Students should join classes on time and be prepared to participate</li>
                  <li>Stable internet connection and appropriate device required</li>
                  <li>Quiet, distraction-free environment recommended</li>
                  <li>Camera and microphone capabilities needed for interactive sessions</li>
                </ul>
                
                <p><strong className="text-white">Attendance Policy:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Regular attendance is expected and benefits student learning</li>
                  <li>Notify instructors of planned absences when possible</li>
                  <li>Missed live classes may have makeup materials available at our discretion</li>
                  <li>Excessive absences may affect program completion recognition</li>
                </ul>
              </div>
            </div>

            {/* Parent Responsibilities */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Parent and Guardian Responsibilities</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>As a parent or guardian, you agree to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide accurate enrollment information and keep contact details current</li>
                  <li>Ensure your child has necessary technology and internet access</li>
                  <li>Support your child's participation and learning experience</li>
                  <li>Communicate respectfully with instructors and staff</li>
                  <li>Review and understand our refund and cancellation policies</li>
                  <li>Supervise younger children during online sessions as needed</li>
                  <li>Promptly pay all fees associated with enrolled programs</li>
                </ul>
                
                <p><strong className="text-white">Communication:</strong> We will communicate with parents via email regarding program updates, progress reports, and important notices. Please ensure our emails don't go to spam folders.</p>
              </div>
            </div>

            {/* Payment and Billing */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Payment Terms</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p><strong className="text-white">Program Fees:</strong> All program fees must be paid in full before the program start date unless alternative arrangements are made in writing.</p>
                
                <p><strong className="text-white">Payment Methods:</strong> We accept major credit cards and digital payment methods. All fees are in USD unless otherwise specified.</p>
                
                <p><strong className="text-white">Late Payments:</strong> Failure to pay program fees may result in suspension of access to classes and materials until payment is received.</p>
                
                <p><strong className="text-white">Refunds:</strong> Please refer to our separate Refund & Cancellation Policy for detailed information about our refund procedures and timelines.</p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Intellectual Property Rights</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  All content provided through Quantum Learning programs, including curricula, videos, worksheets, and other materials, 
                  are protected by copyright and other intellectual property laws. This content is licensed to you for personal educational use only.
                </p>
                
                <p><strong className="text-white">Student Work:</strong> Students retain ownership of their original creative work produced during our programs. 
                We may use anonymized examples of student work for educational and promotional purposes with appropriate consent.</p>
              </div>
            </div>

            {/* Privacy and Safety */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Privacy and Child Safety</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>
                  Student privacy and safety are our top priorities. Our privacy practices are detailed in our Privacy Policy, 
                  which complies with COPPA and other applicable privacy laws. We maintain secure platforms and implement 
                  safety measures appropriate for educational settings with children.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Quantum Learning strives to provide high-quality educational services, but we cannot guarantee specific outcomes. 
                  Our liability is limited to the amount paid for services. We are not responsible for technical issues beyond our control, 
                  internet connectivity problems, or other circumstances that may affect program delivery.
                </p>
                
                <p><strong className="text-white">Force Majeure:</strong> We are not liable for delays or failures in service due to circumstances 
                beyond our reasonable control, including natural disasters, internet outages, or other emergencies.</p>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Termination of Services</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  We reserve the right to terminate or suspend access to our services for violations of these terms, 
                  inappropriate behavior, or non-payment of fees. In such cases, refunds will be considered based on 
                  the circumstances and our refund policy.
                </p>
                
                <p>
                  You may terminate your enrollment at any time by contacting us, subject to our cancellation and refund policies.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Modifications to Terms</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>
                  We may update these Terms of Service periodically to reflect changes in our services or legal requirements. 
                  We will notify users of significant changes via email and post updated terms on our website. 
                  Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Governing Law</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>
                  These Terms of Service are governed by the laws of the United States and the state in which Quantum Learning 
                  is incorporated. Any disputes will be resolved through appropriate legal channels in that jurisdiction.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-slate-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-slate-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Questions About These Terms</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>If you have questions about these Terms of Service, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong className="text-white">Quantum Learning</strong></p>
                  <p>Email: <a href="mailto:legal@quantumlearning.com" className="text-blue-400 hover:text-blue-300">legal@quantumlearning.com</a></p>
                  <p>General Inquiries: <a href="mailto:thequantumlearning@gmail.com" className="text-blue-400 hover:text-blue-300">thequantumlearning@gmail.com</a></p>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  We will respond to all inquiries within 48 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
