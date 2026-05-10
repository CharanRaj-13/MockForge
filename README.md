# 🚀 MockForge-CLI

MockForge-CLI is a dynamic API mocking framework for frontend developers, rapid prototyping, and testing.

It instantly generates realistic mock REST APIs with fake data, CRUD operations, delay simulation, and error handling using a simple configuration file.

Perfect for:
- Frontend development
- UI/UX testing
- API prototyping
- Hackathons
- Backend simulation
- Learning REST APIs

---

# ✨ Features

✅ Dynamic API generation  
✅ Config-based endpoints  
✅ Fake realistic data generation  
✅ Full CRUD operations  
✅ Delay simulation  
✅ Error simulation  
✅ Self-documenting API system  
✅ In-memory database  
✅ Scalable architecture  
✅ Developer-friendly setup  
✅ CLI command support  

---

# 🧠 Why MockForge-CLI?

Frontend developers often get blocked because:
- backend APIs are not ready
- databases are incomplete
- authentication systems are unfinished

MockForge-CLI solves this by creating instant mock APIs that behave like real backend services.

---

# ⚡ Quick Start

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/mockforge.git
cd mockforge
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Server runs at:

```text
http://localhost:5000
```

---

# 📦 Install as CLI Tool

Install globally:

```bash
npm install -g mockforge-cli
```

---

Run MockForge-CLI:

```bash
mockforge-cli start
```

---

Initialize default config:

```bash
mockforge-cli init
```

---

# 🖥 CLI Commands

## Start Server

```bash
mockforge-cli start
```

Starts the MockForge API server.

---

## Initialize Config File

```bash
mockforge-cli init
```

Creates:

```text
mockforge.config.json
```

---

## Show Help

```bash
mockforge-cli helpme
```

Displays available commands.

---

## Show Version

```bash
mockforge-cli --version
```

Displays current package version.

---

# ⚙️ Configuration

MockForge-CLI uses a configuration file:

```text
mockforge.config.json
```

Example:

```json
{
  "users": 10,
  "products": 20
}
```

This automatically generates:

```text
/api/users
/api/products
```

---

# 📚 Available API Endpoints

## Documentation Route

```http
GET /api/docs
```

Returns all available routes and examples.

---

# 👥 Users API

## Get Users

```http
GET /api/users
```

---

## Get Limited Users

```http
GET /api/users?count=5
```

---

## Simulate Delay

```http
GET /api/users?delay=3000
```

Simulates a 3-second network delay.

---

## Simulate Server Error

```http
GET /api/users?error=true
```

Returns:

```json
{
  "success": false,
  "error": "Internal Server Error 💥"
}
```

---

# 🛠 CRUD Operations

## Create User

```http
POST /api/users
```

Body:

```json
{
  "name": "Charan",
  "email": "charan@example.com"
}
```

---

## Update User

```http
PUT /api/users/:id
```

---

## Delete User

```http
DELETE /api/users/:id
```

---

# 🏗 Project Structure

```text
mockforge/
│
├── src/
│   ├── cli/
│   ├── config/
│   ├── database/
│   ├── generator/
│   ├── routes/
│   ├── server/
│   └── utils/
│
├── mockforge.config.json
├── package.json
└── README.md
```

---

# ⚙️ Tech Stack

- Node.js
- Express.js
- Faker.js
- JavaScript (ES Modules)
- Commander.js

---

# 📸 Example Response

```json
{
  "success": true,
  "route": "users",
  "count": 2,
  "data": [
    {
      "id": "a1b2c3",
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": "d4e5f6",
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
  ]
}
```

---


# 🤝 Contributing

Contributions are welcome.

Ideas, improvements, bug fixes, and feature requests are appreciated.

---

# 📄 License

MIT License

---

# 🚀 MockForge-CLI

Build frontend applications without waiting for backend APIs.
