# Secrets

## Introduction

Secrets is a NextJs application which enables users to send and receive massages / feedback anonymously. This application was written completely in typescript / NextJs.

## Prerequisites

Make sure you have the following installed before running the project:

- Node.js
- npm or yarn
- MongoDb URI from https://www.mongodb.com/

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EmekaManuel/secrets.git
   ```
  
2. **Install Dependencies & Run the Application:**
   ```bash
   npm install
   or
   yarn install
   ```
   
## Folder Structure - Next13 app-router
   ```bash
   /app: Contains the source code of the project.
      /api: Contains all api logic.
      /auth: Reusable React components.
      /dashboard: User Dashboard.
   /components: contains reusable components
   /lib: contains utility functions
   /prisma: contains prisma ORM config
```

## Additional Notes
   ```bash
   - The app uses Prisma as ORM and MongoDB as database.
   - The app uses NextAuth credentialProvider for authentication.
   - The styling is handled using shadcn-UI and tailwind.   
   - Redux is employed for state management, allowing efficient data flow between components.
```

## Possible Improvements
```bash
- Send images alongside messages
```

- Feel free to contribute, report issues, or suggest improvements!

