import { Link, NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../constans";

const LeftSideBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="leftsidebar">
      <Link to={"/company"} className="pt-0">
        <img src="/assets/images/company-logo.svg" width={185} alt="" />
      </Link>
      {/* Logo and username */}
      <Link to="/" className="flex items-center gap-2 py-2 ">
        <img
          src="/assets/images/profile.png"
          alt="logo"
          width={50}
          className="rounded-full block"
        />
        <div>
          <h1 className="text-[22px] tracking-tighter font-medium opacity-90">
            Nihal Nic
          </h1>
          <p className="text-zinc-400 tiny-regular">Entrepreneur</p>
        </div>
      </Link>

      {/* Sidebar links */}
      <ul className="flex flex-col gap-6 w-full">
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
                target={index === sidebarLinks.length - 1 ? "_blank" : "_self"}
                rel={
                  index === sidebarLinks.length - 1 ? "noopener noreferrer" : ""
                }
                className="flex gap-4 items-center p-4"
              >
                <img
                  src={link.imgURL}
                  alt={link.label}
                  width={27}
                />
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LeftSideBar;
