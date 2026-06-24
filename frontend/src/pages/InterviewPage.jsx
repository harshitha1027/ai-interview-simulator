// import { useEffect, useState } from "react";

// function InterviewPage() {

//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [message, setMessage] = useState("");

//   useEffect(() => {

//     fetch("http://localhost:8090/api/interview/generateQuestions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         role: "Java Developer"
//       })
//     })
//       .then(response => response.json())
//       .then(data => {

//         if (Array.isArray(data)) {
//           setQuestions(data);
//         }

//       })
//       .catch(error => {
//         console.error(error);
//       });

//   }, []);

//   const handleAnswerChange = (question, value) => {

//     setAnswers({
//       ...answers,
//       [question]: value
//     });

//   };

//   const submitAnswer = async (question) => {

//     const response = await fetch(
//       "http://localhost:8090/api/interview/submitAnswer",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           question: question,
//           answer: answers[question]
//         })
//       }
//     );

//     const result = await response.text();

//     setMessage(result);
//   };

//   return (
//     <div style={{ padding: "20px" }}>

//       <h1>Interview Questions</h1>

//       {questions.map((question, index) => (

//         <div
//           key={index}
//           style={{
//             border: "1px solid gray",
//             padding: "15px",
//             marginBottom: "20px"
//           }}
//         >

//           <h3>Question {index + 1}</h3>

//           <p>{question}</p>

//           <textarea
//             rows="4"
//             cols="60"
//             placeholder="Enter your answer..."
//             value={answers[question] || ""}
//             onChange={(e) =>
//               handleAnswerChange(
//                 question,
//                 e.target.value
//               )
//             }
//           />

//           <br />
//           <br />

//           <button
//             onClick={() =>
//               submitAnswer(question)
//             }
//           >
//             Submit Answer
//           </button>

//         </div>

//       ))}

//       {message && (
//         <h3>{message}</h3>
//       )}

//     </div>
//   );
// }

// export default InterviewPage;

import { useEffect, useState } from "react";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f0f4ff",
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "8px",
  },
  subheading: {
    fontSize: "15px",
    color: "#64748b",
    marginBottom: "30px",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "18px",
    padding: "24px",
    marginBottom: "20px",
    boxShadow:
      "0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 25px -10px rgba(99,102,241,0.15)",
  },
  questionTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#6366f1",
    marginBottom: "8px",
  },
  questionText: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#0f172a",
    marginBottom: "14px",
    lineHeight: "1.5",
  },
  textarea: {
    width: "100%",
    minHeight: "110px",
    padding: "12px",
    borderRadius: "10px",
    border: "1.5px solid #e2e8f0",
    outline: "none",
    fontSize: "14px",
    resize: "none",
    fontFamily: "inherit",
    background: "#f8fafc",
    transition: "all 0.15s ease",
    boxSizing: "border-box",
  },
  textareaFocus: {
    width: "100%",
    minHeight: "110px",
    padding: "12px",
    borderRadius: "10px",
    border: "1.5px solid #6366f1",
    outline: "none",
    fontSize: "14px",
    resize: "none",
    fontFamily: "inherit",
    background: "#ffffff",
    boxShadow: "0 0 0 3px rgba(99,102,241,0.12)",
    boxSizing: "border-box",
  },
  button: {
    marginTop: "12px",
    padding: "10px 14px",
    background: "#6366f1",
    border: "none",
    borderRadius: "8px",
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.15s ease",
  },
  buttonHover: {
    background: "#4f46e5",
    transform: "translateY(-1px)",
  },
  messageBox: {
    marginTop: "30px",
    padding: "16px",
    borderRadius: "12px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    color: "#0f172a",
    fontWeight: "500",
  },
};

function InterviewPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState({});

  useEffect(() => {
    fetch("http://localhost:8090/api/interview/generateQuestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "Java Developer" }),
    })
      .then((res) => res.json())
      // .then((data) => {
      //   if (Array.isArray(data)) setQuestions(data);
      // })
      .then((data) => {
  console.log("Questions Data:", data);
  if (Array.isArray(data)) setQuestions(data);
})
      .catch(console.error);
  }, []);

  const handleAnswerChange = (question, value) => {
    setAnswers({
      ...answers,
      [question]: value,
    });
  };

  // const submitAnswer = async (question) => {
  //   const response = await fetch(
  //     "http://localhost:8090/api/interview/submitAnswer",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         question,
  //         answer: answers[question],
  //       }),
  //     }
  //   );

  //   const result = await response.text();
  //   setMessage(result);
  // };
  const submitAnswer = async (question) => {
  try {
    const response = await fetch(
      "http://localhost:8090/api/interview/submitAnswer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          answer: answers[question],
        }),
      }
    );

    const result = await response.text();

    console.log("Status:", response.status);
    console.log("Response:", result);

    setMessage(result);

  } catch (error) {
    console.error(error);
    setMessage("Failed to submit answer");
  }
};

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Interview Session</h1>
        <p style={styles.subheading}>
          Answer the questions below like a real interview
        </p>

        {questions.map((question, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.questionTitle}>
              Question {index + 1}
            </div>

            <div style={styles.questionText}>{question}</div>

            <textarea
              placeholder="Type your answer here..."
              value={answers[question] || ""}
              onChange={(e) =>
                handleAnswerChange(question, e.target.value)
              }
              onFocus={() =>
                setFocused({ ...focused, [question]: true })
              }
              onBlur={() =>
                setFocused({ ...focused, [question]: false })
              }
              style={
                focused[question]
                  ? styles.textareaFocus
                  : styles.textarea
              }
            />

            <button
              style={styles.button}
              onMouseOver={(e) =>
                Object.assign(e.target.style, styles.buttonHover)
              }
              onMouseOut={(e) =>
                Object.assign(e.target.style, styles.button)
              }
              onClick={() => submitAnswer(question)}
            >
              Submit Answer
            </button>
          </div>
        ))}

        {message && (
          <div style={styles.messageBox}>{message}</div>
        )}
      </div>
    </div>
  );
}

export default InterviewPage;