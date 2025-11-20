import { useEffect } from 'react';
import { Link } from 'react-router';
import { Building2, Users, Award, ArrowRight, CheckCircle, Target, Zap, Shield } from 'lucide-react';

export default function Enterprise() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const clientTypes = [
    {
      icon: Building2,
      title: "Schools & Districts",
      description: "Integrate our curriculum into your existing programs or offer as enrichment courses.",
      features: [
        "Complete curriculum packages",
        "Teacher training and support",
        "Student progress tracking",
        "Customizable content delivery",
        "Integration with existing LMS"
      ]
    },
    {
      icon: Users,
      title: "Coaches & Trainers",
      description: "Enhance your coaching programs with proven educational methodologies.",
      features: [
        "Ready-to-use training materials",
        "Certification programs",
        "Ongoing support and updates",
        "Brand customization options",
        "Revenue sharing opportunities"
      ]
    },
    {
      icon: Award,
      title: "Educational Organizations",
      description: "Partner with us to deliver innovative skill-building programs at scale.",
      features: [
        "White-label solutions",
        "Multi-location deployment",
        "Custom branding and materials",
        "Dedicated account management",
        "Performance analytics and reporting"
      ]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Proven Results",
      description: "98% satisfaction rate with measurable improvements in student confidence and skills"
    },
    {
      icon: Zap,
      title: "Quick Implementation",
      description: "Get started in as little as 2 weeks with our streamlined onboarding process"
    },
    {
      icon: Shield,
      title: "Comprehensive Support",
      description: "Dedicated account management, training, and ongoing technical support"
    }
  ];

  const packages = [
    {
      name: "Starter License",
      price: "$500",
      description: "Perfect for individual coaches or small organizations",
      features: [
        "Basic curriculum access",
        "Up to 50 students per year",
        "Email support",
        "Digital resources only",
        "6-month license term"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional License",
      price: "$899",
      description: "Comprehensive solution for schools and training organizations",
      features: [
        "Complete curriculum suite",
        "Up to 200 students per year",
        "Teacher training workshop",
        "Printed and digital materials",
        "Priority phone & email support",
        "12-month license term",
        "Progress tracking tools"
      ],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      description: "Tailored solutions for large-scale implementations",
      features: [
        "Unlimited students",
        "Custom curriculum development",
        "White-label branding",
        "Dedicated account manager",
        "On-site training available",
        "Multi-year agreements",
        "Custom integrations",
        "Revenue sharing options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Scale innovative education across your organization with our comprehensive curriculum licensing
              and partnership programs designed for schools, coaches, and educational entities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/schedule"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-blue-600 text-white font-semibold rounded-full hover:from-slate-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions for different types of educational organizations and professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => {
              const Icon = client.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-slate-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{client.title}</h3>
                    <p className="text-gray-300 mb-6">{client.description}</p>

                    <div className="space-y-2">
                      {client.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Skillsvera
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with us for proven methodologies, comprehensive support, and measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Licensing Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible licensing options to meet your organization's needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                pkg.popular
                  ? 'border-slate-400/50 ring-2 ring-slate-400/20'
                  : 'border-white/10 hover:border-slate-400/30'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-slate-700 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-300 text-sm">{pkg.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/schedule"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-slate-700 to-blue-600 text-white hover:from-slate-800 hover:to-blue-700'
                      : 'border-2 border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined approach gets you up and running quickly with ongoing support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description: "We learn about your organization's needs, goals, and current programs"
              },
              {
                step: "02",
                title: "Custom Proposal",
                description: "Receive a tailored proposal with pricing, timeline, and implementation plan"
              },
              {
                step: "03",
                title: "Training & Setup",
                description: "Your team receives comprehensive training and all necessary materials"
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Go live with dedicated support and ongoing guidance for success"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-slate-600/20 to-blue-600/20 backdrop-blur-lg rounded-3xl p-12 border border-slate-400/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-normal">
              Ready to Transform Education Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading educational organizations that are already using Skillsvera
              to prepare students for success in the modern world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/schedule"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-blue-600 text-white font-semibold rounded-full hover:from-slate-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Enterprise Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

