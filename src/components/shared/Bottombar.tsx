import { Link } from "react-router-dom";
import { footerLinks } from "../../constans";


const BottomBar = () => {
  return (
    <div className="bottombar">
      <ul className="flex-center">
        {footerLinks.map((link, index) => (
          <li key={index} className="px-8 ">
            <Link to={link.url} target="_blank">
              <img src={link.img} alt={link.platform} width={20} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar;
