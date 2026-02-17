import React from 'react';
import Head from 'next/head';
import { 
  Calculator, 
  Users, 
  Clock, 
  Shield, 
  TrendingDown, 
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

export default function ChachaJiWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [calculatorOpen, setCalculatorOpen] = React.useState(false);
  const [usEmployees, setUsEmployees] = React.useState(5);
  const [avgSalary, setAvgSalary] = React.useState(75000);

  const indiaCost = usEmployees * 18000;
  const usCost = usEmployees * avgSalary;
  const savings = usCost - indiaCost;
  const savingsPercent = ((savings / usCost) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>ChachaJi Outsourcing | Premium Accounting for US CPA Firms</title>
        <meta name="description" content="India's leading accounting outsourcing partner. Save 70% on tax prep, bookkeeping, payroll & audit support." />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CJ</span>
              </div>
              <span className="text-xl font-bold text-blue-900">ChachaJi Outsourcing</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-900 font-medium">Services</a>
              <a href="#calculator" className="text-gray-600 hover:text-blue-900 font-medium">Savings Calculator</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-900 font-medium">Testimonials</a>
              <a href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition">Get Started</a>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4 px-4 space-y-4">
            <a href="#services" className="block text-gray-600 font-medium">Services</a>
            <a href="#calculator" className="block text-gray-600 font-medium">Savings Calculator</a>
            <a href="#testimonials" className="block text-gray-600 font-medium">Testimonials</a>
            <a href="#contact" className="block bg-blue-900 text-white px-6 py-2 rounded-lg font-medium text-center">Get Started</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-700/50 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Trusted by 200+ US CPA Firms
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Cut Costs by 70% with India's Premier Accounting Partner
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert tax preparation, bookkeeping, payroll & audit support. 
                US GAAP compliant. SOC 2 certified. Overnight turnaround.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-center hover:bg-gray-100 transition">
                  Schedule Free Consultation
                </a>
                <button 
                  onClick={() => setCalculatorOpen(true)}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-white/10 transition"
                >
                  Calculate Your Savings
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>Free trial available</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400">70%</div>
                    <div className="text-blue-200">Average Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">24hr</div>
                    <div className="text-blue-200">Turnaround Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">500+</div>
                    <div className="text-blue-200">CPAs Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">99.8%</div>
                    <div className="text-blue-200">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Accounting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end support for CPA firms. From tax prep to audit support, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calculator className="w-10 h-10 text-blue-900" />,
                title: "Tax Preparation",
                description: "Individual & business returns. 1040, 1120, 1065, 990s. Multi-state expertise."
              },
              {
                icon: <Users className="w-10 h-10 text-blue-900" />,
                title: "Bookkeeping",
                description: "Monthly reconciliations, AP/AR, financial statements, QuickBooks & Xero."
              },
              {
                icon: <Clock className="w-10 h-10 text-blue-900" />,
                title: "Payroll Processing",
                description: "Full-service payroll, tax filings, W-2s, 1099s, direct deposit setup."
              },
              {
                icon: <Shield className="w-10 h-10 text-blue-900" />,
                title: "Audit Support",
                description: "Audit preparation, documentation, workpaper support, client coordination."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your Savings</h2>
            <p className="text-xl text-blue-200">See how much you could save by outsourcing to India</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Number of US Employees</label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={usEmployees}
                  onChange={(e) => setUsEmployees(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-2xl font-bold mt-2">{usEmployees} employees</div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Average US Salary</label>
                <input
                  type="range"
                  min="50000"
                  max="120000"
                  step="5000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-2xl font-bold mt-2">${avgSalary.toLocaleString()}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-gray-300 mb-2">Current US Cost</div>
                <div className="text-3xl font-bold">${usCost.toLocaleString()}</div>
                <div className="text-sm text-gray-400">per year</div>
              </div>
              <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400">
                <div className="text-green-300 mb-2">With ChachaJi</div>
                <div className="text-3xl font-bold text-green-400">${indiaCost.toLocaleString()}</div>
                <div className="text-sm text-green-300">per year</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-gray-300 mb-2">Your Savings</div>
                <div className="text-3xl font-bold text-green-400">${savings.toLocaleString()}</div>
                <div className="text-sm text-green-300">{savingsPercent}% less</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by CPA Firms Nationwide</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "ChachaJi reduced our tax season stress by 80%. Their team is professional, accurate, and always meets deadlines.",
                author: "Michael Roberts",
                firm: "Roberts & Associates CPA",
                location: "Dallas, TX"
              },
              {
                quote: "We saved $180,000 in our first year. The quality is outstanding - we actually expanded our client base because of the capacity.",
                author: "Sarah Chen",
                firm: "Chen Financial Group",
                location: "San Francisco, CA"
              },
              {
                quote: "The overnight turnaround is a game-changer. We submit work at 6 PM, it's done by 9 AM the next day. Incredible.",
                author: "David Martinez",
                firm: "Martinez Tax Services",
                location: "Miami, FL"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-8">
                <div className="text-blue-900 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.firm}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why CPA Firms Choose ChachaJi</h2>
              <div className="space-y-6">
                {[
                  { title: "US GAAP & IRS Compliant", desc: "Our team is trained in US accounting standards and tax law." },
                  { title: "SOC 2 Type II Certified", desc: "Enterprise-grade security for your client data." },
                  { title: "Dedicated Account Manager", desc: "Single point of contact for seamless communication." },
                  { title: "No Long-Term Contracts", desc: "Month-to-month flexibility. Cancel anytime." },
                  { title: "Free Trial Period", desc: "Test our services risk-free for 30 days." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>hello@chachaji.io</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>New Delhi, India</span>
                </div>
              </div>
              <a href="#contact" className="block mt-8 bg-white text-blue-900 text-center py-4 rounded-lg font-bold hover:bg-gray-100 transition">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Free Consultation</h2>
            <p className="text-xl text-gray-600">Speak with our team about your firm's needs</p>
          </div>

          <form className="bg-gray-50 rounded-2xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-900 focus:border-transparent" placeholder="John Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Firm Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-900 focus:border-transparent" placeholder="Smith & Associates CPA" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-900 focus:border-transparent" placeholder="john@smithcpa.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-900 focus:border-transparent" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Services Interested In</label>
              <select className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                <option>Select a service...</option>
                <option>Tax Preparation</option>
                <option>Bookkeeping</option>
                <option>Payroll Processing</option>
                <option>Audit Support</option>
                <option>Multiple Services</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-900 focus:border-transparent" placeholder="Tell us about your firm and what you're looking for..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition flex items-center justify-center">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">CJ</span>
                </div>
                <span className="text-lg font-bold">ChachaJi</span>
              </div>
              <p className="text-gray-400">India's premier accounting outsourcing partner for US CPA firms.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tax Preparation</li>
                <li>Bookkeeping</li>
                <li>Payroll Processing</li>
                <li>Audit Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@chachaji.io</li>
                <li>+91 98765 43210</li>
                <li>New Delhi, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ChachaJi Outsourcing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
