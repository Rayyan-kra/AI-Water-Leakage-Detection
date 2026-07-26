# 💧 AI Water Leakage Detection Dashboard

An AI-powered water pipeline monitoring system that analyzes sensor data to detect potential water leakages, assess pipeline health, and generate intelligent maintenance recommendations using **Google Gemini AI**.

---

## 🚀 Live Demo

**Frontend:** https://your-vercel-link.vercel.app

**Backend API:** https://your-render-link.onrender.com

---

## 📖 Overview

Water pipeline leakages cause significant water loss, increased maintenance costs, and operational inefficiencies.

This project provides an AI-powered dashboard where users can enter pipeline sensor values such as **Flow Rate** and **Pressure**. The application sends these readings to the backend, where **Gemini AI** analyzes the data and returns:

- Leak Probability
- Severity Level
- Detailed Analysis
- Recommended Actions

---

## ✨ Features

- 🤖 AI-powered pipeline analysis using Gemini AI
- 💧 Water leakage prediction
- 📊 Interactive dashboard
- 📈 Leak severity assessment
- 🛠 Intelligent maintenance recommendations
- ⚡ Real-time AI response
- 📱 Responsive modern UI
- ☁️ Cloud deployment using Vercel & Render

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Lucide React

### Backend
- Node.js
- Express.js
- Google Gemini API
- Dotenv
- CORS

### Deployment
- Vercel
- Render
- GitHub

---

## 🏗 Project Architecture

```
          User
            │
            ▼
     React Frontend
            │
      HTTP Request
            │
            ▼
   Express.js Backend
            │
            ▼
      Gemini AI API
            │
      AI JSON Response
            │
            ▼
     Dashboard Result
```

---

## 📷 Application Preview

### Dashboard

- Modern responsive dashboard
- Glassmorphism UI
- Real-time AI analysis

### AI Analysis

The AI generates:

- Leak Probability
- Severity
- Reason
- Recommendation

---

## 📊 Example Input

| Flow Rate | Pressure |
|-----------:|----------:|
| 120 L/min | 60 PSI |
| 10 L/min | 15 PSI |
| 90 L/min | 45 PSI |

---

## 📌 Example AI Response

```json
{
  "leakProbability": "High",
  "severity": "Critical",
  "reason": "Very low pressure combined with low flow indicates a possible major upstream leak or pump failure.",
  "recommendation": "Inspect the pipeline immediately and isolate the affected section."
}
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/Rayyan-kra/AI-Water-Leakage-Detection.git
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

### Backend

```bash
cd Backend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **Backend** directory.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## 📂 Project Structure

```
AI-Water-Leakage-Detection
│
├── Backend
│   ├── controllers
│   ├── routes
│   ├── server.js
│   └── .env
│
├── Frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── assets
│   └── App.jsx
│
└── README.md
```

---

## 🎯 Future Improvements

- IoT sensor integration
- Live sensor monitoring
- Historical data visualization
- Authentication system
- Database storage
- Alert notifications
- Predictive maintenance dashboard

---

## 👨‍💻 Developer

**Rayyan Chaman**

B.Tech Computer Science Engineering Student

---

## 📄 License

This project was developed for educational and internship purposes.
