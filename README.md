
# Student Management System

This project is a simple student management system built with Next.js, Prisma, and SQLite. It demonstrates basic user management and role-based access control.

## Prerequisites

- Node.js (LTS version)
- npm (comes with Node.js)

## Setup Instructions

1. **Clone the Repository**: Clone this repository to your local machine or download the zip and extract it.

2. **Install Dependencies**: Navigate to the project directory in your terminal and run `npm install` to install the required dependencies.

3. **Generate Prisma Client**: Run `npx prisma generate` to generate the Prisma Client. This step is crucial for the application to interact with the database.

4. **Run Migrations**: Initialize your database schema with `npx prisma migrate dev`. This command also creates the SQLite database file (`dev.db`) if it doesn't already exist.

5. **Seed the Database**: Populate the database with initial data using `npx prisma db seed`.

6. **Start the Development Server**: Run `npm run dev` to start the development server. The application will be available at `http://localhost:3000`.

## Using the Application

- Navigate to `http://localhost:3000` in your web browser to view the application.
- Use the Sign In/Sign Up links to access different parts of the application based on user roles.

## Troubleshooting

- If you encounter issues with `npx prisma migrate dev` or `npx prisma db seed`, ensure you've run `npx prisma generate` to reflect the latest schema changes in the Prisma Client.
- For issues related to dependencies, try deleting the `node_modules` folder and the `package-lock.json` file, then run `npm install` again.

## Contributing

Feel free to fork the repository and submit pull requests with any enhancements or fixes.

