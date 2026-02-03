import Button from "./Button";

const Cards = ({ menuData }) => {
    return (
        <section className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-4 place-items-center w-full">
            {
                menuData.map(({ foodId, foodType, foodTitle, foodDescription, foodImage, foodPrice }) => (
                    <div key={foodId} className=" w-88 h-122 flex flex-col items-start justify-evenly rounded-md shadow-md bg-white/80 px-4">
                        <span className="text-[#9f9f9f] border-2 flex items-center justify-center font-semibold size-4.5 text-xs rounded-full">
                            {foodId}
                        </span>

                        <h3 className="font-light text-sm">
                            {foodType}
                        </h3>

                        <h1 className="text-[#2f2f2f] text-4xl font-semibold">
                            {foodTitle}
                        </h1>

                        <p className="text-xs text-[#9f9f9f] leading-4">
                            {foodDescription}
                        </p>

                        <div className="flex items-center justify-center gap-x-10">
                            <div className="border-t-1.5 border border-[#d8d8d8] w-58"></div>
                            <p className="uppercase text-[#4f4f4f] tracking-widest">
                                Read
                            </p>
                        </div>

                        <div className="w-full aspect-3/2 overflow-hidden rounded-md">
                            <img src={foodImage} alt="Maggie Image" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex items-center justify-between w-full">
                            <p className="text-[#848484] text-sm font-medium"> Price : {foodPrice}
                            </p>
                            <Button />
                        </div>
                    </div>
                ))
            }

        </section>
    )
}
export default Cards;
