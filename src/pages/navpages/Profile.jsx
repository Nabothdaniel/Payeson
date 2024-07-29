import React from "react";
import LoginRight from "../../components/login/LoginRight";
import ProfileTop from "../../components/profile/ProfileTop";
import ProfileForm from "../../components/profile/ProfileForm";


function Profile() {
  return (
    <div className="mx-5 md:mx-20 xl:mx-96">
      <LoginRight title="Profile" path="/dashboard" />
      <ProfileTop/>
      <ProfileForm/>
    </div>
  );
}

export default Profile;
