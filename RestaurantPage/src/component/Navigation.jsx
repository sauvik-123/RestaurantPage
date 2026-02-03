const Navigation = ({ setCategory }) => {
    return (
        <nav className="bg-white/90 shadow-md flex items-center mx-auto rounded-lg md:px-2 lg:px-2 h-15">
            <ul className="flex items-center justify-center md:gap-x-3 lg:gap-x-4">

                <li className="hover:bg-[#f8f4c8] rounded-md h-10 px-3 flex duration-300 items-center justify-center font-medium cursor-pointer" onClick={() => setCategory("Breakfast")}>
                    Breakfast
                </li>

                <li className="hover:bg-[#f8f4c8] rounded-md h-10 px-3 flex duration-300 items-center justify-center font-medium cursor-pointer"
                    onClick={() => setCategory("Lunch")}>
                    Lunch
                </li>

                <li className="hover:bg-[#f8f4c8] rounded-md h-10 px-3 flex duration-300 items-center ease-in-outjustify-center font-medium cursor-pointer" onClick={() => setCategory("Snack")}>
                    Snack
                </li>

                <li className="hover:bg-[#f8f4c8] rounded-md h-10 px-3 flex duration-300 items-center ease-in-out justify-center font-medium cursor-pointer" onClick={() => setCategory("Dinner")}>
                    Dinner
                </li>

                <li className="hover:bg-[#f8f4c8] rounded-md h-10 px-4 flex duration-300 ease-in-out items-center justify-center font-medium cursor-pointer" onClick={() => setCategory("All")}>
                    All
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;
