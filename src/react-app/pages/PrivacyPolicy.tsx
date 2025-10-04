import { useEffect } from 'react';
import { Shield, UserCheck, Eye, Lock, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <Shield className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy and your child's safety are our top priorities. This policy explains how we protect and handle your information.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            
            {/* Introduction */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <UserCheck className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Introduction</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Skillsvera ("we," "our," or "us") is committed to protecting the privacy and safety of children who use our educational services. 
                This Privacy Policy explains how we collect, use, and protect information about students and their families, with special attention to 
                compliance with the Children's Online Privacy Protection Act (COPPA) for children under 13.
              </p>
            </div>

            {/* COPPA Compliance */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Child Privacy Protection (COPPA Compliance)</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">For Children Under 13:</strong> We comply with COPPA and do not knowingly collect personal information 
                  from children under 13 without verified parental consent. Parents must provide explicit consent before their child can participate 
                  in our programs.
                </p>
                <p>
                  <strong className="text-white">Parental Consent:</strong> Before enrolling a child under 13, we require parents to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Complete our enrollment form with their own contact information</li>
                  <li>Provide explicit written consent for their child's participation</li>
                  <li>Acknowledge our privacy practices regarding their child's information</li>
                  <li>Agree to our educational recording and communication policies</li>
                </ul>
                <p>
                  <strong className="text-white">Parent Rights:</strong> Parents have the right to review, update, or delete their child's information 
                  at any time by contacting us at <a href="mailto:skillsvera.team@gmail.com" className="text-blue-400 hover:text-blue-300">Skillsvera.team@gmail.com</a>.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p><strong className="text-white">Student Information:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>First name and age/grade level</li>
                  <li>Educational goals and interests</li>
                  <li>Class participation and assignment submissions</li>
                  <li>Progress assessments and feedback</li>
                </ul>
                
                <p><strong className="text-white">Parent/Guardian Information:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Full name and contact details (email, phone)</li>
                  <li>Billing information for program enrollment</li>
                  <li>Communication preferences</li>
                  <li>Emergency contact information</li>
                </ul>

                <p><strong className="text-white">Technical Information:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Device and browser information for platform compatibility</li>
                  <li>IP addresses for security and fraud prevention</li>
                  <li>Usage data to improve our educational platform</li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>We use collected information solely for educational purposes:</p>
                <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
                  <li>Delivering our educational programs and communicating with students</li>
                  <li>Providing personalized feedback and progress tracking</li>
                  <li>Communicating with parents about their child's participation and progress</li>
                  <li>Processing payments and managing enrollments</li>
                  <li>Ensuring platform security and preventing unauthorized access</li>
                  <li>Improving our educational content and delivery methods</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">We do not:</strong> Sell, rent, or share personal information with third parties for marketing purposes. 
                  We do not use student information for behavioral advertising or creating profiles for non-educational commercial purposes.
                </p>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Information Sharing and Disclosure</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>We may share information in limited circumstances:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong className="text-white">Service Providers:</strong> Trusted third-party services that help us operate our platform (payment processing, email services, video conferencing)</li>
                  <li><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or to protect the safety of our students</li>
                  <li><strong className="text-white">Business Transfers:</strong> In the event of a business sale or merger, with continued privacy protection commitments</li>
                </ul>
                <p>All service providers must agree to protect student information according to this policy and applicable laws.</p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Data Security</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>We implement industry-standard security measures to protect your information:</p>
                <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
                  <li>Encrypted data transmission and storage</li>
                  <li>Regular security audits and system updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Secure video conferencing platforms with privacy controls</li>
                  <li>Regular staff training on privacy and security practices</li>
                </ul>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Data Retention</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>
                  We retain student information only as long as necessary for educational purposes or as required by law. 
                  Generally, we keep student records for up to 3 years after program completion to provide ongoing support 
                  and program improvement. Parents may request earlier deletion of their child's information by contacting us.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <UserCheck className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Your Rights and Choices</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>Parents and eligible students have the right to:</p>
                <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
                  <li>Review and request copies of personal information we have collected</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of personal information (subject to legal requirements)</li>
                  <li>Withdraw consent for information collection (may affect program participation)</li>
                  <li>Opt out of non-essential communications</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at <a href="mailto:skillsvera.team@gmail.com" className="text-blue-400 hover:text-blue-300">skillsvera.team@gmail.com</a>.
                </p>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Policy Updates</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>
                  We may update this Privacy Policy periodically. We will notify parents of significant changes via email 
                  and post the updated policy on our website with a new effective date. Continued use of our services 
                  after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-slate-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-slate-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>For questions about this Privacy Policy or our privacy practices, please contact:</p>
                <div className="mt-4 space-y-2">
                  <p><strong className="text-white">Privacy Officer</strong></p>
                  <p>Skillsvera</p>
                  <p>Email: <a href="mailto:skillsvera.team@gmail.com" className="text-blue-400 hover:text-blue-300">skillsvera.team@gmail.com</a></p>
                  <p>General Inquiries: <a href="mailto:skillsvera.team@gmail.com" className="text-blue-400 hover:text-blue-300">skillsvera.team@gmail.com</a></p>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  We are committed to addressing privacy concerns promptly and will respond to inquiries within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
