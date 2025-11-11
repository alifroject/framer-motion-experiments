import { useTheme } from "../../context/ThemeContext";


export default function MainTop() {


    const { theme } = useTheme();

    const isDark = theme === "dark";

    return (
        <>
            <div
                className={`w-full p-6 rounded-xl shadow-md transition-colors duration-300 ${
                    isDark
                        ? 'bg-gray-800 border border-gray-700'
                        : 'bg-blue-200 border border-blue-300'
                }`}
            >
                <h1
                    className={`text-3xl font-bold transition-colors duration-300 ${
                        isDark ? 'text-blue-400' : 'text-blue-800'
                    }`}
                >
                    Welcome!
                </h1>
                <p
                    className={`mt-2 transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-blue-700'
                    }`}
                >
                    This is the top section of the home page.
                </p>
            </div>
        </>
    )
}