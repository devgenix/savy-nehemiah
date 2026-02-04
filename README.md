# Savy Nehemiah Checkout

A professional, responsive payment checkout interface built with **Next.js 14**, **Tailwind CSS**, and **Lucide React**. This project demonstrates a clean UI/UX for a subscription-based checkout flow.

## 🚀 Live Demo
This project is configured for static export and is automatically deployed to GitHub Pages.
- **Base Path:** `/savy-nehemiah`

## ✨ Features
- **Responsive Design:** Optimized for mobile, tablet, and desktop views.
- **Order Summary:** Real-time summary displaying a $132.00 Premium Plan (Yearly) with tax calculation.
- **Payment Form:** Clean input fields for Cardholder Name, Card Number, Expiry Date, and CVC.
- **Security Indicators:** Visual trust markers (ShieldCheck) to enhance user confidence.
- **Automated Deployment:** CI/CD pipeline via GitHub Actions for seamless updates.

## 🛠 Tech Stack
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** GitHub Pages (Static Export)

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/devgenix/savy-nehemiah.git
   cd savy-nehemiah
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000/savy-nehemiah](http://localhost:3000/savy-nehemiah) to view it.

## 📦 Deployment
The project is set up to automatically build and deploy whenever changes are pushed to the `main` branch.

- **Config:** `next.config.mjs` is configured with `output: 'export'`.
- **Workflow:** `.github/workflows/deploy.yml` handles the build and deployment to GitHub Pages.

---
Created with ❤️ by [devgenix](https://github.com/devgenix)
