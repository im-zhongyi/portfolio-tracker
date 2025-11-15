# GitHub Copilot Custom Instructions — Portfolio Tracker Project

These instructions customize GitHub Copilot's behavior to generate **optimal, secure, and maintainable code** for the **Portfolio Tracker** system. They guide Copilot on architecture, best practices, problem‑solving approach, and expected output structure.

---

# 🧭 Project Summary

The **Portfolio Tracker** is a multi-platform web/mobile solution for managing investment portfolios securely, including features like:

* Portfolio tracking, visualizations, and performance analytics
* Integrations with brokers (Tiger, Moomoo, etc., where supported)
* Quant trading tools (MACD, RSI, backtesting, ML models)
* Secure user authentication & encrypted storage
* Blue-themed UI with light/dark mode

Copilot should always assume **enterprise-level quality**, **scalable architecture**, and **security-first implementation**.

---

# 📁 Project Folder Structure (Reference)

```
portfolio-tracker/
  frontend/
    src/
      app/
        core/
        shared/
        features/
          dashboard/
          portfolio/
          analytics/
      styles/
        theme/
          light.scss
          dark.scss
  backend/
    src/
      modules/
        auth/
        users/
        portfolio/
        brokers/
        quant/
      common/
        middleware/
        config/
        utils/
  shared/
    quant/
      indicators/
      backtesting/
      ml/
  docs/
    copilot-instructions.md
```

---

# 🧩 How Copilot Should Think (Required Thinking Framework)

Whenever generating a solution, Copilot must follow this structured thinking process:

## **1️⃣ Understand the Problem Clearly**

Copilot should:

* Restate the problem internally
* Identify functional + non-functional requirements
* Identify constraints & edge cases (security, performance, input validation)

## **2️⃣ Plan Before Coding** (Roadmap)

Copilot must create a **mini‑roadmap** before writing code:

* Define high-level approach
* Break into logical components (**divide & conquer**)
* Describe key data structures
* Outline module responsibilities
* Provide optional **pseudocode**

## **3️⃣ Generate Solution**

* Produce clean, readable, maintainable code
* Follow project coding conventions
* Ensure type safety and strict linting
* Use dependency injection, modular architecture, and reusable patterns

## **4️⃣ Validate & Optimize**

* Ensure security best-practices
* Ensure response follows project conventions
* Identify potential performance issues
* Add comments when helpful

---

# 🧱 Frontend Coding Standards (Angular / Web)

### **General Rules**

* Use **standalone components**
* Use **strong typing everywhere**
* No any, no implicit types
* Use **Observables**, not Promises, when dealing with streams

### **Architecture**

* Each feature in its own folder under `features/`
* Use `core/` for global services (auth, http, interceptors)
* Use `shared/` for UI components and pure utilities

### **Theme Handling**

* Light/dark theme stored under `styles/theme/`
* Copilot should generate theme-aware components
* Use CSS variables; never duplicate colors

### **Charts (ng2-charts)**

* Always make chart wrappers responsive
* Handle window resize via Angular CDK `ResizeObserver`

---

# 🧱 Backend Coding Standards (Node.js / NestJS or Express)

### **General Rules**

* Use **NestJS‑style modular structure** when appropriate
* Each module must contain: controller, service, dto, entity/model
* Follow SOLID principles

### **Security Mandatory Rules**

Copilot must enforce:

* No plaintext sensitive data
* Use JWT (short-lived) + http‑only refresh tokens
* Validate all incoming payloads (DTO + class-validator)
* Use parameterized queries (no raw SQL)
* Store API keys in environment variables, never in code

### **Data Handling**

* Use encryption for stored portfolio data
* Use hashing (argon2/bcrypt) for user passwords
* Sanitize inputs to avoid injection attacks

---

# ☁️ API Integrations (Tiger, Moomoo)

Copilot should:

* Always check if the broker offers APIs for the user region
* Never assume unrestricted API access
* Provide fallback: manual CSV import or OAuth flow
* Avoid generating fake endpoints

---

# 📊 Quant Trading Code Standards

Copilot must generate quant code that:

* Is modular & testable
* Accepts DataFrame-like input
* Produces indicators (MACD, RSI, EMA, etc.) clearly
* Backtesting must compute:

  * CAGR
  * Max drawdown
  * Sharpe ratio
  * Win rate
* Results must be deterministic and reproducible

---

# 🔐 Security Rules for All Code

Copilot should always:

* Use environment variables for secrets
* Never log sensitive data
* Use HTTPS, HSTS, CSRF protection
* Prevent XSS (sanitize frontend inputs, escape outputs)
* Prevent SSRF / RCE / injection

---

# 🧭 Quality & Maintainability Guidelines

Copilot must:

* Prioritize readability
* Use clear naming conventions
* Write code that scales horizontally
* Favor composition over inheritance
* Provide comments explaining business logic
* Separate business logic from UI/Controllers

---

# 🧪 Testing Guidelines

Copilot should auto-generate tests using:

* Unit tests for core logic
* Integration tests for services
* Mock external APIs
* Ensure tests are deterministic and isolated

---

# 📘 Documentation Standards

Copilot-generated documentation should include:

* What the function/module does
* Inputs and outputs
* Error conditions
* Security considerations (if applicable)

---

# 📝 Output Requirements for Copilot

Whenever Copilot responds to a technical task:

* Provide a **brief roadmap**
* Provide **pseudocode** when helpful
* Provide the **final code solution** following best practices

**Format example:**

1. Summary of approach
2. Roadmap
3. Pseudocode
4. Final code
5. Security notes (if applicable)

---

# ✔️ When Unsure

Copilot should:

* Ask clarifying questions
* Avoid assumptions about API capabilities

---

End of file.
