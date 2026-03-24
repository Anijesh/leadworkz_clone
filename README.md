# Leadworkz Replica

A pixel-perfect, highly interactive replica of the Leadworkz website. This project is a comprehensive technical showcase focusing on advanced frontend development, seamlessly blending high-end interactive 3D elements, dynamic physics-based animations, and a modern React ecosystem. 

The primary goal of this application is to push the boundaries of modern web interfaces by recreating complex visual components like the 3D Ferris Wheel Carousel and the WebGL 3D Globe, while maintaining strict performance standards.

## 🚀 The Tech Stack

This project leverages the bleeding edge of the React ecosystem to deliver an immersive full-spectrum digital experience:

*   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) - Utilizing the latest routing paradigm, Server Components, and seamless SSR/SSG for optimized delivery.
*   **UI Library**: [React 19](https://react.dev/) - Benefiting from the latest concurrent rendering features, transitions, and native optimizations.
*   **Styling Engine**: [Tailwind CSS v4](https://tailwindcss.com/) - Using the new PostCSS-driven styling engine for zero-runtime, utility-first UI construction.
*   **Animation Library**: [Framer Motion](https://www.framer.com/motion/) - Powering declarative, hardware-accelerated scroll animations, layout transitions, and gesture recognizers.
*   **3D Graphics & WebGL**: 
    *   [Three.js](https://threejs.org/) (Core 3D Engine)
    *   [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) (React renderer for Three.js)
    *   [@react-three/drei](https://github.com/pmndrs/drei) (Useful helpers and abstractions for R3F)
*   **Language**: Strict TypeScript for end-to-end type safety.

## ✨ Core Features & Technical Highlights

### 1. 3D Ferris Wheel Carousel (CSS 3D Transforms)
The "Full-Spectrum Digital Services" section features a completely custom, authentically recreated 3D carousel. Instead of relying on a 2D slider, this was built utilizing pure CSS 3D mathematics:
*   **`preserve-3d` Contexts**: Complex nested DOM elements leveraging `transform-style: preserve-3d`.
*   **Trigonometric Positioning**: Dynamic calculation of `rotateY` and `translateZ` based on the number of cards to construct a perfect 3D cylinder.
*   **Perspective Control**: Fine-tuned `perspective` and `transform-origin` adjustments to give the illusion of depth and spatial volume.

### 2. Interactive WebGL Globe (Three.js)
A dynamic planetary visualization designed to draw the user's eye and enhance narrative storytelling.
*   **Custom Shaders & Geometries**: Built from the ground up using core Three.js primitives inside React.
*   **Optimized Rendering**: Utilizing Drei's ecosystem for environment mapping, lighting, and orbit controls. 
*   **Performance First**: WebGL contexts are strictly lazy-loaded and unmounted seamlessly to protect the main thread.

### 3. Authentic, Physics-Based Animations
Powered entirely by Framer Motion, animations are designed to feel tactile and organic rather than linear and forced.
*   **3D Tilt Cards**: Implementing complex `onMouseMove` gestures mapping client X/Y coordinates to `rotateX` and `rotateY` springs, creating a "glassmorphic tilt" effect.
*   **Scroll-Driven Storytelling**: Utilizing `useScroll` and `useTransform` to bind DOM element opacity, scale, and y-axis translation directly to the user's scroll progress.

### 4. Pixel-Perfect, Responsive UI
Meticulous attention was paid to matching the original Leadworkz design language:
*   Curated typography, spacing rhythm, and fluid container widths.
*   **Mobile-First Scaling**: Ensuring that 3D WebGL canvases and heavy Framer Motion elements degrade gracefully or adjust their resolution/complexity automatically on smaller viewports.

## 🛠️ Getting Started & Installation

To run this project locally, ensure you have Node.js (v20+ recommended) and a modern package manager installed.

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd leadworkz-clone
   ```

2. **Install dependencies**:
   ```bash
   # Using npm
   npm install
   
   # Or using your preferred tool:
   yarn install
   pnpm install
   bun install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Explore the deployment**:
   Open [http://localhost:3000](http://localhost:3000) in your browser. The page utilizes Next.js hot module replacement (HMR) for instant feedback during editing.

## 📂 Architecture & Project Structure

The codebase strictly follows the Next.js App Router conventions, modularizing components to separate UI, state, and heavy 3D logic.

```text
leadworkz-clone/
├── app/                  # Next.js 16 App Router (Core pages, layouts, globals.css)
│   ├── layout.tsx        # Root HTML wrapper and global providers
│   └── page.tsx          # Main landing page orchestrating all sections
├── components/           # Reusable UI & Logic
│   ├── layout/           # Shared navigation (Header, Footer, Navigation overlays)
│   ├── sections/         # Extracted modular sections of the landing page (e.g., Process, Hero, Services)
│   └── three/            # Isolated WebGL/React Three Fiber context
│       └── GlobeCanvas.tsx # The heavy-lifting WebGL implementation
├── public/               # Static assets, fonts, and model textures
├── tailwind.config.ts    # Custom design tokens matching Leadworkz branding
└── package.json          # Dependency management and build scripts
```

