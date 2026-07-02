/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-editor font-sans text-text-editor">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
