import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import { ThemeProvider } from "../context/ThemeContext";

// Modern routing configuration
export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ThemeProvider>
                <MainLayout/>
            </ThemeProvider>
        ),
        children: [
            {
                index: true,            
                element: <HomePage />,
            },
        ],
    },
]);
