import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <div className="bg-purple-300">
    <header className="w-11/12 mx-auto py-10">
      <Header />
    </header>
    <main className="w-11/12 mx-auto bg-slate-100 rounded-lg">
      <Outlet />
    </main>
    <footer className="w-full mx-auto">
      <Footer />
    </footer>
  </div>
);

export default MainLayout;
