import React, { useState } from "react";

import './form.css'

const Form = props => {
  const [member, setMember] = useState({
    name: "",
    role: "",
    email: ""
  });

  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...member,
      id: Date.now()
    };

    props.addNewPerson(newMember);
    setMember({ name: "", role: "", email: "" });
  };

  return (
    <div className="input-area">
    <form onSubmit={submitForm}>
      <h1>Add a new team member below: </h1>


      <label htmlFor="name">Name: </label>

      <input className="input-tab"
        type="text"
        name="name"
        onChange={changeHandler}
        value={member.name}
      />

      <label htmlFor="email">Email: </label>

      <input className="input-tab"
        type="text"
        name="email"
        onChange={changeHandler}
        value={member.email}
      />


      <label htmlFor="role">Role: </label>

      <input className="input-tab"
        type="text"
        name="role"
        onChange={changeHandler}
        value={member.role}
      />



      <button className="btn-submit" type="submit">Add Person!</button>
    </form>
    </div>
  );
};

export default Form;
