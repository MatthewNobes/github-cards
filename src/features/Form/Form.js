import axios from "axios";
import React, { useState } from "react";

export const Form = (props) => {
  const [userName, setUserName] = useState("");
  const onSubmit = props.onSubmit;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      onSubmit(response.data);
      setUserName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        placeholder="GitHub Username please"
        required
      />
      <button>Add Card</button>
    </form>
  );
};
