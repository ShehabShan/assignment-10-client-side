

# 🌍 Visa Navigator  


<img src="https://i.ibb.co.com/DPKJ9J1P/Screenshot-2025-02-05-191051.png" alt="Mobile Selling Website" />


A user-friendly **Visa Navigator Portal** designed to simplify the process of checking visa requirements, applying for visas online, and tracking application statuses. The platform offers a dynamic interface, robust functionality, and a seamless user experience to streamline the visa process for travelers worldwide.  

---

## 📚 Table of Contents  
- [Project Overview](#project-overview)  
- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Environment Variables](#environment-variables)  
- [Dependencies](#dependencies)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  

---

## 🌐 Project Overview  
**Visa Navigator** aims to make visa management effortless by providing:  
- ✅ Easy access to visa requirements for any country.  
- 📝 Simple online visa application submission.  
- 📊 Real-time tracking of visa application status.  

This portal is built to deliver a hassle-free visa experience with an intuitive UI and smooth navigation.  

---

## ✨ Features  
- 🌍 **Visa Requirement Checker:** Instantly find visa requirements based on nationality and destination.  
- 🗂️ **Online Application Submission:** Apply for visas directly through the portal.  
- 📦 **Real-Time Application Tracking:** Monitor the status of your visa applications.  
- 🔒 **Secure User Authentication:** Integrated with Firebase for secure data management.  
- 🚀 **Responsive Design:** Optimized for all devices to provide a seamless experience.  

---

## ⚙️ Installation  

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/ShehabSarar/visa-navigator.git
   cd visa-navigator
   ```  

2. **Install Dependencies:**  
   ```bash
   npm install
   ```  
   or  
   ```bash
   yarn install
   ```  

3. **Set Up Environment Variables:**  
  ## 🗝️ Environment Variables  

| Variable                 | Description                |
|:-------------------------|:---------------------------|
| `VITE_apiKey`            | Firebase API Key           |
| `VITE_authDomain`        | Firebase Auth Domain       |
| `VITE_projectId`         | Firebase Project ID        |
| `VITE_storageBucket`     | Firebase Storage Bucket    |
| `VITE_messagingSenderId` | Firebase Messaging Sender  |
| `VITE_appId`             | Firebase App ID            |  

Ensure these variables are secure and not exposed in public repositories.  

4. **Run the Application:**  
   ```bash
   npm run dev
   ```  
   or  
   ```bash
   yarn dev
   ```  

5. **Build for Production:**  
   ```bash
   npm run build
   ```  
   or  
   ```bash
   yarn build
   ```  

---



---

## 📦 Dependencies  

### **Production:**  
- **React** `^18.3.1` – Frontend framework  
- **React Router DOM** `^7.0.2` – Routing management  
- **Firebase** `^11.0.2` – Authentication & backend services  
- **Axios** `^1.7.9` – API requests  
- **SweetAlert2** `^11.14.5` – Stylish alerts  
- **Swiper** `^11.2.1` – Carousel/slider integration  
- **React Hot Toast** `^2.5.1` – Notifications  
- **React Icons** `^5.4.0` – Icon library  

### **Development:**  
- **Vite** `^6.0.1` – Fast build tool  
- **Tailwind CSS** `^3.4.16` & **DaisyUI** `^4.12.14` – Styling framework  
- **ESLint** `^9.15.0` – Linting for code quality  
- **PostCSS** `^8.4.49` & **Autoprefixer** `^10.4.20` – CSS processing  

---

## 📂 Project Structure  
```plaintext
visa-navigator/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Application pages
│   ├── services/          # API calls & Firebase logic
│   ├── styles/            # Tailwind CSS & custom styles
│   └── App.jsx            # Main application file
├── .env                   # Environment configuration
├── package.json           # Project metadata & dependencies
└── vite.config.js         # Vite configuration
```  

---

## 🤝 Contributing  
Contributions are welcome!  
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature/your-feature`).  
3. Commit your changes (`git commit -m 'Add new feature'`).  
4. Push to the branch (`git push origin feature/your-feature`).  
5. Open a pull request.  

