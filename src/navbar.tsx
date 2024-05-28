import searchIcon from "@/assets/search-icon.png";
import burgerEmoticon from "@/assets/burger-emoticon.png";
import chevronDownIcon from "@/assets/chevron-down-icon.png";
import notificationIcon from "@/assets/notification-icon.png";

export default function Navbar() {
  return (
    <nav className="h-[--navbar-height] border-b border-[#C8CBD9] w-full flex items-center px-10">
      {/* SEARCH */}
      <div className="bg-[#F6F6FB] flex items-center rounded-md pr-3 focus-within:outline-[#707FDD] focus-within:outline py-2">
        <input
          type="text"
          className="bg-transparent focus:outline-none w-[600px] px-4 placeholder:text-[#1F384C] placeholder:text-opacity-30 placeholder:text-xs placeholder:font-normal text-[#1F384C]"
          placeholder="Search"
        />
        <img src={searchIcon} alt="" className="size-3 ml-auto " />
      </div>
      {/* END SEARCH */}

      {/* ACCOUNT INFO */}
      <div className="ml-auto flex items-center mr-8">
        <div className="bg-[#FFE6CC] size-8 flex items-center justify-center rounded-full">
          <img src={burgerEmoticon} alt="" className="w-4" />
        </div>

        <div className="text-xs text-[#1F384C] ml-3">Delicious Burger</div>

        <img src={chevronDownIcon} alt="" className="size-5" />
      </div>
      {/* END ACCOUNT INFO */}

      {/* NOTIFICATION ICON */}
      <img src={notificationIcon} className="w-4" />
      {/* END NOTIFICATION ICON */}
    </nav>
  );
}
