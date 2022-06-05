import React from "react";
import { useState } from "react";
import Form from "../Form";
import CardList from "../CardList";

export const CardsPage = (props) => {
  const title = props.title;
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profileData) => {
    setProfiles((profiles) => [...profiles, profileData]);
  };

  return (
    <div>
      <div className="header">{title}</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
};
