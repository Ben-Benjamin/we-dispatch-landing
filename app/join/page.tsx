"use client";

export default function Join() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Application submitted! We will contact you soon.");
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Join Our Locksmith Network</h1>

      <form
  action="https://forms.gle/Wor3c33xmzUN4EFx6"
  method="POST"
  target="_blank"
 style={{ maxWidth: "400px" }}
>
        <div style={{ marginBottom: "15px" }}>
          <label>Full Name</label><br />
          <input type="text" required style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Phone Number</label><br />
          <input type="tel" required style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>City / State</label><br />
          <input type="text" required style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Years of Experience</label><br />
          <input type="number" min="0" style={{ width: "100%", padding: "8px" }} />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Apply to Join
        </button>
      </form>
    </main>
  );
}