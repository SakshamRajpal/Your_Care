# 🏥 YourCare - A HealthCare Management System

![Dashboard Screenshot](https://github.com/user-attachments/assets/84b7ce10-958a-410a-82ec-c5d23cfece63)

## 🤖 Introducing "YourCare"

**YourCare** is a healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors. It features administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications — all built using **Next.js**.

---

## ⚙️ Tech Stack

- **Next.js**
- **Appwrite**
- **TypeScript**
- **TailwindCSS**
- **ShadCN**
- **Twilio**
- **Sentry**

---

## 🔋 Features

### 👉 Register as a Patient
Users can sign up and create a personal profile as a patient.

![Register Screenshot 1](https://github.com/user-attachments/assets/426319bc-cbd1-4eeb-92e7-db69dfb916a4)  
![Register Screenshot 2](https://github.com/user-attachments/assets/84688948-8824-428d-977b-18bad63e8da9)

---

### 👉 Book a New Appointment with Doctor
Patients can schedule appointments at their convenience and book multiple appointments.

![Book Appointment Screenshot](https://github.com/user-attachments/assets/b5a61fe5-64ec-46ee-ad90-e28a073fd388)

---

### 👉 Manage Appointments on Admin Side
Admins can efficiently view and manage all scheduled appointments.

![Admin Dashboard Screenshot](https://github.com/user-attachments/assets/ca6ce6c8-18ff-450d-84fb-c78c4b7a9679)

---

### 👉 Confirm/Schedule Appointment from Admin Side
Admins can confirm and assign appointment times.

![Confirm Appointment Screenshot](https://github.com/user-attachments/assets/8d846878-6077-4335-a7db-c75eba210e37)

---

### 👉 Cancel Appointment from Admin Side
Admins have the ability to cancel appointments as needed.

---

### 👉 Send SMS on Appointment Confirmation
Patients receive SMS notifications when their appointments are confirmed.

---

### 👉 Complete Responsiveness
Works flawlessly across all screen sizes and devices.

![Responsive Screenshot 1](https://github.com/user-attachments/assets/161ad669-fbd9-437d-8c8c-a3c353c91c6b)
![Responsive Screenshot 2](https://github.com/user-attachments/assets/33b780f4-ee86-4955-8034-9be2e4179020)

---

### 👉 File Upload Using Appwrite Storage
Patients can upload and store files securely.

![File Upload Screenshot](https://github.com/user-attachments/assets/ed846a74-0ec7-47b8-863d-f3a523ccb976)

---

### 👉 Monitor & Track Performance with Sentry
Sentry integration helps track app performance and debug issues.

![Sentry Screenshot](https://github.com/user-attachments/assets/f0122088-82b2-45f1-8f87-5cc78efdfcdb)

---

And many more — including optimized code architecture and component reusability.

---

## 🤸 Quick Start

Follow these steps to get the project running locally.

### 🔧 Prerequisites

Ensure you have the following installed:
- Git
- Node.js
- npm (Node Package Manager)

### 📦 Clone the Repository

```bash
git clone https://github.com/SakshamRajpal/Your_Care.git
cd Your_Care


📥 Install Dependencies
npm install

🔐 Set Up Environment Variables
Create a .env.local file in the root directory:
# APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=
NEXT_PUBLIC_ADMIN_PASSKEY=123456
NEXT_SENTRY_AUTH=
Replace the placeholders with your actual Appwrite credentials.

▶️ Run the Development Server
npm run dev
Visit http://localhost:3000 in your browser.

Made with ❤️ using Next.js and Appwrite

Let me know if you want to add sections like "Contributing", "License", or "Demo Video"!

