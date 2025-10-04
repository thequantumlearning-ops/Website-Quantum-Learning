import { useEffect } from 'react';
import { Users, Heart, Shield, MessageSquare, AlertCircle, Mail } from 'lucide-react';

export default function CodeOfConduct() {
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
            <Heart className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent">
              Code of Conduct
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creating a safe, respectful, and positive learning environment for all students and families.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            
            {/* Our Commitment */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Our Commitment to You</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  At Skillsvera, we believe that every child deserves to learn in an environment where they feel safe, 
                  respected, and valued. This Code of Conduct outlines the expectations for behavior and interaction for all 
                  participants in our programs – students, parents, guardians, and instructors.
                </p>
                
                <div className="bg-blue-600/10 border border-blue-400/30 rounded-lg p-4">
                  <p><strong className="text-blue-400">Our Core Values:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li><strong className="text-white">Respect:</strong> For each person's unique background, learning style, and contributions</li>
                    <li><strong className="text-white">Inclusivity:</strong> Creating welcoming spaces where all students can participate fully</li>
                    <li><strong className="text-white">Growth:</strong> Encouraging effort, learning from mistakes, and celebrating progress</li>
                    <li><strong className="text-white">Safety:</strong> Maintaining physical and emotional security for all participants</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Student Guidelines */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-600/20 to-slate-600/20 backdrop-blur-lg rounded-xl p-6 border border-blue-400/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Student Guidelines</h2>
                </div>
                <div className="text-gray-300 leading-relaxed space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Respectful Participation</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Listen actively when others are speaking and wait for your turn to contribute</li>
                      <li>Use appropriate language – no profanity, insults, or put-downs</li>
                      <li>Respect different opinions and approaches to problem-solving</li>
                      <li>Encourage classmates and celebrate their successes</li>
                      <li>Ask questions when you need help – there are no "silly" questions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Online Class Behavior</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Join classes on time and stay for the full session</li>
                      <li>Keep microphone muted when not speaking to minimize distractions</li>
                      <li>Use the chat feature appropriately – only for class-related comments</li>
                      <li>Maintain appropriate video presence (proper lighting, background, clothing)</li>
                      <li>Stay focused on class activities – avoid other devices or distractions</li>
                      <li>Use your real name and appropriate profile image</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Academic Integrity</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Complete your own work and assignments independently unless group work is specified</li>
                      <li>Give credit to sources when using information or ideas from others</li>
                      <li>Be honest about your effort and understanding – it's okay to struggle with concepts</li>
                      <li>Help others learn without doing their work for them</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p><strong className="text-green-400">Remember:</strong> Making mistakes is part of learning! We encourage you to take risks, try new things, and learn from any missteps along the way.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Guidelines */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-slate-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-slate-400/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Parent & Guardian Guidelines</h2>
                </div>
                <div className="text-gray-300 leading-relaxed space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Supporting Your Child's Learning</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Provide a quiet, supportive environment for your child during class time</li>
                      <li>Encourage your child's participation while respecting their independence</li>
                      <li>Communicate with instructors about any concerns or needs your child may have</li>
                      <li>Celebrate effort and progress, not just final outcomes</li>
                      <li>Help your child practice time management and responsibility for assignments</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Communication with Instructors</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Use respectful, professional communication in all interactions</li>
                      <li>Allow 24-48 hours for email responses during business days</li>
                      <li>Address concerns directly with instructors before escalating issues</li>
                      <li>Provide constructive feedback that helps improve the learning experience</li>
                      <li>Respect instructors' time and expertise</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Class Environment</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Minimize interruptions during live classes unless there's an emergency</li>
                      <li>Allow your child to participate independently when age-appropriate</li>
                      <li>Model respectful behavior if you need to interact during class time</li>
                      <li>Support our classroom management by reinforcing expectations at home</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Communication Standards */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Communication Standards</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p><strong className="text-white">All Community Members Agree To:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Use kind, respectful language in all verbal and written communication</li>
                  <li>Listen to others with open minds and hearts</li>
                  <li>Address conflicts directly and constructively</li>
                  <li>Respect privacy and confidentiality of other families</li>
                  <li>Focus on solutions rather than blame when problems arise</li>
                  <li>Give others the benefit of the doubt and assume positive intentions</li>
                </ul>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p><strong className="text-yellow-400">Inappropriate Communication:</strong> Harassment, discriminatory language, threats, or aggressive behavior will not be tolerated and may result in immediate removal from programs.</p>
                </div>
              </div>
            </div>

            {/* Diversity and Inclusion */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Celebrating Diversity and Inclusion</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">Welcoming All Families:</strong> Skillsvera welcomes students and families from all backgrounds, 
                  cultures, abilities, and family structures. We celebrate the diversity that enriches our learning community.
                </p>
                
                <p><strong className="text-white">Zero Tolerance Policy:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Discrimination based on race, ethnicity, religion, gender, ability, or family structure</li>
                  <li>Bullying, teasing, or excluding others based on differences</li>
                  <li>Stereotyping or making assumptions about others</li>
                  <li>Language or behavior that makes others feel unwelcome or unsafe</li>
                </ul>
                
                <div className="bg-blue-600/10 border border-blue-400/30 rounded-lg p-4">
                  <p><strong className="text-blue-400">Inclusive Practices:</strong> We actively work to create inclusive learning experiences where every student can see themselves represented and valued in our curriculum and community.</p>
                </div>
              </div>
            </div>

            {/* Technology Use */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Responsible Technology Use</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p><strong className="text-white">Digital Citizenship Guidelines:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Protect personal information and respect others' privacy</li>
                  <li>Do not record, screenshot, or share class content without permission</li>
                  <li>Use technology tools appropriately and as directed by instructors</li>
                  <li>Report technical issues promptly to get help</li>
                  <li>Follow platform rules and community guidelines for all digital tools used</li>
                </ul>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p><strong className="text-red-400">Prohibited Technology Use:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Recording or sharing class content without explicit permission</li>
                    <li>Using inappropriate backgrounds, names, or profile images</li>
                    <li>Accessing non-class websites or apps during learning time</li>
                    <li>Sharing login information or allowing unauthorized access to accounts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Consequences and Support */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Addressing Concerns and Violations</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">Our Approach:</strong> We believe in addressing behavioral concerns with understanding, 
                  clear communication, and opportunities for growth. Our goal is always to help students and families succeed.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p><strong className="text-green-400">First Response:</strong></p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                      <li>Private conversation with student/family</li>
                      <li>Clear explanation of expectations</li>
                      <li>Problem-solving together</li>
                      <li>Additional support if needed</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <p><strong className="text-yellow-400">Continued Concerns:</strong></p>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                      <li>Written behavior plan</li>
                      <li>Regular check-ins</li>
                      <li>Modified participation if needed</li>
                      <li>Family conference</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p><strong className="text-red-400">Serious Violations:</strong> Behavior that threatens safety, involves harassment or discrimination, 
                  or repeatedly disrupts learning may result in immediate suspension or removal from programs. Refunds in these cases 
                  will be considered based on individual circumstances.</p>
                </div>
              </div>
            </div>

            {/* Reporting and Support */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Getting Help and Reporting Concerns</h2>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p><strong className="text-white">We Want to Help:</strong> If you or your child experience any concerns about behavior, 
                feel uncomfortable, or need support with any aspect of our program, please reach out immediately.</p>
                
                <div className="bg-blue-600/10 border border-blue-400/30 rounded-lg p-4">
                  <p><strong className="text-blue-400">How to Report Concerns:</strong></p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Contact your instructor directly for class-specific issues</li>
                    <li>Email our support team for program-wide concerns</li>
                    <li>Request a private conference to discuss sensitive matters</li>
                    <li>Use anonymous feedback if you're not comfortable identifying yourself</li>
                  </ul>
                </div>
                
                <p>
                  <strong className="text-white">Confidentiality:</strong> We treat all reports with appropriate confidentiality and will work 
                  with you to address concerns while protecting everyone's privacy and safety.
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
                <p>For questions about this Code of Conduct or to report concerns:</p>
                <div className="mt-4 space-y-2">
                  <p><strong className="text-white">Program Support:</strong> <a href="mailto:skillsvera.team@gmail.com" className="text-blue-400 hover:text-blue-300">skillsvera.team@gmail.com</a></p>
                  <p><strong className="text-white">Urgent Concerns:</strong> Please mark your email as "URGENT" for immediate attention</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                  <p className="text-green-300">
                    <strong>Our Promise:</strong> We are committed to creating positive learning experiences for all students and families. 
                    When concerns arise, we will work together to find solutions that support everyone's success and well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
