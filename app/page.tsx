export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f7fa" }}>
      
      {/* HEADER */}
      <header
        style={{
          background: "#0f172a",
          padding: "20px 40px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ fontSize: "20px" }}>We Dispatch</strong>

        <nav>
          <a href="/join" style={{ color: "white", marginRight: "20px" }}>
            Join as Technician
          </a>
          <a href="/help" style={{ color: "white" }}>
            Need Help?
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main style={{ padding: "100px 20px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "44px", marginBottom: "20px" }}>
            Nationwide Locksmith Dispatch Platform
          </h1>

          <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px" }}>
            We connect professional locksmiths with real, verified jobs across
            the United States — fast, fair, and reliable.
          </p>

          <div>
            <a href="/join">
              <button
                style={{
                  padding: "14px 32px",
                  fontSize: "16px",
                  marginRight: "15px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Join as a Locksmith
              </button>
            </a>

            <a href="#how-it-works">
              <button
                style={{
                  padding: "14px 32px",
                  fontSize: "16px",
                  background: "white",
                  color: "#2563eb",
                  border: "2px solid #2563eb",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                How It Works
              </button>
            </a>
          </div>
        </div>
      </main>

      {/* HOW IT WORKS / TRUST SECTION */}
      <section
        id="how-it-works"
        style={{
          background: "white",
          padding: "80px 20px",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
            Built for Nationwide Coverage
          </h2>

          <p style={{ fontSize: "18px", color: "#555", marginBottom: "50px" }}>
            From local lockouts to multi-city dispatching, our platform is designed
            to scale across the United States.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <strong>✔ Real-time Job Dispatch</strong>
              <p style={{ color: "#666" }}>
                Jobs routed instantly to available technicians
              </p>
            </div>

            <div>
              <strong>✔ Verified Requests Only</strong>
              <p style={{ color: "#666" }}>
                No spam, no fake leads — just real customers
              </p>
            </div>

            <div>
              <strong>✔ Technician-First Model</strong>
              <p style={{ color: "#666" }}>
                Fair payouts, transparent jobs, nationwide reach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0f172a",
          color: "white",
          padding: "30px 20px",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <p style={{ marginBottom: "10px" }}>
          © {new Date().getFullYear()} We Dispatch
        </p>
        <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
          Nationwide locksmith dispatch platform
        </p>
      </footer>
    </div>
  );
}