import Card from "./Card";

export const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card profile={profile} />
    ))}
  </div>
);
