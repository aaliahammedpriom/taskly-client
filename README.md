# Taskly - Task Management Application

## Live Demo
[Taskly Live Application](#) *(https://taskly-66.firebaseapp.com/)*

## Description
Taskly is a modern, responsive task management application that allows users to create, edit, delete, and reorder tasks with a drag-and-drop interface. Tasks are categorized into **To-Do, In Progress, and Done**, with real-time database synchronization ensuring data persistence. Authentication is handled via **Firebase**, and backend operations are managed using **Express.js** and **MongoDB**.

## Features
### 🔐 Authentication
- Firebase Authentication (Google sign-in)
- Store user details (User ID, email, display name) upon first login

### ✅ Task Management
- Add, edit, delete, and reorder tasks
- Drag-and-drop functionality to move tasks between categories
- Tasks contain:
  - Title (max 50 characters)
  - Description (max 200 characters, optional)
  - Timestamp (auto-generated upon creation)
  - Category (To-Do, In Progress, Done)
- Real-time synchronization of task data

### 💾 Database & Persistence
- MongoDB (via Express.js API) for storing tasks
- Ensures instant updates upon changes
- Deletion permanently removes tasks from the database
- Real-time synchronization approaches:
  - MongoDB Change Streams (preferred)
  - WebSockets for live updates
  - Optimistic UI updates for seamless user experience

### 🎨 UI & Responsiveness
- Built with **Vite.js + React** for frontend
- Uses **react-beautiful-dnd** for drag-and-drop
- Clean, modern, and minimalistic design
- Fully responsive for desktop and mobile users

### 🌙 Bonus Features 
- Dark mode toggle
- Task due dates with color-coded indicators
- Activity log to track task movements

---

## Technologies Used
### Frontend
- **Vite.js + React**
- **Tailwind CSS** for styling
- **DaisyUI** for UI components
- **Firebase Authentication** for user login
- **react-beautiful-dnd** for drag-and-drop

### Backend
- **Node.js + Express.js**
- **MongoDB** for task storage
- **Cors & dotenv** for security and configuration

---

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **MongoDB** (locally or via Atlas)
- **Firebase project setup**

### 1️⃣ Clone Client Repository
```sh
git clone https://github.com/aaliahammedpriom/taskly-client.git
cd taskly-client
```
### 2️⃣ Clone Server Repository
```sh
git clone https://github.com/aaliahammedpriom/taskly-server.git
cd taskly-server
```

### 3️⃣ Setup Backend
```sh
cd ../taskly-server
npm install
```
Create a `.env` file in the **backend** folder and add:
```env
PORT=5000
MONGODB_URI=your-mongodb-connection-string
```
Run the server:
```sh
npm start
```

###  Setup Frontend
```sh
cd ../taskly-client
npm install
```
Create a `.env` file in the **frontend** folder and add:
```env
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_FIREBASE_APP_ID=your-firebase-app-id
```
Run the frontend:
```sh
npm run dev
```

---

## API Endpoints
| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| `POST` | `/tasks`          | Create a new task |
| `GET`  | `/tasks/:uid`     | Fetch all tasks for a user |
| `GET`  | `/task/:id`       | Fetch a single task by ID |
| `PATCH`| `/task/title/:id` | Update task title |
| `PATCH`| `/task-category`  | Update task category |
| `PATCH`| `/task/description/:id` | Update task description |
| `DELETE`| `/task/:id`       | Delete a task |

---

## Deployment
### 🚀 Deploy Backend on Vercel / Render
1. Push your backend code to **GitHub**.
2. Deploy using **Vercel** or **Render**.
3. Add **MONGODB_URI** as an environment variable in the hosting platform.

### 🚀 Deploy Frontend on Vercel / Netlify
1. Push your frontend code to **GitHub**.
2. Deploy using **Vercel** or **Netlify**.
3. Add **Firebase credentials** in the environment variables.

---

## Contributing
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a **Pull Request**

---



## Contact
For any issues, reach out via:

- Email: *(aaliahammedpriom66@gmail.com)*

