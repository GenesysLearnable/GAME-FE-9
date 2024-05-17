import React from "react";
import { ReactSimpleChatbot } from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

function Chatmodal() {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to AYO Game chat support",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi! {previouseValue}, how can we help you?",
      trigger: "issues",
    },
    {
      id: "issues",
      message:
        "Thank you for sharing your issues, our team will respond to it as soon as possible.",
      end: true,
    },
  ];
  return (
    <div>
      <Segment floated="right">
        <ReactSimpleChatbot steps={steps} />
      </Segment>
    </div>
  );
}

export default Chatmodal;
