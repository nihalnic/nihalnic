import { Link } from "react-router-dom";
import { projects } from "../../data";

const Projects = () => {
  return (
    <div className="common-container">
      <h1 className="page-heading">Total Projects</h1>

      <div className="grids md:mt-16 mt-8">
        {projects.map((project, index) => (
          <Link to={project.url} key={index} target="_blank">
            <li className="grid-card">
              <div className="w-full relative ">
                <img
                  src={project.imgURL}
                  alt={project.name}
                  className="cover-images"
                />
                <div className="image-overlay"></div>
              </div>

              <div className="grid-card_content">
                <div className="flex gap-3 py-2 lg:flex-nowrap flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag-box">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex-between">
                  <h3 className="h3-regular pt-2">{project.name}</h3>
                  <span>
                    <img
                      src="/assets/icons/link.svg"
                      width={18}
                      className="opacity-85"
                      alt="link-icon"
                    />
                  </span>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
