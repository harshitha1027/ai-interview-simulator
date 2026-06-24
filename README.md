# 🤖 AI Interview Simulator

## 📌 Overview

AI Interview Simulator is a full-stack web application that helps users prepare for technical and HR interviews through AI-powered mock interview sessions.

The application generates interview questions based on the user's selected role and experience level, evaluates responses, and provides detailed feedback and performance reports.

This project demonstrates the integration of Artificial Intelligence with modern web technologies to create an interactive interview preparation platform.

---

## ✨ Features

* 🔐 User Registration & Login
* 🎯 Interview Setup (Role, Experience, Interview Type)
* 🤖 AI-Generated Interview Questions
* 💬 Interactive Interview Session
* 📝 Answer Submission & Evaluation
* 📊 AI-Powered Feedback Generation
* 📈 Performance Scoring & Analysis
* 📄 Interview Report Generation
* 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React.js
* 🔀 React Router
* 🎨 CSS3
* 📄 HTML5
* 📜 JavaScript

### Backend

* ☕ Spring Boot
* 🌐 Spring Web
* 🗄️ Spring Data JPA

### Database

* 🐬 MySQL

### AI Integration

* ✨ Gemini API

---

## 🏗️ System Architecture

```text
User
  │
  ▼
React Frontend
  │
  ▼
Spring Boot REST APIs
  │
  ├── MySQL Database
  │
  └── Gemini API
          │
          ▼
   Question Generation
   Feedback Generation
```

## 🔄 Workflow

### Step 1: User Authentication

* User registers or logs into the platform.

### Step 2: Interview Setup

* Select Job Role
* Select Experience Level
* Select Interview Type (HR / Technical)

### Step 3: AI Question Generation

* Spring Boot sends interview details to Gemini API.
* Gemini generates interview questions dynamically.

### Step 4: Interview Session

* Questions are displayed to the user.
* User submits answers.

### Step 5: Evaluation

* AI analyzes responses.
* Feedback and scores are generated.

### Step 6: Report Generation

* Performance report is displayed.
* User can review strengths and improvement areas.

---

## 🚀 What I Did

### 🎨 Frontend Development

* Developed responsive UI using React.js.
* Implemented page routing using React Router.
* Created:

  * Login Page
  * Registration Page
  * Dashboard
  * Interview Setup Page
  * Interview Session Page
  * Report Page

### ⚙️ Backend Development

* Built REST APIs using Spring Boot.
* Implemented interview workflow logic.
* Integrated Gemini API for AI-generated questions and feedback.
* Connected application with MySQL database.

### 💾 Database Management

* Designed tables for:

  * Users
  * Interview Sessions
  * Interview Reports

### 🤖 AI Features

* Dynamic question generation.
* AI-based answer evaluation.
* Feedback and performance analysis.

---

## 📡 API Endpoints

### Authentication APIs

```http
POST /api/auth/register
POST /api/auth/login
```

### Interview APIs

```http
POST /api/interview/start
POST /api/interview/answer
GET  /api/interview/report
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/ai-interview-simulator.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Backend Setup

```bash
cd backend
mvn spring-boot:run
```

### Database Setup

1. Create a MySQL database.
2. Update database credentials in `application.properties`.
3. Start the Spring Boot application.

---

## 🎯 Future Enhancements

* 🎤 Voice-Based Interviews
* 📹 Video Interview Simulation
* 📄 Resume Analysis
* 💻 Coding Interview Support
* 📚 Interview History Tracking
* 📈 Advanced Analytics Dashboard
* 🤖 Multi-AI Model Support

---

## 📚 Learning Outcomes

* Full Stack Development
* REST API Development
* Database Design & Integration
* AI API Integration
* Authentication & Authorization
* React Development
* Spring Boot Development
* Client-Server Architecture

---

## 👩‍💻 Author

**Harshitha Kokkireni**

This project was developed to explore the integration of Artificial Intelligence with Full Stack Web Development and create a smart interview preparation platform.

⭐ Feel free to fork, contribute, and give this project a star!
