import { useState } from "react";
import Cards from "./component/Cards";
import Navigation from "./component/Navigation";
import MenuAPI from "./component/MenuAPI";
import Logo from "../src/Assets/Logo.png";

const App = () => {
  const [category, setCategory] = useState("All")

  const filteredMenu = category === "All" ? MenuAPI : MenuAPI.filter(({ foodType }) => foodType.toLowerCase() === category.toLowerCase())

  return (
    <div className="bg-[#F7F6EB] min-h-screen w-full gap-y-10 flex pb-5 flex-col">
      <div className="flex items-center justify-center gap-x-3 mt-5">
        <img src={Logo} alt="Main-Logo" className="w-14 rounded-full" />
        <h1 className="text-center font-bold tracking-widest text-3xl font-[Bebas_Neue]">
          Restaurant
        </h1>
      </div>
      <Navigation setCategory={setCategory} />
      <Cards menuData={filteredMenu} />
    </div>
  )
}

export default App;
