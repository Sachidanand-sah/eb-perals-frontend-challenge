// src/App.jsx
import { Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TaskManager from "./components/TaskManager";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Hero />
        <Features />
        <TaskManager />
        <ContactForm />
        <Footer />
      </Suspense>
  );
}

export default App;