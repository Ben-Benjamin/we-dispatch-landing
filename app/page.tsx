"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronDown, Phone, MapPin, Clock, Users, Headphones, Shield, Zap, Menu, X } from "lucide-react"

const faqs = [
  {
    question: "What is dispatch and why do I need it?",
    answer:
      "Dispatch is a professional answering and call routing service that ensures every customer call is answered promptly and professionally, 24/7. You need it to capture every business opportunity, provide excellent customer service even when you're busy, and maintain a professional image without the cost of full-time staff. Missing calls means missing revenue — we make sure that never happens.",
  },
  {
    question: "What kind of businesses can use your services?",
    answer:
      "Our services are designed for service-based businesses including HVAC & Air Conditioning, Locksmith Services, Roofing, Garage Doors, and Chimney Services. If your business relies on timely response to customer calls, we can help.",
  },
  {
    question: "Do your operators know the technical details of my field?",
    answer:
      "Yes! Our operators are trained specifically for your industry. We work with you during onboarding to understand your business, services, pricing, service areas, and common customer questions so our team can represent your company accurately and professionally. We become an extension of your team.",
  },
  {
    question: "What happens after your operator answers the call?",
    answer:
      "After answering, our operator gathers the necessary information from the caller, enters it into our system, and immediately dispatches the job to you via your preferred method — whether that's text, email, app notification, or direct phone transfer. You'll have all the details you need to respond quickly and professionally.",
  },
  {
    question: "Do I have to change my phone number?",
    answer:
      "No, you don't need to change your phone number. We have our in-house dedicated CRM that handles inbound and outbound calls efficiently. If you have an existing system, we can work with that too. Your customers will continue calling the same number they always have, and you maintain full control over your business identity.",
  },
  {
    question: "How much do you charge?",
    answer:
      "Our pricing depends on the specific services you require and your call volume. For the most accurate pricing information tailored to your business needs, please reach out through our contact form below and our representatives will be happy to provide a detailed quote. You can also call or text us directly at +1 (202) 601-5880 — we're here to help!",
  },
  {
    question: "Do I need to purchase any equipment?",
    answer:
      "No equipment purchase is necessary. Our service is completely cloud-based and works seamlessly with our in-house dedicated CRM that handles inbound and outbound calls efficiently. If you have an existing system, we can integrate with that too. There are no hardware costs, no installation fees, and no technical headaches.",
  },
]

const services = [
  {
    icon: Headphones,
    title: "24/7 Live Answering",
    description: "Professional operators answer every call, day or night, ensuring you never miss a customer.",
  },
  {
    icon: Zap,
    title: "Instant Dispatch",
    description: "Jobs are dispatched immediately via text, email, or app notification to your technicians.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "We handle scheduling, follow-ups, and customer communications on your behalf.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "All calls are recorded and monitored to ensure the highest service standards.",
  },
]

