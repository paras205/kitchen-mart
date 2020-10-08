import React from "react";

import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";

const Form = () => {
  return (
    <div className="contact_form box-shadow">
      <form>
        <Input label="Name" placeholder="Enter your name" />
        <Input type="email" label="Email" placeholder="Enter your email" />
        <Input
          type="number"
          label="Phone No"
          placeholder="Enter your Phone No"
        />
        <Input label="Subject" placeholder="Enter subject" />
        <Textarea label="Message" placeholder="Say something nice..." />
        <Button type="button" label="Send message" className="view_all" />
      </form>
    </div>
  );
};

export default Form;
