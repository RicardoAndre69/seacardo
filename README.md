## 🐟 SeaFood E-Commerce

A modern full stack e-commerce project focused on seafood and meats, built with React on the frontend and Node.js/Express on the backend.

SeaCardo started as a frontend-focused e-commerce interface and was later expanded with a real authentication flow, PostgreSQL database integration, and a dedicated backend API. The project now includes user registration and login, persistent authentication with JWT, and database management with Prisma + Neon.

## 🚀 Tech Stack

## Frontend
- ⚛️ React 19
- ⚡ Vite
- 🎨 TailwindCSS 4
- 🌍 i18next
- 🔀 React Router DOM
- 🎞️ Swiper (Carousels)
- 🎨 React Icons
- 🧹 ESLint

## Backend
- 🟢 Node.js
- 🚂 Express
- 🛢️ PostgreSQL
- ▲ Prisma ORM
- ☁️ Neon
- 🔐 JWT (JSON Web Token)
- 🔒 bcrypt
- 🧩 Zod
- 🌍 CORS
- ⚙️ dotenv


---

## 📁 Project Structure
```bash
seacardo/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AllProducts/
│   │   ├── Auth/
│   │   ├── Banner/
│   │   ├── Button/
│   │   ├── Cards/
│   │   ├── Category/
│   │   ├── CategoryPage/
│   │   ├── Contact/
│   │   ├── Dairy/
│   │   ├── Discount/
│   │   ├── Footer/
│   │   ├── Fruits/
│   │   ├── Heading/
│   │   ├── Hero/
│   │   ├── Home/
│   │   ├── Layout/
│   │   ├── Meats/
│   │   ├── Navbar/
│   │   ├── Process/
│   │   ├── ProductList/
│   │   ├── Products/
│   │   ├── SeaFood/
│   │   └── Values/
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── i18n/
│   │   ├── en.json
│   │   └── pt.json
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── server/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── lib/
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env.example
│
├── package.json
└── README.md
```
---

🗄️ Database

The backend uses PostgreSQL hosted on Neon and managed through Prisma ORM.

Current Prisma model

At the moment, the project includes a User model used for authentication.

Example structure:

```bash
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```
---

## 🌍 Internationalization

This project supports multiple languages using i18next.
Available translations:

🇺🇸 English (en.json)
🇧🇷 Portuguese (pt.json)

The structure allows easy addition of new languages.

---

## 🛠️ Getting Started
1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/seacardo.git
cd seacardo
```

2️⃣ Install frontend dependencies
```bash
npm install
```

3️⃣ Install backend dependencies
```bash
cd server
npm install
```

4️⃣ Configure environment variables
```bash
DATABASE_URL=your_postgresql_connection_string
PORT=3333
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

5️⃣ Run Prisma migrations
```bash
npx prisma migrate dev
```

6️⃣ Start backend
```bash
npm run dev
```
The backend will be available at:
```bash
http://localhost:3333
```
7️⃣ Start frontend
```bash
npm run dev
```
The frontend will be available at:
```bash
http://localhost:5173
```

📄 License

This project is for study and portfolio purposes.
