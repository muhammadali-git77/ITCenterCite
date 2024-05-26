import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import ITC_logo from "../assets/ITC_logo1.png";
import ITC_logoHover from "../assets/itclogo112.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import clsx from "clsx";
import { GiRotaryPhone } from "react-icons/gi";

const header_items = [
  {
    title: "Bosh sahifa",
    url: "/",
  },
  {
    title: "Biz haqimizda",
    url: "/about",
  },
  {
    title: "Xodimlar",
    url: "/staff",
  },
];
function NavbarMobile(params) {
  const [active, setActive] = useState("/"); // Boshlang'ich holati

  useEffect(() => {
    // Brauzer URL'sini tekshiramiz
    const path = window.location.pathname;

    // Har bir sahifa uchun mos keladigan linkni tanlash
    if (path === "/about" || path === "/staff" || path === "/") {
      setActive(path);
    }
  }, []);
const location = useLocation();

useEffect(() => {
  // Har safar location o'zgarganda, gamburger menyuni yopish
  document.getElementById("my-drawer").checked = false;
}, [location]);

  return (
    <div className="drawer lg:hidden flex z-30">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="bg-transparent h-11 w-12 rounded-md flex items-center justify-center drawer-button"
        >
          <GiHamburgerMenu size={38} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="flex justify-end py-2 ">
            <label
              htmlFor="my-drawer"
              className="btn rounded-lg transition-all duration-500"
            >
              <IoClose size={28} />
            </label>
          </div>
          <div className="mt-5 gap-4 flex-col flex">
            {header_items.map(({ url, title }) => (
              <div key={url} className="w-full h-[45px] relative">
                <label
                  htmlFor="my-drawer"
                  className={clsx(
                    "w-full h-full cursor-pointer absolute top-0 left-0 flex items-center justify-center text-xl font-[600] rounded-lg transition-all duration-300",
                    {
                      BgGreen: active === url,
                      "bg-gray-900": active !== url,
                    }
                  )}
                  onClick={() => setActive(url)}
                >
                  <Link
                    className="w-full h-full flex items-center justify-center"
                    to={url}
                  >
                    {title}
                  </Link>
                </label>
              </div>
            ))}
            <Link
              className="text-white bg-gray-900 w-full h-[45px] rounded-lg justify-center flex items-center text-xl font-[600]"
              target="_blank"
              to={
                "https://www.google.com/maps/place/Beshariq+IT+CENTER+(Powered+by+IT+Park)/@40.4365047,70.6079505,75m/data=!3m1!1e3!4m15!1m8!3m7!1s0x38ba837e048c36ff:0x81108604fd710bc!2sBeshariq+tumani,+Farg'ona+Viloyati,+O%60zbekiston!3b1!8m2!3d40.4529596!4d70.5740886!16s%2Fm%2F012mzb4_!3m5!1s0x38ba9b043b856e75:0x95c5af26c798a0c4!8m2!3d40.4363952!4d70.6081471!16s%2Fg%2F11rtpks__z?entry=ttu"
              }
            >
              Joylashuv
            </Link>

            <Link
              to="tel:+998998375214"
              className="btn glass m-1 rounded-md text-xl w-full "
            >
              <h1 className="flex gap-2 items-center">
                <GiRotaryPhone size={29} /> Bizning kontakt
              </h1>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export const useSetActive = () => {
  const [active, setActive] = useState("/"); // Boshlang'ich holati

  useEffect(() => {
    // Brauzer URL'sini tekshiramiz
    const path = window.location.pathname;

    // Har bir sahifa uchun mos keladigan linkni tanlash
    if (path === "/about" || path === "/staff" || path === "/") {
      setActive(path);
    }
  }, []);

  return [active, setActive];
};

export default function Header() {
  const headerRef = useRef();

  useEffect(() => {
    // Define the scroll event handler function
    function handleScroll(event) {
      const { scrollY } = window;
      scrollY > 10
        ? headerRef.current?.classList.add("active")
        : headerRef.current?.classList.remove("active");
    }

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [active, setActive] = useSetActive("/"); // Boshlang'ich holati

  return (
    <header id="headerID" ref={headerRef} className="fixed z-20 w-full">
      <div className="container justify-between flex py-1">
        <nav className="flex items-center gap-6 lg:gap-5  transition-all duration-[1.2s]">
          <div className="flex items-center ">
            <Link
              to={"/"}
              onClick={() => setActive("/")}
              className="items-center lg:ml-5 flex Itc_logo_hover_div "
            >
              <img
                src={ITC_logo}
                alt=""
                className="Itc_logo_active w-[60px] z-20"
              />
              <img
                src={ITC_logoHover}
                alt=""
                className="Itc_logo_hover m-0 w-auto h-[17px] sm:h-[25px] "
              />
            </Link>
          </div>
          <ul className="gap-4 hidden  lg:flex">
            {header_items.map(({ url, title }) => (
              <Link to={url} key={url} onClick={() => setActive(url)}>
                <label
                  className={clsx(
                    "transition-all  duration-300 !bg-transparent hover:text-green-600 cursor-pointer",
                    {
                      "ColorGreen hover:text-green-700": active === url,
                      "text-white": active !== url,
                    }
                  )}
                >
                  {title}
                </label>
              </Link>
            ))}
            <Link
              className="hover:text-green-500 transition-all duration-300 flex items-center gap-1"
              target="_blank"
              to={
                "https://www.google.com/maps/place/Beshariq+IT+CENTER+(Powered+by+IT+Park)/@40.4365047,70.6079505,75m/data=!3m1!1e3!4m15!1m8!3m7!1s0x38ba837e048c36ff:0x81108604fd710bc!2sBeshariq+tumani,+Farg'ona+Viloyati,+O%60zbekiston!3b1!8m2!3d40.4529596!4d70.5740886!16s%2Fm%2F012mzb4_!3m5!1s0x38ba9b043b856e75:0x95c5af26c798a0c4!8m2!3d40.4363952!4d70.6081471!16s%2Fg%2F11rtpks__z?entry=ttu"
              }
            >
              Joylashuv
              <FaMapMarkerAlt />
            </Link>
          </ul>
        </nav>
        <div className="items-center flex">
          <NavbarMobile />
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="tel:+998998375214"
              className="btn glass m-1 Durations rounded-md text-sm sm:text-md md:text-xl w-[60px] md:w-[130px]"
            >
              <h1 className="flex gap-2 items-center">
                <GiRotaryPhone size={29} /> Kontakt
              </h1>
            </Link>
            <Link
              onClick={() => setActive("/about")}
              to={"/about"}
              className="btn BgGreen Durations rounded-md w-[60px] md:w-[130px]"
            >
              <h1 className="btn Durations hover:glass bg-transparent rounded-md text-sm sm:text-md md:text-xl w-[60px] md:w-[130px]">
                About us
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
