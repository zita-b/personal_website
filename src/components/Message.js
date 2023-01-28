import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import Notification from "./Notification";
import Wrapper from "../wrappers/Message";

const Message = () => {
  const form = useRef();
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const email_id = process.env.REACT_APP_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_PUBLIC_KEY;
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      setType("warning");
      setText("all fields are mandatory");
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setType("warning");
      setText("please provide a valid email address");
    } else if (message.length < 14) {
      setType("warning");
      setText("message too short");
    } else {
      emailjs.sendForm(service_id, email_id, form.current, public_key).then(
        (result) => {
          setType("success");
          setText("message sent");
        },
        (error) => {
          setType("danger");
          setText("something went wrong");
        }
      );
    }
  };

  return (
    <Wrapper>
      <form ref={form} onSubmit={sendEmail} noValidate>
        <div className="message-container">
          <Notification type={type} text={text} ref={alert} />
          <h2>Contact</h2>
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            name="reply_to"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message</label>
          <textarea
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type={"submit"} text={"Send"} value="Send" id="small" />
        </div>
      </form>
    </Wrapper>
  );
};

export default Message;
