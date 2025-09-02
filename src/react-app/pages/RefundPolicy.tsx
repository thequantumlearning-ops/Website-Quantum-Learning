import { useEffect } from 'react';
import { DollarSign, Calendar, Clock, AlertTriangle, CheckCircle, Mail } from 'lucide-react';

export default function RefundPolicy() {
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
            <DollarSign className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent">
              Refund & Cancellation Policy
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Clear and fair policies for trial classes, program cancellations, and refund processes.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            
            {/* Overview */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Policy Overview</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                At Quantum Learning, we want families to be completely satisfied with our educational programs. 
                This policy outlines our refund and cancellation procedures for trial classes, full programs, 
                and various circumstances that may arise. We strive to be fair while maintaining the sustainability 
                of our educational services.
              </p>
            </div>

            {/* Trial Classes */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-600/20 to-slate-600/20 backdrop-blur-lg rounded-xl p-6 border border-blue-400/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Trial Classes</h2>
                </div>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p><strong className="text-white">Free Trial Classes:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Trial classes are offered at no cost to help families experience our programs</li>
                    <li>Each family is eligible for one trial class per program area</li>
                    <li>Trial classes must be booked through our official scheduling system</li>
                  </ul>
                  
                  <p><strong className="text-white">Cancellation Requirements:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><span className="text-blue-400 font-semibold">24-hour notice required:</span> Please cancel at least 24 hours before your scheduled trial</li>
                    <li>Cancellations can be made via email or through our scheduling platform</li>
                    <li>Same-day cancellations or no-shows may affect eligibility for future trials</li>
                  </ul>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div className="text-yellow-200">
                        <strong>No-Show Policy:</strong> Repeated no-shows without notice may result in temporary suspension 
                        of trial class privileges to ensure spots are available for other interested families.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 9-Week Programs */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-slate-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-slate-400/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">9-Week Program Cancellations</h2>
                </div>
                <div className="text-gray-300 leading-relaxed space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Full Refund (100%)</h3>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <p><strong className="text-green-400">7+ days before program start:</strong></p>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Full refund of all program fees</li>
                        <li>No administrative fees or deductions</li>
                        <li>Refund processed within 5-7 business days</li>
                        <li>Cancellation must be submitted in writing via email</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Partial Refund (50%)</h3>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <p><strong className="text-yellow-400">Within 7 days before program start:</strong></p>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>50% refund of program fees</li>
                        <li>Administrative and preparation costs are retained</li>
                        <li>Refund processed within 5-7 business days</li>
                        <li>Written cancellation required</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">No Refund</h3>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p><strong className="text-red-400">After program has started:</strong></p>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>No refunds available once the program has begun</li>
                        <li>Access to class recordings and materials continues through program end</li>
                        <li>Exceptional circumstances may be considered on a case-by-case basis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Missed Classes */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Individual Missed Classes</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                  <p><strong className="text-white">No Refunds for Individual Missed Classes:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Program fees are not prorated for individual missed sessions</li>
                    <li>Class recordings are provided when available for review</li>
                    <li>Students can catch up using provided materials and resources</li>
                  </ul>
                </div>

                <div className="bg-blue-600/10 border border-blue-400/30 rounded-lg p-4">
                  <p><strong className="text-blue-400">Makeup Support Available:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Additional practice materials may be provided at our discretion</li>
                    <li>Brief instructor check-ins available for students who miss multiple sessions</li>
                    <li>Access to class resources extended when necessary</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Refund Process */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Refund Processing</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p><strong className="text-white">Processing Timeline:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>All eligible refunds are processed within <strong className="text-blue-400">5-7 business days</strong> of approval</li>
                  <li>Refunds are issued to the original payment method used for enrollment</li>
                  <li>Bank processing may add 1-3 additional business days for funds to appear</li>
                </ul>

                <p><strong className="text-white">Refund Request Process:</strong></p>
                <ol className="list-decimal list-inside ml-4 space-y-2">
                  <li>Submit cancellation request via email to <a href="mailto:thequantumlearning@gmail.com" className="text-blue-400 hover:text-blue-300">thequantumlearning@gmail.com</a></li>
                  <li>Include student name, program details, and reason for cancellation</li>
                  <li>Receive confirmation email with refund amount and timeline</li>
                  <li>Refund processed according to policy terms</li>
                </ol>
              </div>
            </div>

            {/* Special Circumstances */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Special Circumstances</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p><strong className="text-white">Exceptional Situations:</strong></p>
                <p>We understand that unexpected circumstances may arise. The following situations will be considered for special accommodation:</p>
                
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Serious family illness or medical emergencies</li>
                  <li>Significant technical issues preventing program participation</li>
                  <li>Military deployment or emergency relocation</li>
                  <li>Major changes in family circumstances affecting program participation</li>
                </ul>

                <div className="bg-blue-600/10 border border-blue-400/30 rounded-lg p-4 mt-4">
                  <p><strong className="text-blue-400">Case-by-Case Review:</strong> These situations will be evaluated individually, 
                  and we may offer alternative solutions such as program transfers, extended access, or modified refund terms.</p>
                </div>
              </div>
            </div>

            {/* Transfer Policy */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Program Transfers</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p><strong className="text-white">Transfer to Future Sessions:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Students may transfer to a future session of the same program</li>
                  <li>Transfer requests must be made at least 48 hours before program start</li>
                  <li>Subject to availability in the requested session</li>
                  <li>No additional fees for program transfers when requested in advance</li>
                </ul>

                <p><strong className="text-white">Program Type Changes:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Changes between program formats may be available</li>
                  <li>Price differences will be adjusted accordingly</li>
                  <li>Subject to program availability and timing</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-slate-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-slate-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Cancellation & Refund Support</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>For all cancellations, refund requests, or questions about this policy:</p>
                <div className="mt-4 space-y-2">
                  <p><strong className="text-white">Email:</strong> <a href="mailto:thequantumlearning@gmail.com" className="text-blue-400 hover:text-blue-300">thequantumlearning@gmail.com</a></p>
                  <p><strong className="text-white">Subject Line:</strong> "Cancellation Request - [Student Name]" or "Refund Inquiry"</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                  <p className="text-green-300"><strong>Response Time:</strong> All cancellation and refund requests will receive a response within 24 hours during business days. We're here to help make the process as smooth as possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
