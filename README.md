# 🏥 MediConnect - Smart Hospital Appointment System

**MediConnect** is a professional, full-stack web application designed to streamline patient registration and appointment management through cloud-integrated automation.

---

## 🚀 Live Demo
Experience the platform here: [https://lakshmi-nath09.github.io/MediConnect/](https://lakshmi-nath09.github.io/MediConnect/)

---

## 📈 Project Outcomes
* **Automated Data Synchronization:** Successfully bridged a frontend interface with a **Google Apps Script API**, enabling real-time, zero-latency data logging into a cloud-based Google Sheets database.
* **Enhanced UX & Validation:** Reduced scheduling errors by implementing custom JavaScript logic for **Unique ID generation (#CF-xxxx)** and restricted date selection to prevent past-date or weekend bookings.

---

## ✨ Key Features
* **Unique Appointment ID:** Automatically generates a custom tracking ID for every booking to ensure organized patient records.
* **Live Cloud Integration:** Uses **Asynchronous JavaScript (Fetch API)** to sync patient data directly to Google Sheets.
* **Optimized UI/UX:** Features a categorized dropdown of 15+ medical specialties and a fully responsive design for mobile and desktop.
* **Digital Receipts:** A "Print-to-PDF" feature with centered CSS media queries, allowing patients to save confirmation details instantly.

---

## 🛠️ Technology Stack
* **Frontend:** HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+)
* **Backend:** Google Apps Script (REST API)
* **Storage:** Google Sheets (Cloud Database)

---

## 📸 System Workflow
1.  **Input:** User selects a department and enters valid contact details.
2.  **Logic:** JavaScript validates inputs, checks date availability, and generates a unique ID.
3.  **Sync:** Data is transmitted via a secure `POST` request to the Google Script URL.
4.  **Confirmation:** The UI dynamically updates to show a "Success State" with a printable receipt.



---

## 🛡️ Privacy & Compliance
MediConnect includes a privacy agreement checkbox and data-handling transparency, mimicking real-world healthcare digital compliance standards.

---

## 👨‍💻 Author
**Lakshmi Devi**
* **GitHub:** [lakshmi-nath09](https://github.com/lakshmi-nath09)
* **Project Link:** [MediConnect Repository](https://github.com/lakshmi-nath09/MediConnect)
