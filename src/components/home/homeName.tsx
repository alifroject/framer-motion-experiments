import { useTheme } from "../../context/ThemeContext";


export default function MainTop() {
    const { theme } = useTheme();

    const isDark = theme === "dark";

    return (
        <>
            <div
                className={'w-full p-6 rounded-xl shadow-md transition-colors duration-300 justify-center items-center text-center'}
            >
                <h1
                    className={`text-9xl font-bold transition-colors duration-300 font-curly ${isDark ? 'text-pink-400' : 'text-pink-700'
                        }`}
                >
                    Aurora
                </h1>
                <p
                    className={`mt-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-blue-700'
                        }`}
                >
                    This is the top section of the home page.
                </p>
            </div>
        </>
    )
}