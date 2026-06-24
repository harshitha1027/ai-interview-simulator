// import { useState } from "react";

// function Login() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {

//     e.preventDefault();

//     const response = await fetch(
//       "http://localhost:8090/api/auth/login",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       }
//     );

//     const data = await response.text();

//     alert(data);

//     if (data === "Login Successful") {
//       window.location.href = "/dashboard";
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>

//       <form onSubmit={handleLogin}>

//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <br /><br />

//         <button type="submit">
//           Login
//         </button>

//       </form>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f0f4ff",
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "24px",
    padding: "48px 44px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 40px -8px rgba(99,102,241,0.12)",
  },
  logoMark: {
    width: "52px",
    height: "52px",
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    borderRadius: "14px",
    marginBottom: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoIcon: {
    width: "24px",
    height: "24px",
    fill: "none",
    stroke: "#ffffff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0f172a",
    margin: "0 0 6px 0",
    letterSpacing: "-0.6px",
  },
  subheading: {
    fontSize: "15px",
    color: "#64748b",
    margin: "0 0 36px 0",
    fontWeight: "400",
  },
  fieldGroup: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "7px",
  },
  inputWrapper: {
    position: "relative",
  },
  inputIcon: {
    position: "absolute",
    left: "13px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#94a3b8",
    pointerEvents: "none",
    display: "flex",
  },
  input: {
    width: "100%",
    background: "#f8fafc",
    border: "1.5px solid #e2e8f0",
    borderRadius: "10px",
    padding: "12px 14px 12px 40px",
    fontSize: "15px",
    color: "#0f172a",
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s, background 0.15s",
    boxSizing: "border-box",
    caretColor: "#6366f1",
  },
  inputFocused: {
    width: "100%",
    background: "#ffffff",
    border: "1.5px solid #6366f1",
    borderRadius: "10px",
    padding: "12px 14px 12px 40px",
    fontSize: "15px",
    color: "#0f172a",
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s, background 0.15s",
    boxSizing: "border-box",
    caretColor: "#6366f1",
    boxShadow: "0 0 0 3px rgba(99,102,241,0.12)",
  },
  forgotRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "8px",
  },
  forgotLink: {
    fontSize: "13px",
    color: "#6366f1",
    textDecoration: "none",
    fontWeight: "500",
  },
  button: {
    width: "100%",
    padding: "13px",
    background: "#6366f1",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "600",
    color: "#ffffff",
    cursor: "pointer",
    marginTop: "28px",
    letterSpacing: "0.1px",
    transition: "background 0.15s, transform 0.1s, box-shadow 0.15s",
    boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
  },
  buttonHovered: {
    width: "100%",
    padding: "13px",
    background: "#4f46e5",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "600",
    color: "#ffffff",
    cursor: "pointer",
    marginTop: "28px",
    letterSpacing: "0.1px",
    transition: "background 0.15s, transform 0.1s, box-shadow 0.15s",
    boxShadow: "0 6px 20px rgba(99,102,241,0.45)",
    transform: "translateY(-1px)",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    margin: "24px 0",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    background: "#e2e8f0",
  },
  dividerText: {
    fontSize: "12px",
    color: "#94a3b8",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },
  footer: {
    marginTop: "24px",
    textAlign: "center",
    fontSize: "14px",
    color: "#64748b",
  },
  footerLink: {
    color: "#6366f1",
    textDecoration: "none",
    fontWeight: "600",
  },
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:8090/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const data = await response.text();
    alert(data);
    if (data === "Login Successful") {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <div style={styles.logoMark}>
          <svg style={styles.logoIcon} viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>

        <h1 style={styles.heading}>Welcome back</h1>
        <p style={styles.subheading}>Sign in to continue to your account</p>

        <form onSubmit={handleLogin}>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email address</label>
            <div style={styles.inputWrapper}>
              <span style={styles.inputIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                style={emailFocused ? styles.inputFocused : styles.input}
              />
            </div>
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <span style={styles.inputIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                style={passwordFocused ? styles.inputFocused : styles.input}
              />
            </div>
            <div style={styles.forgotRow}>
              <a href="/forgot-password" style={styles.forgotLink}>Forgot password?</a>
            </div>
          </div>

          <button
            type="submit"
            style={btnHovered ? styles.buttonHovered : styles.button}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            Sign in
          </button>

        </form>

        <p style={styles.footer}>
          Don't have an account?{" "}
          <a href="/register" style={styles.footerLink}>Create one</a>
        </p>

      </div>
    </div>
  );
}

export default Login;