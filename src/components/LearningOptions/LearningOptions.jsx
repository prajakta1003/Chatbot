import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "About SciAstra",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    {
      text: "How many mentors does SciAstra have",
      handler: props.actionProvider.handleMentors,
      id: 2,
    },
    {
      text: "What is the focus of SciAstra's education philosophy?",
      handler: props.actionProvider.handleFocus,
      id: 3,
    },
    
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
