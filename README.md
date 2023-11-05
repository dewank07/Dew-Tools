# Dew Tools - Multi Utility Web App
![image](https://github.com/dewank07/Dew-Tools/assets/68022840/a605a2c7-bf55-49ad-a429-6371d11771c8)


## Project Overview

Dew Tools is a versatile multi-utility web app designed to simplify various tasks. It offers a range of features including image, audio, and video conversion, QR code scanning and generation, and a note-taking application. This project is built using Next.js and leverages several libraries and services to enhance its capabilities:

- **UI**: Shadcn UI
- **File Conversion**: ffmpeg wasm library
- **QR Code**: react-qr for scanning and generation
- **Authentication**: Clerk Auth
- **Database**: Neon for serverless Postgres DB and Drizzle ORM for Postgres DB
- **Note Editor**: TipTapEditor
- **Note Storage**: Firebase

## Key Features

1. **File Conversion**: Easily convert images, audios, and videos into various formats.
2. **QR Code Operations**: Generate QR codes and scan existing ones.
3. **Note Taking**: Create and save notes with an interactive editor.

## Installation and Setup

To run Dew Tools on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/dewank07/dew-tools.git
   cd dew-tools
2. Install project dependencies using npm or yarn:

   ```bash
   npm install
   or
   yarn install
3. Set up your environment variables:
    Create a .env.local file in the project root.
    Add the required environment variables, such as API keys and database connection strings.
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
    DATABASE_URL=
    FIREBASE_API_KEY=

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev

6. The project will be accessible locally in your web browser at http://localhost:3000.

## **Deployed Project**

You can access the deployed Dew Tools web app at [[https://https://dew-tools.vercel.app/](https://dew-tools.vercel.app/)].

## **Future Scope**

The project has great potential for future enhancements:

1. **PDF Conversion**: Add the capability to convert PDF files into different formats.
2. **Collaborative Whiteboard Clone**: Create a collaborative whiteboard feature for real-time collaboration.

Feel free to contribute to the project and help expand its functionality!

*Please note that the project relies on various external libraries and services, so you may need to set up accounts and obtain API keys for services like Clerk Auth and Firebase to fully utilize the application's features.*

Enjoy using Dew Tools, and thank you for your interest and potential contributions to the project!
