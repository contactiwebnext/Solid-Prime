import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Google GenAI client
let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY || "AIzaSyCLKX2tohQTHF9Gk06XqqlT-tXUjVSOYBU";
  if (!aiClient && apiKey) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Fallback intelligent responder when Gemini API key is not yet configured or on network fallback
function getFallbackResponse(message: string): string {
  const query = message.toLowerCase();
  if (query.includes("contact") || query.includes("phone") || query.includes("email") || query.includes("location") || query.includes("address") || query.includes("call")) {
    return "Solid Prime is proudly based in Excelsior, Minnesota. You can reach our team directly at 615-853-0515 or by emailing johnkruzum16@gmail.com. You can also submit the contact form on our website.";
  }
  if (query.includes("guarantee") || query.includes("profit") || query.includes("risk-free") || query.includes("returns") || query.includes("predict")) {
    return "Solid Prime does not guarantee investment returns or risk-free trading. Investing involves substantial risk, and past performance does not guarantee future results. AI-generated insights are informational tools designed to assist your own independent decision-making.";
  }
  if (query.includes("risk") || query.includes("var") || query.includes("beta") || query.includes("sharpe")) {
    return "Solid Prime integrates quantitative risk surveillance including historical Value-at-Risk (VaR), portfolio beta tracking against benchmarks, dynamic Sharpe ratio modeling, and mathematical position-sizing calculators to prevent over-allocation.";
  }
  if (query.includes("ai") || query.includes("model") || query.includes("algorithm") || query.includes("trading") || query.includes("machine learning")) {
    return "Our AI trading technology continuously analyzes market patterns, liquidity flows, volatility divergences, and multi-factor indicators. Rather than attempting to predict the future with certainty, our models flag statistical anomalies and risk parameters to provide data-driven intelligence for traders and investors.";
  }
  if (query.includes("start") || query.includes("join") || query.includes("open") || query.includes("account") || query.includes("signup") || query.includes("sign up")) {
    return "To get started, click the 'Get Started' button in the navigation bar to launch your demo environment. You can explore simulated trading metrics, test our risk sizing calculator, or contact our Excelsior team at 615-853-0515.";
  }
  if (query.includes("dashboard") || query.includes("platform") || query.includes("demo") || query.includes("terminal")) {
    return "The Solid Prime Platform provides an integrated view of portfolio performance, asset allocation, interactive charting, algorithmic watchlist signals, and comprehensive risk metrics like Value-at-Risk (VaR), Beta, and Sharpe ratios. All numbers in the interactive demonstration are simulated demo data.";
  }
  if (query.includes("about") || query.includes("mission") || query.includes("company") || query.includes("who are you")) {
    return "Solid Prime is an online investing, fintech, and AI-powered trading platform headquartered in Excelsior, Minnesota. Our mission is to make institutional-grade market surveillance, portfolio analytics, and quantitative risk controls accessible to self-directed investors.";
  }
  if (query.includes("minnesota") || query.includes("excelsior") || query.includes("where")) {
    return "Solid Prime is headquartered in Excelsior, Minnesota, serving investors seeking modern financial technology and institutional-grade analytical tooling.";
  }
  return "Welcome to Solid Prime. We combine modern investing tools, market intelligence, and AI-assisted analysis to streamline your market workflows. How can I assist you today with our platform, research tools, or contact details?";
}

// 1. Health check API
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Solid Prime Backend API",
    location: "Excelsior, MN",
    aiEnabled: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// 2. Chat API for AI Assistant widget
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      res.status(400).json({ error: "Message is required." });
      return;
    }

    const ai = getAI();

    if (!ai) {
      // Graceful fallback if API key is not configured
      const reply = getFallbackResponse(message);
      res.json({ reply, source: "fallback" });
      return;
    }

    const systemInstruction = `You are the official AI Assistant for Solid Prime, an online investing and AI trading platform based in Excelsior, Minnesota.
Business details:
- Business name: Solid Prime
- Industry: Online investing, financial technology, and AI-powered trading
- Location: Excelsior, MN
- Phone: 615-853-0515
- Email: johnkruzum16@gmail.com

Crucial Compliance and Safety Rules:
1. Always state or emphasize that investing involves market risk and that past performance does not guarantee future results.
2. NEVER promise guaranteed returns, risk-free profits, or claim to outperform the market with certainty.
3. Clarify that AI-assisted insights and market analysis are purely informational and data-driven analytical aids, not guaranteed predictions or personalized financial advice.
4. Answer user queries about Solid Prime's features: Portfolio Management, Market Insights, Risk Indicators (VaR, Sharpe ratio, Beta), Interactive Charts, and the Demo Dashboard.
5. Provide accurate contact details (Excelsior, MN; 615-853-0515; johnkruzum16@gmail.com) when requested.
6. Keep answers concise, highly articulate, polite, and helpful.`;

    // Construct conversation contents
    const contents: any[] = [];

    if (Array.isArray(history)) {
      for (const item of history.slice(-6)) {
        if (item.sender === "user" && item.text) {
          contents.push({ role: "user", parts: [{ text: item.text }] });
        } else if (item.sender === "bot" && item.text) {
          contents.push({ role: "model", parts: [{ text: item.text }] });
        }
      }
    }

    contents.push({ role: "user", parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || getFallbackResponse(message);
    res.json({ reply, source: "gemini" });
  } catch (error: any) {
    console.error("Chat API error:", error?.message || error);
    const reply = getFallbackResponse(req.body.message || "");
    res.json({ reply, source: "fallback-error" });
  }
});

// 3. Contact Form Submission API
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        error: "Please provide your name, a valid email address, and a message.",
      });
      return;
    }

    // Basic email pattern validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        error: "Please provide a valid email format.",
      });
      return;
    }

    console.log(`[Solid Prime Contact] From: ${name} <${email}> | Subject: ${subject || "General Inquiry"}`);
    console.log(`[Message Content]: ${message}`);

    res.json({
      success: true,
      message: "Thank you for reaching out to Solid Prime. Our team in Excelsior, MN has received your message and will respond within 1 business day.",
      details: {
        phone: "615-853-0515",
        email: "johnkruzum16@gmail.com",
        location: "Excelsior, MN",
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: "An unexpected error occurred while processing your request.",
    });
  }
});

// Setup Vite middleware or static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Solid Prime Server running on port ${PORT} (Excelsior, MN)`);
  });
}

startServer();
