import "./contacts-style.scss";

import briefcase from "../../assets/img/content/contacts/briefcase.svg";
import bell from "../../assets/img/content/contacts/bell.svg";
import mail from "../../assets/img/content/contacts/mail.svg";
import linkedin from "../../assets/img/content/contacts/linkedin.svg";
import github from "../../assets/img/content/contacts/github.svg";
import gitlab from "../../assets/img/content/contacts/gitlab.svg";
import terminal from "../../assets/img/content/contacts/terminal.svg";

const Contacts = () => {
  return (
    <aside className="contacts">
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
            <button className="contacts__infotmation-list_item__button">
              Download SV
            </button>
          </li>
        </ul>
      </div>
      <form className="contacts__form">
        <div className="contacts__form-box">
          <label className="contacts__form-box_label">Username</label>
          <input className="contacts__form-box_input" type="text" name="" required="" />
        </div>
        <div className="contacts__form-box">
          <label className="contacts__form-box_label">Email</label>
          <input className="contacts__form-box_input" type="email" name="" required="" />
        </div>
        <div className="contacts__form-box_message">
          <label className="contacts__form-box_label">Message</label>
          <textarea className="contacts__form-box_message__input" rows="10" cols="50" name="" required="">          </textarea>
        </div>
        <center>
          <button className="contacts__form-button" type="submit">
            SEND
          </button>
        </center>
      </form>
      </div>
    </aside>
  );
};

export default Contacts;