// import { useEffect, useState } from "react";

// function ReportPage() {

//   const [report, setReport] = useState(null);

//   useEffect(() => {

//     fetch("http://localhost:8090/api/interview/report")
//       .then(res => res.json())
//       .then(data => setReport(data));

//   }, []);

//   if (!report) {
//     return <h2>Loading Report...</h2>;
//   }

//   return (
//     <div>
//       <h1>Interview Report</h1>

//       <h3>Total Questions: {report.totalQuestions}</h3>

//       <h3>
//         Average Score: {report.averageScore.toFixed(2)}
//       </h3>

//       <h3>
//         Feedback: {report.finalFeedback}
//       </h3>
//     </div>
//   );
// }

// export default ReportPage;

import { useEffect, useState } from "react";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f0f4ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "24px",
    padding: "48px 44px",
    width: "100%",
    maxWidth: "600px",
    boxShadow:
      "0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 40px -8px rgba(99,102,241,0.12)",
  },
  heading: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "8px",
  },
  subheading: {
    fontSize: "15px",
    color: "#64748b",
    marginBottom: "30px",
  },
  statContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "24px",
  },
  statCard: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "14px",
    padding: "20px",
    textAlign: "center",
  },
  statLabel: {
    fontSize: "13px",
    color: "#64748b",
    marginBottom: "8px",
  },
  statValue: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#6366f1",
  },
  feedbackCard: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "14px",
    padding: "20px",
  },
  feedbackTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: "10px",
  },
  feedbackText: {
    color: "#475569",
    lineHeight: "1.7",
    fontSize: "15px",
  },
  loading: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f0f4ff",
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    fontSize: "20px",
    color: "#64748b",
  },
};

function ReportPage() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8090/api/interview/report")
      .then((res) => res.json())
      .then((data) => setReport(data))
      .catch((err) => console.error(err));
  }, []);

  if (!report) {
    return (
      <div style={styles.loading}>
        Loading Interview Report...
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Interview Report</h1>
        <p style={styles.subheading}>
          Review your interview performance and feedback
        </p>

        <div style={styles.statContainer}>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>Total Questions</div>
            <div style={styles.statValue}>
              {report.totalQuestions}
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statLabel}>Average Score</div>
            <div style={styles.statValue}>
              {report.averageScore}
            </div>
          </div>
        </div>

        <div style={styles.feedbackCard}>
          <div style={styles.feedbackTitle}>
            AI Feedback
          </div>

          <div style={styles.feedbackText}>
            {report.finalFeedback}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportPage;