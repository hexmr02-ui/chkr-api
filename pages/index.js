export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>🔍 CC Checker API</h1>
      <p>Welcome to the <strong>Credit Card Checker API</strong> hosted on Vercel.</p>

      <h2>📘 How to Use</h2>
      <ul>
        <li>➡️ Endpoint: <code>/api/check?cc=card|month|year|cvv</code></li>
        <li>✅ Example: <code>/api/check?cc=5121079814754898|05|2029|742</code></li>
      </ul>

      <h2>🌐 CORS Supported</h2>
      <p>You can use this API directly in the browser or frontend apps.</p>

      <h2>⚠️ Limitations</h2>
      <p>This is a proxy API that wraps <code>https://api.chkr.cc/</code>.</p>
    </div>
  );
}

