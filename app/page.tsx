export default function Home() {
  return (
    <main className="font-sans text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold">We Dispatch</span>
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

      {/* HERO */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Professional technicians,
            <br className="hidden md:block" />
            dispatched nationwide.
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            We Dispatch connects customers with verified technicians through a
            centralized dispatch system designed for speed, accuracy, and
            accountability.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-slate-900 px-6 py-3 text-white text-sm font-medium hover:bg-slate-800"
            >
              Request service
            </a>
            <a
              href="/join"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium hover:bg-white"
            >
              Apply as technician
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold text-center">
            How it works
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-4">
            <div>
              <span className="text-sm font-medium text-slate-500">
                Step 1
              </span>
              <h3 className="mt-2 font-semibold">Service request</h3>
              <p className="mt-2 text-sm text-slate-600">
                A customer submits a service request through our network.
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-500">
                Step 2
              </span>
              <h3 className="mt-2 font-semibold">Smart routing</h3>
              <p className="mt-2 text-sm text-slate-600">
                Requests are routed in real time to technicians based on
                location, availability, and service type.
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-500">
                Step 3
              </span>
              <h3 className="mt-2 font-semibold">Technician dispatched</h3>
              <p className="mt-2 text-sm text-slate-600">
                A qualified professional accepts the job and is dispatched
                directly.
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-500">
                Step 4
              </span>
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

      {/* FOOTER */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} We Dispatch. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
