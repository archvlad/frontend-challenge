import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "@layouts/MainLayout";
import FavouritesPage from "@pages/FavouritesPage";
import AllPage from "@pages/AllPage";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<AllPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
