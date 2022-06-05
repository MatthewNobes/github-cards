import React from "react";

export const Card = (props) => {
  const profile = props.profile;

  return (
    <div className="github-profile">
      <img alt={profile.name} src={profile.avatar_url} />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
};
