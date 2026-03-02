# FinSight WhaleWatch MVP

FinSight WhaleWatch is a professional reference MVP (Minimum Viable Product) demonstrating a modern, high-performance full-stack architecture. This project is built for educational purposes to showcase the seamless integration of Next.js 16, Tailwind CSS v4, and AWS Amplify Gen 2.

The application simulates a real-time financial dashboard for tracking cryptocurrency transaction activity, focusing on robust design patterns and cloud-native infrastructure.

---

## Technical Proof of Concept

This MVP serves as a verification that the following technologies are working in harmony:

1.  **Frontend & Framework:** Next.js 16 (App Router) with Turbopack for high-speed development and optimized server-side rendering.
2.  **Design System:** Tailwind CSS v4 utilizing the new CSS-first `@theme` block for zero-runtime styling and strict design tokens.
3.  **Backend-as-Code:** AWS Amplify Gen 2 providing a fully typed, TypeScript-first infrastructure including Auth, Data, and serverless Functions.
4.  **Real-Time Simulation:** A scheduled Lambda function (cron) that populates a DynamoDB table via AppSync, demonstrating automated backend workflows.

---

## Tech Stack

- **Framework:** Next.js 16.1.6
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Infrastructure:** AWS Amplify Gen 2 (Cognito, AppSync, DynamoDB, Lambda)
- **Iconography:** Lucide React

---

## AWS Architecture

The project uses AWS Amplify Gen 2 to define the backend infrastructure entirely in TypeScript.

### 1. Data Layer

- GraphQL API defined in `amplify/data/resource.ts`.
- Uses Amazon AppSync and DynamoDB to store and query transaction data.

### 2. Authentication

- Managed by Amazon Cognito through `amplify/auth/resource.ts`.
- Supports email-based authentication for secure access.

### 3. Serverless Functions

- **seed-handler**: Triggered every minute via an EventBridge Rule (configured in `amplify/backend.ts`). This function prepares and injects mock transaction data into the database to simulate real-time ingestion.

---

## How to Start

### 1. Prerequisites

- Node.js 20 or later.
- AWS Account and CLI for backend testing.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start AWS Sandbox

Deploy your personal cloud sandbox to generate `amplify_outputs.json`:

```bash
npx ampx sandbox
```

### 4. Run the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

---
