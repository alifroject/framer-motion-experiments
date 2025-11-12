import { BsArrowDownLeft } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

interface HomeCTAProps {
    title?: string;
    description?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    onPrimary?: () => void;
    onSecondary?: () => void;
}

export default function HomeCTA({
    title = "Start building with Framer Motion",
    description = "Explore animations, interactions and page transitions with small, composable examples.",
}: HomeCTAProps) {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section className="flex px-6 py-6 bg-transparent transition-colors duration-300 items-start md:items-center gap-6 overflow-hidden">
            <div
                className="relative p-4 rounded-lg flex flex-col md:flex-row gap-6 w-full bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.squarespace-cdn.com/content/v1/608164c98d4fc466c981a18c/0c10f14e-a6ff-4945-b957-2f750c8d708c/Flying-Fantasy-World.jpg?format=1500w')",
                }}
            >

                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg" /> {/* Overlay */}

                <div className="relative z-10 flex flex-col gap-4 md:flex-1">
                    <div className="flex flex-col gap-2">
                        <h2
                            className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold ${isDark ? "text-gray-100" : "text-gray-50"
                                }`}
                        >
                            {title}
                        </h2>
                        <p
                            className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ${isDark ? "text-gray-200" : "text-gray-100"
                                }`}
                        >
                            {description}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Explore
                        </button>
                        <BsArrowDownLeft
                            className={`text-xl transition-colors duration-300 ${isDark ? "text-gray-100" : "text-gray-50"
                                }`}
                        />
                    </div>
                </div>

                <div className="relative z-10 md:flex-shrink-0 flex items-center justify-center">
                    <img
                        src="/fantasy_portrait.png"
                        alt=""
                        className="h-full max-h-[500px] w-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
