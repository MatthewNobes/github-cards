import Card from "./Card";

export const CardList = (props) => {
  const profiles = props.profiles;
  return (
    <div>
      {profiles.map((profile) => (
        <Card profile={profile} />
      ))}
    </div>
  );
};
