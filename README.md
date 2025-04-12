
![Screenshot 2025-04-12 122419](https://github.com/user-attachments/assets/84b7ce10-958a-410a-82ec-c5d23cfece63)
A HealthCare Management System:-

🤖 Introducting "YourCare" A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.

⚙️ Tech Stack
Next.js
Appwrite
Typescript
TailwindCSS
ShadCN
Twilio
Sentry

🔋 Features
👉 Register as a Patient: Users can sign up and create a personal profile as a patient.
![Screenshot 2025-04-12 122654](https://github.com/user-attachments/assets/426319bc-cbd1-4eeb-92e7-db69dfb916a4)
![Screenshot 2025-04-12 122706](https://github.com/user-attachments/assets/84688948-8824-428d-977b-18bad63e8da9)

👉 Book a New Appointment with Doctor: Patients can schedule appointments with doctors at their convenience and can book multiple appointments.
![Screenshot 2025-04-12 122859](https://github.com/user-attachments/assets/b5a61fe5-64ec-46ee-ad90-e28a073fd388)

👉 Manage Appointments on Admin Side: Administrators can efficiently view and handle all scheduled appointments.
![Screenshot 2025-04-12 122447](https://github.com/user-attachments/assets/ca6ce6c8-18ff-450d-84fb-c78c4b7a9679)

👉 Confirm/Schedule Appointment from Admin Side: Admins can confirm and set appointment times to ensure they are properly scheduled.
![Screenshot 2025-04-12 122551](https://github.com/user-attachments/assets/8d846878-6077-4335-a7db-c75eba210e37)

👉 Cancel Appointment from Admin Side: Administrators have the ability to cancel any appointment as needed.

👉 Send SMS on Appointment Confirmation: Patients receive SMS notifications to confirm their appointment details.

👉 Complete Responsiveness: The application works seamlessly on all device types and screen sizes.
![Screenshot 2025-04-12 122419](https://github.com/user-attachments/assets/161ad669-fbd9-437d-8c8c-a3c353c91c6b)![Screenshot 2025-04-12 122431](https://github.com/user-attachments/assets/33b780f4-ee86-4955-8034-9be2e4179020)

👉 File Upload Using Appwrite Storage: Users can upload and store files securely within the app using Appwrite storage services.
![image](https://github.com/user-attachments/assets/ed846a74-0ec7-47b8-863d-f3a523ccb976)

👉 Manage and Track Application Performance Using Sentry: The application uses Sentry to monitor and track its performance and detect any errors.
![Screenshot 2025-04-12 180042](https://github.com/user-attachments/assets/f0122088-82b2-45f1-8f87-5cc78efdfcdb)

and many more, including code architecture and reusability

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:
Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone 
cd Your_Care
Installation

Install the project dependencies using npm:-
npm install
Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:-
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1 
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the Appwrite website.

Running the Project:-
npm run dev
Open http://localhost:3000 in your browser to view the project.
