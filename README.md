# 🗂️ Inventory Manager – MERN Stack CRUD Application

A simple and responsive full-stack CRUD (Create, Read, Update, Delete) application using the MERN stack (MongoDB, Express.js, React.js, Node.js).

This app allows users to manage a list of inventory items with name and quantity, supporting full backend integration and data persistence.

---

## 🚀 Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Frontend    | React + Vite + Bootstrap |
| Backend     | Node.js + Express.js   |
| Database    | MongoDB + Mongoose     |
| HTTP Client | Axios                  |

---

## 📸 Screenshots

## 📸 Screenshots

## 📸 Screenshots

### 🟢 Add Item
![Add Item Screenshot](./screenshots/add-item.png)
![Add Item Screenshot](./screenshots/add-item1.png)
### ✏️ Edit Item
![Edit Item Screenshot](./screenshots/edit-item.png)
![Edit Item Screenshot](./screenshots/edit-item1.png)


---

## 📁 Project Structure

```
crud-app/
├── backend/
│   ├── models/
│   │   └── item.js
│   ├── routes/
│   │   └── itemRoutes.js
│   └── app.js
├── frontend/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── components/
│           ├── ItemForm.jsx
│           └── ItemList.jsx
```

---

## 🛠️ Installation & Usage

### 1️⃣ Backend Setup

```bash
cd crud-app/backend
npm install
node app.js
```

> MongoDB should be running locally on `mongodb://localhost:27017/CrudDb`

---

### 2️⃣ Frontend Setup

```bash
cd crud-app/frontend
npm install
npm run dev
```

> The app will be available at: [http://localhost:5173](http://localhost:5173)

---

## 🔁 API Endpoints

| Method | Endpoint              | Description          |
|--------|------------------------|----------------------|
| GET    | `/api/items`          | Fetch all items      |
| POST   | `/api/items`          | Create a new item    |
| GET    | `/api/items/:id`      | Get item by ID       |
| PUT    | `/api/items/:id`      | Update item by ID    |
| DELETE | `/api/items/:id`      | Delete item by ID    |

---


---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
