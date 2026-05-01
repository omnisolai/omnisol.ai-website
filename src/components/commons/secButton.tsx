
const SecButton = ({ text,className }: { text: string, className?: string }) => {
    return (
        <button
            className={`text-white bg-black w-full px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-gray-800 transition-colors cursor-pointer duration-200 ${className}`}>
            {text}
        </button>
    )
}

export default SecButton
