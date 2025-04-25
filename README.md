# 📋 Forms Homework

This is a full-stack React forms project built for a class assignment. It includes form validation, styling, and stores data using a Node.js + MongoDB backend via Docker.

---

## 🚀 Features

- React form with fields: `Name`, `Email`, `Phone Number`
- Real-time validation with error messages
- Dockerized backend (Node.js + Express + MongoDB)
- Styled form fields (vertically aligned)
- Tracks and stores submissions in MongoDB
- Extra credit: includes backend with database and Docker support

---

## 📁 Project Structure

```bash
forms-homework/
├── backend/
│   ├── routes/
│   │   └── submissions.js
│   ├── models/
│   │   └── Submission.js
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── src/
│   ├── BasicForm.js
│   ├── BasicForm.test.js
│   ├── index.js
│   ├── App.js
│   └── Dockerfile
├── public/
│   └── index.html
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

## 📦 How to Run (With Docker)

Make sure you have Docker installed, then run:

```bash
docker-compose down
docker-compose up --build
```

Frontend will run on [http://localhost:3001](http://localhost:3001)  
Backend will be on [http://localhost:5050](http://localhost:5050)

---

## ✅ Assignment Requirements

- [x] Add names to the list via UI
- [x] Added `email` and `phone number` fields
- [x] Fields aligned vertically using CSS
- [x] Form-level error handling and validation
- [x] Real-time per-field validation (error prevention)
- [x] Screen recording submitted to Blackboard
- [x] **(+10pts)** Unit test file included
- [x] **(+20pts)** Docker + MongoDB backend for persistent storage

---

## 👤 Author

**Aunaje' Caldwell**  
GitHub: [Aunajec](https://github.com/Aunajec)  


