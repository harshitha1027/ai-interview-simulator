// // import { useState } from "react";
// // import { registerUser } from "../services/authService";
// // import { useNavigate } from "react-router-dom";

// // function Register() {

// //     const navigate = useNavigate();

// //     const [formData, setFormData] = useState({
// //         name: "",
// //         email: "",
// //         password: ""
// //     });

// //     const handleChange = (e) => {
// //         setFormData({
// //             ...formData,
// //             [e.target.name]: e.target.value
// //         });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         try {

// //             const response =
// //                 await registerUser(formData);

// //             alert(response.data);

// //             navigate("/");

// //         } catch (error) {

// //             console.error(error);
// //             alert("Registration Failed");
// //         }
// //     };

// //     return (
// //         <div style={{ padding: "30px" }}>

// //             <h2>Register</h2>

// //             <form onSubmit={handleSubmit}>

// //                 <input
// //                     type="text"
// //                     name="name"
// //                     placeholder="Enter Name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                 />

// //                 <br /><br />

// //                 <input
// //                     type="email"
// //                     name="email"
// //                     placeholder="Enter Email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                 />

// //                 <br /><br />

// //                 <input
// //                     type="password"
// //                     name="password"
// //                     placeholder="Enter Password"
// //                     value={formData.password}
// //                     onChange={handleChange}
// //                 />

// //                 <br /><br />

// //                 <button type="submit">
// //                     Register
// //                 </button>

// //             </form>

// //         </div>
// //     );
// // }

// // export default Register;

// // function Register() {
// //   return (
// //     <h1>Register Page Working</h1>
// //   );
// // }

// // export default Register;

// import { useState } from "react";

// function Register() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     const response = await fetch(
//       "http://localhost:8090/api/auth/register",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//         }),
//       }
//     );

//     const data = await response.text();

//     alert(data);
//   };

//   return (
//     <div>
//       <h1>Register</h1>

//       <form onSubmit={handleRegister}>

//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         />

//         <br /><br />

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
//           Register
//         </button>

//       </form>
//     </div>
//   );
// }

// export default Register;

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
    boxShadow:
      "0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 40px -8px rgba(99,102,241,0.12)",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0f172a",
    margin: "0 0 6px 0",
  },
  subheading: {
    fontSize: "15px",
    color: "#64748b",
    margin: "0 0 30px 0",
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
  input: {
    width: "100%",
    background: "#f8fafc",
    border: "1.5px solid #e2e8f0",
    borderRadius: "10px",
    padding: "12px 14px",
    fontSize: "15px",
    color: "#0f172a",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.15s ease",
  },
  inputFocused: {
    width: "100%",
    background: "#ffffff",
    border: "1.5px solid #6366f1",
    borderRadius: "10px",
    padding: "12px 14px",
    fontSize: "15px",
    color: "#0f172a",
    outline: "none",
    boxSizing: "border-box",
    boxShadow: "0 0 0 3px rgba(99,102,241,0.12)",
    transition: "all 0.15s ease",
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
    marginTop: "20px",
    boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
    transition: "all 0.15s ease",
  },
};

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:8090/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );

    const data = await response.text();
    alert(data);
  };

  const getInputStyle = (focused) =>
    focused ? styles.inputFocused : styles.input;

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Create account</h1>
        <p style={styles.subheading}>Sign up to get started</p>

        <form onSubmit={handleRegister}>
          {/* Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
              style={getInputStyle(nameFocus)}
            />
          </div>

          {/* Email */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              style={getInputStyle(emailFocus)}
            />
          </div>

          {/* Password */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              style={getInputStyle(passwordFocus)}
            />
          </div>

          <button type="submit" style={styles.button}>
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;