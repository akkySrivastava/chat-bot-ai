import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroller";
import Conversation from "./compoents/Conversation";

function App() {
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);
  const [currentFaqId, setCurrentFaqId] = useState(null);
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: "a1de0ac91cafd302385103fde1e1ac292e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          if (commandData.command === "gotoFaq") {
            scroller.scrollTo(`MuiPaper-${commandData.qId}`, {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            });
            setIndex(commandData.faqId - 1);
            setCurrentFaqId(commandData.faqId);
          } else if (commandData.command === "openMyYoutube") {
            // window.location.href = "https://youtube.com/c/CodeWithAkky";
            window.open("https://youtube.com/c/CodeWithAkky", "_blank");
          } else if (commandData.command === "openSourceCode") {
            // window.location.href =
            //   "https://github.com/akkySrivastava/chat-bot-ai";
            window.open(
              "https://github.com/akkySrivastava/chat-bot-ai",
              "_blank"
            );
          }
        },
      });
    }
  }, []);
  return (
    <div className="App">
      <Conversation />
    </div>
  );
}

export default App;
