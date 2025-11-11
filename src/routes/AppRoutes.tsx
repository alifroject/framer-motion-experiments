import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import { ThemeProvider } from "../context/ThemeContext";
const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <MainLayout>

                  
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>

                </MainLayout>
            </ThemeProvider>

        </BrowserRouter>
    );
};

export default AppRoutes;