import searchIcon from "@/assets/search-icon.png";
import burgerEmoticon from "@/assets/burger-emoticon.png";
import chevronDownIcon from "@/assets/chevron-down-icon.png";
import notificationIcon from "@/assets/notification-icon.png";
import menuIcon from "@/assets/menu.svg";

export default function Navbar({
  setSidebarOpen,
}: {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const openSidebar = () => setSidebarOpen(true);
  return (
    <nav className="h-[--navbar-height] border-b border-[#C8CBD9] w-full flex items-center px-10">
      {/* MOBILE MENU ICON */}
      <button
        onClick={openSidebar}
        type="button"
        className="lg:hidden mr-4 border-0 border-[#C8CBD9] rounded-md aspect-square relative"
      >
        <img src={menuIcon} className="w-12" />
      </button>
      {/* END MOBILE MENU ICON */}
      {/* SEARCH */}
      <div className="max-sm:w-full bg-[#F6F6FB] flex items-center rounded-md pr-3 focus-within:outline-[#707FDD] focus-within:outline py-2">
        <input
          type="text"
          className="bg-transparent focus:outline-none w-[120px] sm:w-[350px] lg:w-[600px] px-4 placeholder:text-[#1F384C] placeholder:text-opacity-30 placeholder:text-xs placeholder:font-normal text-[#1F384C]"
          placeholder="Search"
        />
        <img src={searchIcon} alt="" className="size-3 ml-auto " />
      </div>
      {/* END SEARCH */}

      <div className="max-sm:hidden ml-auto">
        {/* ACCOUNT INFO */}
        <div className="flex items-center">
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
      </div>
    </nav>
  );
}
