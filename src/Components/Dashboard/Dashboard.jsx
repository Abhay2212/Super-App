import React from "react";
import style from "./Dashboard.module.css";
import UserData from "./UserData-Card/UserData";
import Watch from "./Watch-Card/Watch";
import News from "./News-Card/News";
import Notes from "./Notes-Card/Notes";
import Weather from "./Weather-Card/Weather";

function Dashboard({ onBrowse }) {
  const handleBrowse = () => {
    onBrowse("/movies");
  };

  return (
    <>
      <div className={style.dashboardcontainer}>
        <UserData />
        <Notes />
        <Weather />
        <Watch />
        <News />
      </div>
      <button
        type="submit"
        className={style.dashboardbutton}
        onClick={handleBrowse}>
        Browse
      </button>
    </>
  );
}

export default Dashboard;
