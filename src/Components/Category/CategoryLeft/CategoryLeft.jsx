import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import style from "./CategoryLeft.module.css";

function CategoryLeft({
  titleArray,
  setTitleArray,
  minSelectedTitles,
  showError,
}) {
  const [hiddenButtons, setHiddenButtons] = useState([]);

  const handleIconClick = (index) => {
    const newHiddenButtons = [...hiddenButtons];
    newHiddenButtons[index] = !newHiddenButtons[index];
    setHiddenButtons(newHiddenButtons);
  };

  const handleButtonClick = (index, title) => {
    const newHiddenButtons = [...hiddenButtons];
    newHiddenButtons[index] = !newHiddenButtons[index];
    setHiddenButtons(newHiddenButtons);

    if (titleArray.includes(title)) {
      setTitleArray((prev) => prev.filter((item) => item !== title));
    } else {
      setTitleArray((prev) => [...prev, title]);
    }
  };

  return (
    <div className={style.categoryleft}>
      <h2>Super app</h2>
      <h3>Choose your entertainment category</h3>
      <div className={style.leftbuttoncontainer}>
        {titleArray &&
          titleArray.map((title, index) => (
            <button
              key={index}
              className={`${style.button} ${hiddenButtons[index]}`}
              onClick={() => handleButtonClick(index, title)}
            >
              {title}
              <MdClose
                className={style.icon}
                onClick={() => handleIconClick(index)}
              />
            </button>
          ))}
      </div>
      <div className={style.error}>
        {showError && (
          <p >
            <IoIosWarning style={{ marginRight: '5px', fontSize: '25px'}} />
            Minimum {minSelectedTitles} category required
          </p>
        )} 
      </div>
    </div>
  );
}

export default CategoryLeft;
