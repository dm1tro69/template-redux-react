import React from "react";
import {useSelector} from "react-redux";

const Profile = () => {
    const {profile} = useSelector((store)=> store.profile)
  return (
    <div>
        {!!profile? <h1>{profile.name}</h1>: <h1>Not Data</h1>}
    </div>
  );
};
export default Profile;
