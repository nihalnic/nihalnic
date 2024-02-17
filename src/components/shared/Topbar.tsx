import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../constans";

const TopBar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickLink = () => {
      setMenuOpen(false); // Close the menu when a link is clicked
    };

    // Listen to route changes
    return () => {
      document.removeEventListener("click", handleClickLink);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickLink = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="topbar">
      <div className="flex-between">
        <>
          <Link to="/" className="flex-center gap-2">
            <div>
              <h1 className="text-[26px] leading-[140%] tracking-tighter font-semibold">
                thenihal
                <span className=" w-2 h-2 rounded-full inline-block bg-teal-500 ml-[2px]"></span>
              </h1>
            </div>
          </Link>
        </>
        <div className="open-menu" onClick={toggleMenu}>
          <img src="/assets/icons/menu.svg" width={28} alt="" />
        </div>
      </div>
      <div
        className={`open_menu-bg ${
          menuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <button className="open_menu-btn" onClick={toggleMenu}>
          <img src="/assets/icons/close.svg" width={28} alt="close-menu" />
        </button>

        <ul className="menubar">
          {sidebarLinks.map((link, index) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive ? "bg-zinc-900" : ""
                }`}
              >
                <NavLink
                  to={link.route}
                  target={
                    index === sidebarLinks.length - 1 ? "_blank" : "_self"
                  }
                  rel={
                    index === sidebarLinks.length - 1
                      ? "noopener noreferrer"
                      : ""
                  }
                  className="flex gap-4 items-center p-4"
                  onClick={handleClickLink}
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    width={27}
                    className={`group-hover:invert-white ${
                      isActive ? "invert-white" : ""
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
