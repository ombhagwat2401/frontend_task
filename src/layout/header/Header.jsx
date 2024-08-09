import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import logo from '../../assets/images/logo.png';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { IoClose} from "react-icons/io5";

function Header() {

    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          className="navtab flex items-center gap-x-2 p-1 font-medium text-white opacity-70 hover:opacity-100 focus:opacity-100"
        >
          <a href="#" className="flex items-center">Overview</a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="navtab flex items-center gap-x-2 p-1 font-medium text-white opacity-70 hover:opacity-100 focus:opacity-100"
        >
          <a href="#" className="flex items-center">Courses</a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="navtab flex items-center gap-x-2 p-1 font-medium text-white opacity-70 hover:opacity-100 focus:opacity-100"
        >
          <a href="#" className="flex items-center">Assignments</a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="navtab flex items-center gap-x-2 p-1 font-medium text-white opacity-70 hover:opacity-100 focus:opacity-100"
        >
          <a href="#" className="flex items-center">Classmates</a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="navtab flex items-center gap-x-2 p-1 font-medium text-white opacity-70 hover:opacity-100 focus:opacity-100"
        >
          <a href="#" className="flex items-center">Schedule</a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="navtab active flex items-center gap-x-2 p-1 font-medium text-white opacity-70 hover:opacity-100 focus:opacity-100"
        >
          <a href="#" className="flex items-center">Community</a>
          
        </Typography>
      </ul>
    );

  return (
    <div className="navbar_container">
    <Navbar className="navbar-color w-full border-none shadow-none mx-auto px-4 py-2 lg:px-4 lg:py-4">
      <div className="container shadow-none mx-auto flex items-center justify-between text-white-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 flex cursor-pointer py-1.5 font-medium"
        >
          <div>
          <img src={logo} className="w-[25px] mr-1" alt="logo" />
          </div>
          
          Skillsphere
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-4">
          
        <CiCircleMore className="text-[20px]" />
        <IoIosNotificationsOutline className="text-[20px]" />
        <IoMdHeartEmpty className="text-[20px]" />
        


          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />

        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <IoClose className="text-[20px]"/>
            
          ) : (
            
            <FaBars className="text-[20px]"/>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-2">
          
          </div>
        </div>
      </MobileNav>
    </Navbar>
    </div>
  )
}

export default Header