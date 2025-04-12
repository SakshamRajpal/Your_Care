
![Screenshot 2025-04-12 122419](https://github.com/user-attachments/assets/84b7ce10-958a-410a-82ec-c5d23cfece63)
A HealthCare Management System:-
1.📋 Table of Contents
2.🤖 Introduction
3.⚙️ Tech Stack
4.🔋 Features
5.🤸 Quick Start


🤖 Introduction
A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.

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
![Screenshot 2025-04-12 122419](https://github.com/user-attachments/assets/129d82da-0c2a-4755-a197-90eb541019ed)

👉 Book a New Appointment with Doctor: Patients can schedule appointments with doctors at their convenience and can book multiple appointments.
![Screenshot 2025-04-12 122859](https://github.com/user-attachments/assets/b5a61fe5-64ec-46ee-ad90-e28a073fd388)

👉 Manage Appointments on Admin Side: Administrators can efficiently view and handle all scheduled appointments.
![Screenshot 2025-04-12 122447](https://github.com/user-attachments/assets/ca6ce6c8-18ff-450d-84fb-c78c4b7a9679)

👉 Confirm/Schedule Appointment from Admin Side: Admins can confirm and set appointment times to ensure they are properly scheduled.
![Screenshot 2025-04-12 122551](https://github.com/user-attachments/assets/8d846878-6077-4335-a7db-c75eba210e37)

👉 Cancel Appointment from Admin Side: Administrators have the ability to cancel any appointment as needed.

👉 Send SMS on Appointment Confirmation: Patients receive SMS notifications to confirm their appointment details.

👉 Complete Responsiveness: The application works seamlessly on all device types and screen sizes.

👉 File Upload Using Appwrite Storage: Users can upload and store files securely within the app using Appwrite storage services.

👉 Manage and Track Application Performance Using Sentry: The application uses Sentry to monitor and track its performance and detect any errors.

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
