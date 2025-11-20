import { useEffect } from 'react';
import { Cookie, Settings, Eye, Shield, Info, Mail } from 'lucide-react';

export default function CookiePolicy() {
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
            <Cookie className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understanding how we use cookies and similar technologies to enhance your experience on our website.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            
            {/* What Are Cookies */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Info className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and enabling certain website features.
                </p>
                
                <div className="bg-blue-600/10 border border-blue-400/30 rounded-lg p-4">
                  <p><strong className="text-blue-400">Simple Explanation:</strong></p>
                  <p>
                    Think of cookies like a name tag that helps our website remember you when you return. They store small pieces of information 
                    about your visit to make your next visit smoother and more personalized.
                  </p>
                </div>
                
                <p>
                  Similar technologies include pixel tags, web beacons, and local storage, which serve similar purposes of improving website 
                  functionality and user experience.
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Types of Cookies We Use</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-6">
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-white mb-3">Essential Cookies (Always Active)</h3>
                  <p className="mb-3"><strong className="text-green-400">Purpose:</strong> These cookies are necessary for our website to function properly.</p>
                  <p><strong className="text-white">What they do:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Enable basic website functionality like page navigation</li>
                    <li>Remember your login status (if you have an account)</li>
                    <li>Maintain security and prevent unauthorized access</li>
                    <li>Support essential features like contact forms and scheduling</li>
                  </ul>
                  <p className="mt-3 text-sm text-green-300">
                    <strong>Note:</strong> These cookies cannot be disabled as they are essential for the website to work.
                  </p>
                </div>

                <div className="bg-blue-600/10 border border-blue-400/30 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-white mb-3">Analytics Cookies (Optional)</h3>
                  <p className="mb-3"><strong className="text-blue-400">Purpose:</strong> Help us understand how visitors use our website to improve the experience.</p>
                  <p><strong className="text-white">What they do:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Track which pages are most popular</li>
                    <li>Measure how long visitors spend on our site</li>
                    <li>Identify navigation patterns and potential issues</li>
                    <li>Help us improve website performance and content</li>
                  </ul>
                  <p className="mt-3 text-sm text-blue-300">
                    <strong>Privacy Protection:</strong> This data is anonymized and cannot identify individual users.
                  </p>
                </div>

                <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-white mb-3">Preference Cookies (Optional)</h3>
                  <p className="mb-3"><strong className="text-slate-400">Purpose:</strong> Remember your choices to provide a more personalized experience.</p>
                  <p><strong className="text-white">What they do:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Remember your language preference</li>
                    <li>Store accessibility settings</li>
                    <li>Recall your cookie consent choices</li>
                    <li>Maintain your preferred website settings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Third-Party Services</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  We use trusted third-party services to provide certain features on our website. These services may also use cookies 
                  or similar technologies according to their own privacy policies.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Calendly (Scheduling)</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Enables our consultation booking system</li>
                      <li>May use cookies to remember your booking preferences</li>
                      <li>Privacy Policy: <a href="https://calendly.com/privacy" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">calendly.com/privacy</a></li>
                    </ul>
                  </div>

                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Google Fonts</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Provides website typography and fonts</li>
                      <li>May collect basic usage data</li>
                      <li>Privacy Policy: <a href="https://policies.google.com/privacy" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
                    </ul>
                  </div>

                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Video Conferencing Platforms</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Used for live educational sessions (Zoom, Google Meet)</li>
                      <li>Subject to their respective privacy policies</li>
                      <li>Cookies only used when accessing their platforms directly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">You Have Control:</strong> You can control which cookies are used on our website and 
                  in your browser settings. Here are your options:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-600/10 border border-blue-400/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Block all cookies (may affect functionality)</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete existing cookies</li>
                      <li>Set up cookie notifications</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Our Cookie Consent</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Accept or decline optional cookies</li>
                      <li>Update preferences at any time</li>
                      <li>Granular control by cookie type</li>
                      <li>Clear consent history if desired</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p><strong className="text-yellow-400">Important Note:</strong> Disabling certain cookies may affect website functionality. 
                  Essential cookies cannot be disabled as they are necessary for basic website operation.</p>
                </div>
              </div>
            </div>

            {/* Browser Instructions */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Browser-Specific Instructions</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>Here's how to manage cookies in popular web browsers:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Chrome</h3>
                    <ol className="list-decimal list-inside ml-4 space-y-1 text-sm">
                      <li>Click Settings → Privacy and Security</li>
                      <li>Select "Cookies and other site data"</li>
                      <li>Choose your preferred settings</li>
                    </ol>
                  </div>
                  
                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Firefox</h3>
                    <ol className="list-decimal list-inside ml-4 space-y-1 text-sm">
                      <li>Click Settings → Privacy & Security</li>
                      <li>Go to "Cookies and Site Data"</li>
                      <li>Adjust settings as preferred</li>
                    </ol>
                  </div>
                  
                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Safari</h3>
                    <ol className="list-decimal list-inside ml-4 space-y-1 text-sm">
                      <li>Go to Safari → Preferences</li>
                      <li>Click "Privacy" tab</li>
                      <li>Adjust cookie settings</li>
                    </ol>
                  </div>
                  
                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Edge</h3>
                    <ol className="list-decimal list-inside ml-4 space-y-1 text-sm">
                      <li>Click Settings → Cookies and site permissions</li>
                      <li>Select "Cookies and site data"</li>
                      <li>Configure your preferences</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Children's Privacy and Cookies</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">COPPA Compliance:</strong> We are committed to protecting children's privacy online. 
                  Our use of cookies complies with the Children's Online Privacy Protection Act (COPPA).
                </p>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p><strong className="text-green-400">Our Commitment:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>We do not use cookies to collect personal information from children under 13 without parental consent</li>
                    <li>Analytics cookies are anonymized and cannot identify individual children</li>
                    <li>Parents can request information about or deletion of any cookies related to their child's use</li>
                    <li>We do not use cookies for behavioral advertising targeting children</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Info className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Updates to This Policy</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>
                  We may update this Cookie Policy periodically to reflect changes in our practices or for legal reasons. 
                  When we make significant changes, we will notify users by updating the "Last Updated" date at the top of this page 
                  and may provide additional notice through email or website announcements.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-slate-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-slate-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Questions About Cookies</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>If you have questions about our use of cookies or need help managing your preferences:</p>
                <div className="mt-4 space-y-2">
                  <p><strong className="text-white">Email:</strong> <a href="mailto:skillsvera.team@gmail.com" className="text-blue-400 hover:text-blue-300">skillsvera.team@gmail.com</a></p>
                  <p><strong className="text-white">General Inquiries:</strong> <a href="mailto:skillsvera.team@gmail.com" className="text-blue-400 hover:text-blue-300">skillsvera.team@gmail.com</a></p>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  We're happy to help you understand and control your cookie preferences to ensure a comfortable browsing experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
