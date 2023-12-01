import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import logo from "../../assets/Logo2.png";

const Header = () => {
  return (
    <div className=" top-0 left-0 right-0 bg-gradient-to-r from-[#3BA29B] to-[#E4FDE5] mx-auto pt-[2rem] pb-[1rem] px-5 lg:px-20 w-[100vw] ">
      <nav className="container flex items-center justify-between py-1 lg:py-5">
        <div className="text-lg">
          <img
            className="logo lg:w-[80px] h-[36px] max-w-none"
            src={logo}
            alt="logo"
          />
        </div>
        <NavMobile />
        <NavDesktop />
        <button
          className="custom__button hover:bg-gradient-to-r from-[#68baaf] to-[#95bbb2] mr-12"
          style={{ flex: "0 0 auto", minWidth: "100px" }}
          type="submit"
        >
          Notify Me
        </button>
      </nav>
    </div>
  );
};

export default Header;
