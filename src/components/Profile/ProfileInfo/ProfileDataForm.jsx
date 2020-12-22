import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile}) => {
  return (
    <form>
      <div>
        <button className={`btn btn-primary`} onClick={()=>{}}>Save</button>
      </div>
      <div>
        <b>Имя:</b> {createField(Input, "", "Имя", [])}
      </div>
      <div>
        <b>Facebook:</b> {profile.contacts.facebook}
      </div>
      <div>
        <b>В поиске работы:</b> {profile.lookingForAJob ? "Да" : "Нет"}
      </div>
      <div>
        <b>Скиллы:</b> {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Обо мне:</b> {profile.aboutMe}
      </div>
    </form>
  )
}

const ProfileDataReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataReduxForm