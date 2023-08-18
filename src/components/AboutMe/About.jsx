import "./about-style.scss";

import photo from "../../assets/img/About-me-photo.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about__wrapper container__section">
        <img className="about__photo" src={photo} alt="" />
        <div className="about__content">
          <h2 className="about__content-title">About Me</h2>
          <p className="about__content-paragraph">
            I am a novice Ukrainian developer. My journey began in November 2022
            with the choice of a programming language. After watching a bunch of
            YouTube videos, I decided to start with Python and after making a
            few programs (i.e. a calculator😅), I didn't like it and gave up for
            a few months. After russia's full-scale invasion of my country, I
            was forced to move from Kyiv to my grandmother's house in the
            countryside. It was there that I started my journey in web
            development. A few months after the temporary move, I got bored and
            decided to return to studying programming, but this time I decided
            to study front-end development. After watching webinars on HTML and
            CSS on YouTube, and a couple of written mockups, I enrolled in the
            Foxminded: Mentoring Curse - Front End Developer course: React,
            where I learned JS and React. Now I'm looking for a job.
          </p>
          <ul className="about__content-list">
            <li className="about__content-list_item about__content-list_item--active">
              Skils
            </li>
            <li className="about__content-list_item">Education</li>
          </ul>
          <ul className="about__content-skils_list about__content-list--active">
            <li className="about__content-skils_list_item">
              <p className="about__content-skils_list_item__subtitle">
                Html, Scss
              </p>
              <ul className="about__content-skils_list_item__paragraph">
                <li>Flex, Grid, Responsive layout, Semantic Tags, BEM.</li>
              </ul>
            </li>
            <li className="about__content-skils_list_item">
              <p className="about__content-skils_list_item__subtitle">
                Java Script(ES5, ES6)
              </p>
              <ul>
                <li className="about__content-skils_list_item__paragraph">
                  DOM, Rest Api, Fetch, AJAX, JSON and HTTP, Asynchronous.
                </li>
              </ul>
            </li>
            <li className="about__content-skils_list_item">
              <p className="about__content-skils_list_item__subtitle">
                React + Redax
              </p>
              <ul>
                <li className="about__content-skils_list_item__paragraph">
                  JSX, React Hooks, Routing, Context, Formik, React Slick.
                </li>
              </ul>
            </li>
            <li className="about__content-skils_list_item">
              <p className="about__content-skils_list_item__subtitle">
                Task Manager
              </p>
              <ul className="about__content-skils_list_item__paragraph">
                <li>Webpack, Gulp</li>
              </ul>
            </li>
          </ul>
          <ul className="about__content-education_list">
            <li className="about__content-education_list_item">
                
              <a
                className="about__content-education_list_item__link"
                href="https://foxminded.ua/front-end-1/"
              >
                May 2023 - Foxminded: Mentoring Curse - Front End Developer course
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
