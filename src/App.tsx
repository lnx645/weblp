/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ComingSoon from "./pages/ComingSoon";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ThemeSelection from "./pages/ThemeSelection";
import Payment from "./pages/Payment";
import InvitationForm from "./pages/InvitationForm";
import Publish from "./pages/Publish";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-editor font-sans text-text-editor">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<ThemeSelection />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/form" element={<InvitationForm />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
