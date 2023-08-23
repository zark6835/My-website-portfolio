import { useRef } from "react";

const useScrollRef = () => {
  const helloRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactsRef = useRef(null);

  const clickScroll = (event) => {
    if (event.target.id === "hello") {
      helloRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (event.target.id === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (event.target.id === "projects") {
      projectRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (event.target.id === "contact") {
      contactsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { helloRef, aboutRef, projectRef, contactsRef, clickScroll };
};

export default useScrollRef;
