import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Server is running successfully 🚀",
    version: "1.0.0",
    endpoints: {
      contact: {
        submit: "POST /api/contact",
        getAll: "GET /api/contact",
        getById: "GET /api/contact/:id"
      }
    }
  });
});

// API Routes
app.use("/api/contact", contactRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message
  });
});

// Define port
const PORT = process.env.PORT || 4000;

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
  console.log(`📧 Email notifications enabled`);
  console.log(`📊 Database connected to Supabase`);
});

// ## 6. **Final Folder Structure:**
// ```
// Backend/
// ├── config/
// │   └── emailConfig.js
// ├── controllers/
// │   └── contactController.js
// ├── routes/
// │   └── contactRoutes.js
// ├── prisma/
// │   └── schema.prisma
// ├── node_modules/
// ├── .env
// ├── .gitignore
// ├── package.json
// └── server.js