import express from "express";
import authRoutes from "../api/auth/routes/auth.routes.js";
import questionRoutes from "../api/questions/routes/question-list.routes.js";
import postQuestionRoutes from "../api/questions/routes/question.routes.js";
import questionDetailRoutes from "../api/questions/routes/question-detail.routes.js";
import userRoutes from "../api/user/routes/user.routes.js";
import ragRoutes from "../api/rag/routes/rag.routes.js";
import supportRoutes from "../api/support/routes/support.routes.js";
/**
 * Main application router combining all API modules.
 * Handles routing for auth, questions, users, rag, and support.
 */
export const mainRouter = express.Router();

// Keep this order to preserve existing route precedence.
mainRouter.use("/auth", authRoutes);

// 1. post question routes
mainRouter.use("/questions", postQuestionRoutes);

// 2. dashboard routes
mainRouter.use("/questions", questionRoutes);

// 3. question detail routes
mainRouter.use("/questions", questionDetailRoutes);

// 4. profile/user update routes
mainRouter.use("/users", userRoutes);

// 5. RAG
mainRouter.use("/rag", ragRoutes);

// Authenticated customer-support assistant
mainRouter.use('/support', supportRoutes);
