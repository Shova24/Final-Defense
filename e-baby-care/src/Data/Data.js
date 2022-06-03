// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../img/Admin/img1.png";
import img2 from "../img/Admin/img2.png";
import img3 from "../img/Admin/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    url: "/dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Appointments",
    url: "/appointmentlist",
  },
  {
    icon: UilUsersAlt,
    heading: "Parents",
    url: "/parentlist",
  },
  {
    icon: UilUsersAlt,
    heading: "BabySitters",
    url: "/babysitterlist",
  },
  {
    icon: UilPackage,
    heading: "Reviews",
    url: "/reviewlist",
  },
  {
    icon: UilChart,
    heading: "Analytics",
    url: "/analytics",
  },
];

// ParentSidebar Data
export const ParentSidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    url: "/parenthome",
  },

  {
    icon: UilSignOutAlt,
    heading: "Homepage",
    url: "/",
  },
  {
    icon: UilPackage,
    heading: "Review",
    url: "/parentreview",
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
