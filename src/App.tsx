/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ComingSoon from "./pages/ComingSoon";
import ThemePicker from "./components/ThemePicker";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-editor font-sans text-text-editor">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<ThemePicker />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
