# Micro-Certification Platform

A mini-certification engine where users can take quizzes, view results, and download a PDF certificate of completion.

[Home Page]

<img width="1919" height="941" alt="image" src="https://github.com/user-attachments/assets/5384b9d5-954c-4189-ac9d-456ea127a29a" />

[Quiz Page]

<img width="1919" height="945" alt="image" src="https://github.com/user-attachments/assets/0c86f111-d332-4360-b894-221f370c9c6e" />

[Result Page]

<img width="1919" height="942" alt="image" src="https://github.com/user-attachments/assets/4b30aa5f-3b86-49b7-879f-ba958fbdbd01" />

[PDF Certificate]

<img width="1059" height="816" alt="image" src="https://github.com/user-attachments/assets/178fc47a-4218-4fc5-ad84-ba6778589eda" />


---

## ✨ Features

- User Registration and Login (JWT based)
- Dynamic Quiz Interface (MCQs fetched from the database)
- Instant Score Calculation and Pass/Fail Status
- Automated PDF Certificate Generation with dynamic user data
- View past quiz results

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **PDF Generation:** pdf-lib
- **Deployment:** Render and Vercel

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account or local MongoDB instance

## File Structure

micro-certification-platform/
├── client/                   # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/              # API service calls
│   │   │   ├── authService.js
│   │   │   ├── quizService.js
│   │   │   └── resultService.js
│   │   ├── assets/           # Images, fonts, etc.
│   │   │   └── certificate-template.png
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Auth/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   └── RegisterForm.jsx
│   │   │   ├── Common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   └── Navbar.jsx
│   │   │   ├── Quiz/
│   │   │   │   ├── Question.jsx
│   │   │   │   ├── Options.jsx
│   │   │   │   └── ProgressBar.jsx
│   │   │   └── Result/
│   │   │       └── CertificateButton.jsx
│   │   ├── context/          # Global state management
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/            # Custom hooks
│   │   │   └── useAuth.js
│   │   ├── pages/            # Page-level components
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── QuizPage.jsx
│   │   │   └── ResultPage.jsx
│   │   ├── App.jsx           # Main component with routing
│   │   └── index.js          # Entry point
│   ├── .env                  # Environment variables (API URL)
│   └── package.json
│
├── server/                   # Node.js + Express Backend
│   ├── config/
│   │   └── db.js             # Database connection logic
│   ├── controllers/          # Business logic for routes
│   │   ├── authController.js
│   │   ├── quizController.js
│   │   ├── resultController.js
│   │   └── certificateController.js
│   ├── middleware/
│   │   └── authMiddleware.js # JWT verification
│   ├── models/               # Mongoose DB Schemas
│   │   ├── User.js
│   │   ├── Question.js
│   │   └── Result.js
│   ├── routes/               # API route definitions
│   │   ├── auth.js
│   │   ├── quizzes.js
│   │   ├── results.js
│   │   └── certificate.js
│   ├── utils/                # Helper functions
│   │   └── generateCertificate.js # PDF generation logic
│   ├── .env                  # Environment variables (DB_URI, JWT_SECRET)
│   ├── server.js             # Main server entry file
│   └── package.json

## 🔗 API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/quizzes/:quizId`
- `POST /api/results/submit`
- `GET /api/certificate/:resultId`

---

## 🌐 Deployment

This application is deployed on Vercel.
**Live Link:** [[Your Vercel Link Here](https://chetan-lms-platform.vercel.app/)]
