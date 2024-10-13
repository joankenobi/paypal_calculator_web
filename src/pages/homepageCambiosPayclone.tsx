// import Link from "next/link"
// import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Globe, Smartphone, Calculator } from "lucide-react"

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="text-2xl font-bold text-blue-600">CambiosPay</div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          <a href="/paypal-calculator" className="text-gray-600 hover:text-blue-600 flex items-center">
            <Calculator className="w-4 h-4 mr-2" />
            PayPal Calculator
          </a>
        </nav>
        <button>Get Started</button>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-50 py-20 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Fast and Secure Money Transfers</h1>
              <p className="text-xl mb-8">Send money to your loved ones quickly and easily with CambiosPay.</p>
              <div className="flex space-x-4">
                <button>Start Sending <ArrowRight className="ml-2" /></button>
                <button>Learn More</button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg?height=400&width=400" alt="Money Transfer Illustration" className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CambiosPay?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Globe className="w-12 h-12 text-blue-600" />}
                title="Global Coverage"
                description="Send money to over 100 countries worldwide."
              />
              <FeatureCard
                icon={<Smartphone className="w-12 h-12 text-blue-600" />}
                title="Mobile App"
                description="Manage your transfers on-the-go with our mobile app."
              />
              <FeatureCard
                icon={<CheckCircle className="w-12 h-12 text-blue-600" />}
                title="Secure Transfers"
                description="Your money is protected with state-of-the-art security."
              />
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to start sending money?</h2>
            <p className="text-xl mb-8">Join thousands of satisfied customers who trust CambiosPay for their money transfers.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input placeholder="Enter your email" className="bg-white text-black" />
              <button>Get Started</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">CambiosPay</h3>
            <p className="text-sm text-gray-600">Fast and secure money transfers worldwide.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }:{icon:any,title:any, description:any}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}