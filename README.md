# 🚀 Task Manager App (MERN Stack)

## 🔍 Overview

The **Task Manager App** is a web-based solution tailored for team collaboration and streamlined task management. Developed using the **MERN stack** (MongoDB, Express.js, React, Node.js), it delivers a responsive and intuitive platform to assign, monitor, and manage tasks efficiently. Both administrators and team members are supported with features to boost productivity and maintain organization.

---

### ❓ Problem Statement

Managing team tasks using spreadsheets or manual logs can become overwhelming, especially with dynamic workflows. This app addresses those challenges by offering a centralized task tracking system designed to improve collaboration, reduce miscommunication, and streamline project progress tracking.

---

### 📚 Background

As distributed and remote teams become more common, the demand for efficient task coordination tools has grown. This solution leverages modern web technologies and UI frameworks to create a smooth and scalable task management experience. With tools like **Redux Toolkit**, **Tailwind CSS**, and **Headless UI**, the platform ensures an optimal user experience and performance.

---

## 👨‍💼 Admin Features

- **User Administration**

  - Create admin accounts
  - Add and manage users within the team

- **Task Distribution**

  - Assign tasks to one or more users
  - Modify task info and track progress

- **Task Configuration**

  - Organize tasks by status: To-Do, In Progress, Completed
  - Assign priority: High, Medium, Normal, Low
  - Manage sub-tasks under main tasks

- **Assets Handling**

  - Upload images or other files related to tasks

- **User Access Control**
  - Enable/disable user accounts
  - Permanently delete or archive tasks

---

## 👤 User Features

- **Engaging with Tasks**

  - Change task status (e.g., In Progress, Completed)
  - View detailed task information

- **Collaboration**
  - Comment on tasks and participate in related conversations

---

## 🌐 Common Features

- **Secure Access**

  - Login authentication and role-based access

- **Profile Settings**

  - Edit and update personal profile details

- **Password Control**

  - Change and manage passwords securely

- **Dashboard View**
  - Overview of current user activities
  - Filter tasks based on their status

---

## 🧰 Tech Stack

### Frontend:

- **React (Vite)**
- **Redux Toolkit**
- **Tailwind CSS**
- **Headless UI**

### Backend:

- **Node.js** with **Express.js**

### Database:

- **MongoDB**

---

## ⚙️ Getting Started

### 📦 Server Setup

#### 🔐 Environment Variables

Create a `.env` file in the `server/` folder:

```env
MONGODB_URI=your-mongo-db-connection-string
JWT_SECRET=your-secure-jwt-secret
PORT=8800
NODE_ENV=development
```
