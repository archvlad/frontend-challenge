import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import MainLayout from "@layouts/MainLayout";
import FavouritesPage from "@pages/FavouritesPage";
import AllPage from "@pages/AllPage";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<AllPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
