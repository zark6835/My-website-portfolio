import Hello from "../components/Hello/Hello.jsx";
import AboutMe from "../components/AboutMe/About.jsx";
import Project from "../components/Project/Project";
import Contacts from "../components/Contacts/Contacts.jsx";

const IndexPage = () => {
  return (
    <>
      <Hello />
      <AboutMe />
      <Project />
      <Contacts />
    </>
  );
};

export default IndexPage;
