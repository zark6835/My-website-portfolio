
import Hello from "../components/Hello/Hello.jsx";
import AboutMe from "../components/AboutMe/About.jsx";
import Project from "../components/Project/Project";
import Contacts from "../components/Contacts/Contacts.jsx";

const IndexPage = (props) => {
  return (
    <>
      <Hello helloRef={props.helloRef}/>
      <AboutMe aboutRef={props.aboutRef}/>
      <Project projectRef={props.projectRef}/>
      <Contacts contactsRef={props.contactsRef}/>
    </>
  );
};

export default IndexPage;
