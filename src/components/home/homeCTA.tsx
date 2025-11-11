import { BsArrowDownLeft } from "react-icons/bs";

interface HomeCTAProps {
    title?: string;
    description?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    onPrimary?: () => void;
    onSecondary?: () => void;
}

export default function HomeCTA({
    title = 'Start building with Framer Motion',
    description = 'Explore animations, interactions and page transitions with small, composable examples.',
}: HomeCTAProps) {
    return (
        <section className="flex px-6 py-6 bg-transparent shadow-md transition-colors duration-300 items-start md:items-center gap-6 overflow-hidden">
            <div className="bg-white/20 dark:bg-gray-800/20 p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-6 w-full">
                <div className="flex flex-col gap-4 md:flex-1">
                    {/* Text */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 dark:text-gray-100">
                            {title}
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300">
                            {description}
                        </p>
                    </div>

                    {/* Button + Icon */}
                    <div className="flex items-center gap-2 mt-4">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Explore
                        </button>
                        <BsArrowDownLeft className="text-xl text-gray-700 dark:text-gray-200" />
                    </div>
                </div>


                <div className="md:flex-shrink-0 flex items-center justify-center">
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
