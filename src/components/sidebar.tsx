import Logo from "@/assets/Logo.png";
import buyIcon from "@/assets/buy-icon.png";
import chartIcon from "@/assets/chart-icon.png";
import chatIcon from "@/assets/chat-icon.png";
import documentIcon from "@/assets/document-icon.png";
import infoIcon from "@/assets/info-icon.png";
import settingIcon from "@/assets/setting-icon.png";
import profileIcon from "@/assets/profile-icon.png";
import walletIcon from "@/assets/wallet-icon.png";
import { Link } from "react-router-dom";

const sidebarLinks = [
  { icon: chartIcon, to: "#", title: "Dashboard" },
  {
    icon: buyIcon,
    to: "#",
    title: "Food Order",
  },
  {
    icon: documentIcon,
    to: "#",
    title: "Manage Menu",
  },
  {
    icon: chatIcon,
    to: "#",
    title: "Customer Review",
  },
  {
    icon: settingIcon,
    to: "#",
    title: "Settings",
  },
  {
    icon: walletIcon,
    to: "#",
    title: "Payment",
  },
  {
    icon: profileIcon,
    to: "#",
    title: "Accounts",
  },
  {
    icon: infoIcon,
    to: "#",
    title: "Help",
  },
];

export default function Sidebar() {
  return (
    <aside className="bg-[#F1F2F7] w-60 shrink-0">
      <div className="h-[--navbar-height] flex items-center pl-10 border-b border-b-[#C8CBD9]">
        <img src={Logo} />
      </div>

      <div className="text-[#273240] mt-10">
        <div className="text-[#082431] text-xs ml-10 mb-3">MENU</div>

        <ul>
          {sidebarLinks.slice(0, 4).map(({ icon, title, to }) => (
            <li key={title}>
              <Link
                to={to}
                className="flex text-sm gap-x-3 items-center rounded-md mx-5 px-5 py-3 hover:bg-[#707FDD] hover:bg-opacity-10 hover:text-[#5A6ACF]"
              >
                <img src={icon} alt="" className="size-5" />
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-[#082431] text-xs ml-10 mt-10 mb-3">OTHERS</div>

        <ul>
          {sidebarLinks.slice(4).map(({ icon, title, to }) => (
            <li key={title}>
              <Link
                to={to}
                className="flex text-sm gap-x-3 items-center rounded-md mx-5 px-5 py-3 hover:bg-[#707FDD] hover:bg-opacity-10 hover:text-[#5A6ACF]"
              >
                <img src={icon} alt="" className="size-5" />
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
