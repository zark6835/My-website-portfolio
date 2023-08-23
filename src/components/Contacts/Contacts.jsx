import FeedbackForm from "../../helpers/Form/FeedbackForm";

import "./contacts-style.scss";

import briefcase from "../../assets/img/content/contacts/briefcase.svg";
import bell from "../../assets/img/content/contacts/bell.svg";
import mail from "../../assets/img/content/contacts/mail.svg";
import linkedin from "../../assets/img/content/contacts/linkedin.svg";
import github from "../../assets/img/content/contacts/github.svg";
import gitlab from "../../assets/img/content/contacts/gitlab.svg";
import terminal from "../../assets/img/content/contacts/terminal.svg";

import sv from "../../assets/PDF/sv.pdf"
import { forwardRef } from "react";

const Contacts = (props) => {
  return (
    <aside className="contacts" ref={props.contactsRef}>
      <div className="contacts__wrapper container__section">
        <div className="contacts__infotmation">
          <h2 className="contacts__infotmation-title">Contact me</h2>
          <ul className="contacts__infotmation-list">
            <li className="contacts__infotmation-list_item">
              <img
                className="contacts__infotmation-list_item__img"
                src={briefcase}
                alt=""
              />
              <p className="contacts__infotmation-list_item__text">
                Ukraine, Kiyv
              </p>
            </li>
            <li className="contacts__infotmation-list_item">
              <img
                className="contacts__infotmation-list_item__img"
                src={bell}
                alt=""
              />
              <a
                className="contacts__infotmation-list_item__text"
                href="tel:+380683586897"
              >
                +38(068)-358-68-97
              </a>
            </li>
            <li className="contacts__infotmation-list_item">
              <img
                className="contacts__infotmation-list_item__img"
                src={mail}
                alt=""
              />
              <a
                className="contacts__infotmation-list_item__text"
                href="mailto:myroslav.baibarza@gmail.com"
              >
                myroslav.baibarza@gmail.com
              </a>
            </li>
            <li className="contacts__infotmation-list_item">
              <img
                className="contacts__infotmation-list_item__img"
                src={linkedin}
                alt=""
              />
              <a
                className="contacts__infotmation-list_item__text"
                href="https://www.linkedin.com/in/myroslav-baibarza-400745275/"
              >
                Linkedin
              </a>
            </li>
            <li className="contacts__infotmation-list_item">
              <img
                className="contacts__infotmation-list_item__img"
                src={github}
                alt=""
              />
              <a
                className="contacts__infotmation-list_item__text"
                href="https://github.com/zark6835"
              >
                Github
              </a>
            </li>
            <li className="contacts__infotmation-list_item">
              <img
                className="contacts__infotmation-list_item__img"
                src={gitlab}
                alt=""
              />
              <a
                className="contacts__infotmation-list_item__text"
                href="https://gitlab.com/tutuk6835"
              >
                Gitlab
              </a>
            </li>
            <li className="contacts__infotmation-list_item">
              <img
                className="contacts__infotmation-list_item__img"
                src={terminal}
                alt=""
              />
              <a
                className="contacts__infotmation-list_item__text"
                href="https://www.codewars.com/users/zark6666"
              >
                Codewars
              </a>
            </li>
            <li className="contacts__infotmation-list_item">
              <a href={sv} download='sv-Myroslav' className="contacts__infotmation-list_item__button">
                Download SV
              </a>
            </li>
          </ul>
        </div>
          <FeedbackForm />
      </div>
    </aside>
  );
};

export default forwardRef(Contacts);
