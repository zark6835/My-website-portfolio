import projectData from "../../data/project-data";

import "./project-style.scss";


const Project = (props) => {
  return (
    <section className="project" ref={props.projectRef}>
      <h2 className="project__title">Project</h2>
      <ul className="project__list container">
        {projectData.map((item) => (
          <li className="project__list-item" key={item.id}>
            <img className="project__list-item_photo" src={item.img} alt="" />
            <div className="project__list-item_information">
              <div className="project__list-item_information__wrapper">
              <a className="project__list-item_information__title" href={item.link}>
                {item.name}
              </a>
                <div className="project__list-item_information__wrapper-content">
                  <h3 className="project__list-item_information__wrapper-content_title">
                    About The Project
                  </h3>
                  <p className="project__list-item_information__wrapper-content_paragraph">
                    {item.about}
                  </p>
                </div>
                <div className="project__list-item_information__wrapper-content">
                  <h3 className="project__list-item_information__wrapper-content_title">
                    Technologies
                  </h3>
                  <p className="project__list-item_information__wrapper-content_paragraph">
                    {item.technologies}
                  </p>
                </div>
              </div>
              <a className="project__list-item_information__link" href={item.linkRepository}>Repository</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
