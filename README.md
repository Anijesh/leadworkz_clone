# Leadworkz Replica

A pixel-perfect replica of the Leadworkz website, focusing on high-end interactive 3D elements, dynamic animations, and a modern React ecosystem. The project aims to accurately recreate specific interactive components, such as the 3D Ferris Wheel Carousel and the 3D Globe, to deliver an immersive full-spectrum digital experience.

## 🚀 Tech Stack

This project is built using cutting-edge frontend technologies:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), and [@react-three/drei](https://github.com/pmndrs/drei)
- **Language**: TypeScript

## ✨ Key Features

- **3D Ferris Wheel Carousel**: Accurately recreated 3D carousel effect for the "Full-Spectrum Digital Services" section using CSS 3D transforms, allowing cards to rotate in a truly 3D space.
- **Interactive 3D Globe**: A dynamic WebGL globe visualization crafted with Three.js and React Three Fiber to enhance the visual storytelling.
- **Authentic Animations**: Complex layout animations, 3D tilt effects, and smooth 360-degree movements powered by Framer Motion.
- **Pixel-Perfect UI**: Carefully matched typography, spacing, and layout to mirror the original site's premium design aesthetics.
- **Optimized Performance**: Leveraging Next.js 16 server components and React 19 optimization patterns for fast load times and buttery smooth scrolling.

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Ensure you have Node.js installed (v20 or higher is recommended) along with a package manager like `npm`.

### Installation & Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repository-url>
   cd leadworkz-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or yarn / pnpm / bun
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or yarn dev / pnpm dev / bun dev
   ```

4. **View the project**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## 📂 Project Structure Focus

- `app/` - The main Next.js 16 App Router containing page layouts and core routes.
- `components/three/` - Contains Three.js configurations and specific 3D elements like the `GlobeCanvas`.
- `components/sections/` - Extracted UI sections of the landing page.
- `components/layout/` - Global layout components like headers and footers.

## 🎓 Development Strategy & Interview Prep Context

This replica was built with a strong focus on demonstrating advanced technical proficiency:
1. **Understanding original behavior:** Breaking down and replicating complex 3D transformations rather than relying purely on simple 2D animations.
2. **Modern conventions:** Strict adherence to Next.js App Router guidelines and the new capabilities introduced in React 19 and Tailwind CSS v4.
3. **Responsive first:** Ensuring that the complex 3D (WebGL) and Framer Motion elements gracefully scale down to mobile without layout shifts or performance hits.

---

> **Note**: This project is for educational and portfolio demonstration purposes, showcasing the ability to reverse-engineer and rebuild complex modern web interfaces.
