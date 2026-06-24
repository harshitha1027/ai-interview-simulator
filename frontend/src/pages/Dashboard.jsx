// import { useNavigate } from "react-router-dom";

// function Dashboard() {

//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       <button
//         onClick={() => navigate("/setup")}
//       >
//         Start Mock Interview
//       </button>
//     </div>
//   );
// }

// export default Dashboard;

import { useNavigate } from "react-router-dom";

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
    boxShadow:
      "0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 40px -8px rgba(99,102,241,0.12)",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0f172a",
    margin: "0 0 10px 0",
  },
  subheading: {
    fontSize: "15px",
    color: "#64748b",
    marginBottom: "30px",
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
    boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
    transition: "all 0.15s ease",
  },
  buttonHover: {
    background: "#4f46e5",
    transform: "translateY(-1px)",
    boxShadow: "0 6px 20px rgba(99,102,241,0.45)",
  },
};

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Dashboard</h1>
        <p style={styles.subheading}>
          Welcome back! Ready to start your mock interview?
        </p>

        <button
          style={styles.button}
          onClick={() => navigate("/setup")}
          onMouseOver={(e) => {
            Object.assign(e.target.style, styles.buttonHover);
          }}
          onMouseOut={(e) => {
            Object.assign(e.target.style, styles.button);
          }}
        >
          Start Mock Interview
        </button>
      </div>
    </div>
  );
}

export default Dashboard;