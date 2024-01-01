import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to 	learn?", {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "SciAstra Education Private Limited is an educational platform that was established in March 2021. Originating from a hostel room and a small YouTube channel, SciAstra has rapidly grown and now boasts a team of over 60 mentors from prestigious research institutes globally, including Harvard, Oxford, Max Planck, IISc, and IISERs, among others.",

            id: 1,
          },
          
        ],
        
        
      },
    },
    {
      widgetName: "Links",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
    
          {
            text: "SciAstra has over 60 mentors from premier research institutes around the world, including Harvard, Oxford, Max Planck, IISc, IISERs, and others.",
            id: 2,
          },
        
        ],
      },
    }
  ],
  botName: "LearningBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
