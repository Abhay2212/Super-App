import React from "react";
import style from "./UserData.module.css";
import UserImg from "../../Assets/userimg.png";

function UserData() {
  const storedData = localStorage.getItem("user");
  const storedCategoryData = localStorage.getItem("selectedTitles");

  if (storedData) {
    const retrievedData = JSON.parse(storedData);
    const { name, email, username } = retrievedData;
    if (!storedData) {
      return (
        <div className={style.userdatacontainer}>
          <p>No user data found in local storage</p>
        </div>
      );
    }
    try {
      if (storedCategoryData) {
        const retrievedCategoryData = JSON.parse(storedCategoryData);
        
        return (
          <div className={style.userdatacontainer}>
            <div className={style.userimage}>
              <img src={UserImg} alt="user-img" />
            </div>
            <div className={style.userdata}>
              <div className={style.userinfo}>
                <p className={style.name_email}>{name}</p>
                <p className={style.name_email}>{email}</p>
                <p className={style.username}>{username}</p>
              </div>
              {Array.isArray(retrievedCategoryData) && (
                <div className={style.usercategoryinfo}>
                  {retrievedCategoryData.map((category, index) => (
                    <button key={index}>{category}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      }
    } catch (error) {
      return (
        <div className={style.userdatacontainer}>
          <p>Error parsing category data</p>
        </div>
      );
    }
    return (
      <div className={style.userdatacontainer}>
        <p>No category data found in local storage</p>
      </div>
    );
  }
}

export default UserData;
