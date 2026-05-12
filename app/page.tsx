"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is dispatch and why do I need it?",
    answer:
      "Dispatch is a professional answering and call routing service that ensures every customer call is answered promptly and professionally, 24/7. You need it to capture every business opportunity, provide excellent customer service even when you're busy, and maintain a professional image without the cost of full-time staff.",
  },
  {
    question: "What kind of businesses can use your services?",
    answer:
      "Our services are designed for service-based businesses across many industries including HVAC, plumbing, electrical, locksmith, towing, property management, medical practices, legal offices, and any business that needs professional call handling and dispatch services.",
  },
  {
    question: "Do your operators know the technical details of my field?",
    answer:
      "Yes! Our operators are trained specifically for your industry. We work with you during onboarding to understand your business, services, pricing, and common customer questions so our team can represent your company accurately and professionally.",
  },
  {
    question: "What happens after your operator answers the call?",
    answer:
      "After answering, our operator gathers the necessary information from the caller, enters it into our system, and immediately dispatches the job to you via your preferred method - whether that's text, email, app notification, or direct phone transfer. You'll have all the details you need to respond quickly.",
  },
  {
    question: "Do I have to change my phone number?",
    answer:
      "No, you don't need to change your phone number. We set up call forwarding from your existing business number to our dispatch center. Your customers will continue calling the same number they always have, and you maintain full control over your business identity.",
  },
  {
    question: "How much do you charge?",
    answer:
      "Our pricing is transparent and based on your call volume and service needs. We offer flexible plans starting with affordable monthly rates. Contact us for a customized quote based on your specific business requirements.",
  },
  {
    question: "Do I need to purchase any equipment?",
    answer:
      "No equipment purchase is necessary. Our service is completely cloud-based and works with your existing phone system. All you need is a phone to receive dispatched jobs and the ability to set up call forwarding, which we'll help you configure during setup.",
  },
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
    <div className="border-b border-slate-200">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-slate-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-slate-600">{answer}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <main className="font-sans text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="We Dispatch"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#how-it-works" className="hover:text-slate-900">
              How it works
            </a>
            <a href="/join" className="hover:text-slate-900">
              Apply as technician
            </a>
            <a href="/contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO WITH BANNER BACKGROUND */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
            alt="We Dispatch - Professional 24/7 Dispatch Services"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-lg">
            Professional technicians,
            <br className="hidden md:block" />
            dispatched nationwide.
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            We Dispatch connects customers with verified technicians through a
            centralized dispatch system designed for speed, accuracy, and
            accountability.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 text-slate-900 text-sm font-medium hover:bg-slate-100 shadow-lg"
            >
              Request service
            </a>
            <a
              href="/join"
              className="rounded-lg border-2 border-white px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Apply as technician
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold text-center">How it works</h2>

          <div className="mt-16 grid gap-12 md:grid-cols-4">
            <div>
              <span className="text-sm font-medium text-slate-500">Step 1</span>
              <h3 className="mt-2 font-semibold">Service request</h3>
              <p className="mt-2 text-sm text-slate-600">
                A customer submits a service request through our network.
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-500">Step 2</span>
              <h3 className="mt-2 font-semibold">Smart routing</h3>
              <p className="mt-2 text-sm text-slate-600">
                Requests are routed in real time to technicians based on
                location, availability, and service type.
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-500">Step 3</span>
              <h3 className="mt-2 font-semibold">Technician dispatched</h3>
              <p className="mt-2 text-sm text-slate-600">
                A qualified professional accepts the job and is dispatched
                directly.
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-500">Step 4</span>
              <h3 className="mt-2 font-semibold">Job completed</h3>
              <p className="mt-2 text-sm text-slate-600">
                The service is completed efficiently with clear communication
                and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold">
            Built for reliability at scale
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            We Dispatch is not a lead marketplace. Every request is verified,
            routed intelligently, and handled by professional technicians.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3 text-left">
            <div>
              <h4 className="font-semibold">Verified requests</h4>
              <p className="mt-2 text-sm text-slate-600">
                No spam, no recycled leads, no guesswork.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Nationwide coverage</h4>
              <p className="mt-2 text-sm text-slate-600">
                A centralized system designed to operate across multiple
                markets.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Technician-first model</h4>
              <p className="mt-2 text-sm text-slate-600">
                Transparent jobs, fair payouts, and professional standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-3xl font-semibold text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-center text-slate-600">
            Everything you need to know about our dispatch services
          </p>

          <div className="mt-12">
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

      {/* FOOTER */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} We Dispatch. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