const industries = [
  "HVAC & Air Conditioning",
  "Locksmith Services",
  "Roofing",
  "Garage Doors",
  "Chimney Services",
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-white rounded-xl shadow-md shadow-sky-200 overflow-hidden border-l-4 border-[#0D2B6B]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 text-left hover:bg-sky-50 transition-colors"
      >
        <span className="font-semibold text-[#0D2B6B] pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-[#0D2B6B] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="px-5 pb-5 text-[#0D2B6B]/80 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    businessType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSezBXW4dI4qXpNNb38o7e0euMYp-9-NcntxiyFTeS97ccDd6A/formResponse"
    
    const formDataToSend = new FormData()
    formDataToSend.append("entry.1017935498", formData.fullName)
    formDataToSend.append("entry.1794267777", formData.phone)
    formDataToSend.append("entry.130498498", `Email: ${formData.email} | Business: ${formData.businessType}`)
    formDataToSend.append("entry.1498407077", formData.message || "No message provided")

    try {
      await fetch(formUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      })
      setSubmitStatus("success")
      setFormData({ fullName: "", phone: "", email: "", businessType: "", message: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <main className="font-sans">
      {/* HEADER - Deep Navy */}
      <header className="sticky top-0 z-50 bg-[#0D2B6B] shadow-lg">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/wedispatch_logo_clean.png"
              alt="We Dispatch"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-sky-300 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Phone Button */}
          <a
            href="tel:+12026015880"
            className="hidden md:flex items-center gap-2 bg-white text-[#0D2B6B] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-sky-100 transition-colors"
          >
            <Phone className="h-4 w-4" />
            (202) 601-5880
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a2058] border-t border-white/10 px-6 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-sky-300 hover:bg-white/10 transition-colors py-3 px-2 rounded-lg font-medium text-base"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+12026015880"
                className="mt-3 flex items-center justify-center gap-2 bg-white text-[#0D2B6B] px-4 py-3 rounded-lg font-semibold text-sm hover:bg-sky-100 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (202) 601-5880
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/wedispatch_banner_clean.png"
            alt="We Dispatch - Professional 24/7 Dispatch Services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B6B]/85 via-[#0D2B6B]/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Reliable 24/7 Dispatch Solutions For Service Businesses
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
              We manage your calls, coordinate technicians, and optimize scheduling — so you can focus on delivering exceptional service.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#0D2B6B] px-8 py-4 text-white font-semibold hover:bg-[#1565C0] transition-colors shadow-xl"
              >
                Request Consultation
              </a>
              <a
                href="tel:+12026015880"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
            <div className="mt-12 flex items-center">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-wide">Never Miss A Call</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#E8F4FD]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B6B]">
              Your Business Deserves Professional Dispatch
            </h2>
            <p className="mt-6 text-lg text-[#0D2B6B]/80 leading-relaxed">
              We Dispatch is a U.S.-based professional answering and dispatch service built specifically for service businesses. Our trained operators become an extension of your team, ensuring every call is answered professionally and every job is dispatched efficiently.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-xl p-8 shadow-lg shadow-sky-200 border-l-4 border-[#0D2B6B]">
              <div className="text-4xl font-bold text-[#0D2B6B]">24/7</div>
              <h3 className="mt-2 font-semibold text-[#0D2B6B]">Always Available</h3>
              <p className="mt-2 text-[#0D2B6B]/70">
                Our operators are ready to answer your calls around the clock, including holidays.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg shadow-sky-200 border-l-4 border-[#0D2B6B]">
              <div className="text-4xl font-bold text-[#0D2B6B]">{"<30s"}</div>
              <h3 className="mt-2 font-semibold text-[#0D2B6B]">Answer Time</h3>
              <p className="mt-2 text-[#0D2B6B]/70">
                Average call answer time under 30 seconds — your customers never wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative">
        <div className="absolute inset-0">
          <Image
            src="/services-bg.jpg"
            alt="Professional dispatch operators"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0D2B6B]/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Never Miss A Call</h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Everything you need to keep your business running smoothly, all in one place.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/95 rounded-xl p-6 shadow-lg border-l-4 border-sky-400 hover:shadow-xl transition-shadow"
              >
                <service.icon className="h-10 w-10 text-[#0D2B6B]" />
                <h3 className="mt-4 font-semibold text-[#0D2B6B]">{service.title}</h3>
                <p className="mt-2 text-sm text-[#0D2B6B]/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section id="industries" className="bg-[#E8F4FD]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B6B]">Industries We Serve</h2>
            <p className="mt-4 text-lg text-[#0D2B6B]/80 max-w-2xl mx-auto">
              We specialize in dispatch services for a wide range of service-based businesses.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-6 py-4 shadow-md shadow-sky-200 border-l-4 border-[#0D2B6B] text-[#0D2B6B] font-medium hover:shadow-lg transition-shadow"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-[#C8E6F5]">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B6B]">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-[#0D2B6B]/80">
              Everything you need to know about our dispatch services
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-[#E8F4FD]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B6B]">Get In Touch</h2>
              <p className="mt-4 text-lg text-[#0D2B6B]/80 leading-relaxed">
                Ready to never miss another call? Contact us today for a free consultation and customized quote for your business.
              </p>
              <div className="mt-8 space-y-6">
                <a
                  href="tel:+12026015880"
                  className="flex items-center gap-4 text-[#0D2B6B] hover:text-[#1565C0] transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D2B6B] text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Call or Text Us</div>
                    <div className="text-lg">+1 (202) 601-5880</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-[#0D2B6B]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D2B6B] text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Our Address</div>
                    <div>600 E St NW #600, Washington, DC 20004</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[#0D2B6B]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D2B6B] text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Availability</div>
                    <div>24 hours a day, 7 days a week</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-sky-200">
              <h3 className="text-xl font-bold text-[#0D2B6B]">Send Us an Inquiry</h3>
              {submitStatus === "success" ? (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                  <div className="text-green-600 font-semibold text-lg">Thank you!</div>
                  <p className="mt-2 text-green-700">Your inquiry has been submitted. We will get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-4 text-[#0D2B6B] underline hover:no-underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-[#0D2B6B]">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-sky-200 px-4 py-3 text-[#0D2B6B] placeholder-[#0D2B6B]/40 focus:border-[#0D2B6B] focus:ring-2 focus:ring-[#0D2B6B]/20 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0D2B6B]">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-sky-200 px-4 py-3 text-[#0D2B6B] placeholder-[#0D2B6B]/40 focus:border-[#0D2B6B] focus:ring-2 focus:ring-[#0D2B6B]/20 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0D2B6B]">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-sky-200 px-4 py-3 text-[#0D2B6B] placeholder-[#0D2B6B]/40 focus:border-[#0D2B6B] focus:ring-2 focus:ring-[#0D2B6B]/20 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-[#0D2B6B]">Business Type *</label>
                    <select
                      id="businessType"
                      required
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-sky-200 px-4 py-3 text-[#0D2B6B] focus:border-[#0D2B6B] focus:ring-2 focus:ring-[#0D2B6B]/20 transition-colors"
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0D2B6B]">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-sky-200 px-4 py-3 text-[#0D2B6B] placeholder-[#0D2B6B]/40 focus:border-[#0D2B6B] focus:ring-2 focus:ring-[#0D2B6B]/20 transition-colors resize-none"
                      placeholder="Tell us about your business and dispatch needs..."
                    />
                  </div>
                  {submitStatus === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-[#0D2B6B] px-6 py-4 font-semibold text-white hover:bg-[#1565C0] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative">
        <div className="absolute inset-0">
          <Image src="/wedispatch_footer_bg.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[rgba(10,25,70,0.82)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <Image
                src="/wedispatch_logo_clean.png"
                alt="We Dispatch"
                width={160}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="mt-4 text-white/80 text-sm leading-relaxed">
                Professional 24/7 dispatch services for service businesses across the United States. Never miss another call.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Quick Links</h4>
              <nav className="mt-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold text-white">Contact</h4>
              <div className="mt-4 space-y-3">
                <a href="tel:+12026015880" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                  <Phone className="h-4 w-4" />
                  +1 (202) 601-5880
                </a>
                <div className="flex items-start gap-2 text-white/80 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>600 E St NW #600, Washington, DC 20004, United States</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-white/70 text-sm">© 2026 WeDispatch | U.S. Dispatch Services</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
