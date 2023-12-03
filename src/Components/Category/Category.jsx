import React, { useState, useEffect } from "react";
import CategoryLeft from "./CategoryLeft/CategoryLeft";
import CategoryRight from "./CategoryRight/CategoryCard";
import style from "./Category.module.css";

function Category({ data, onNextPage }) {
  const [titleArray, setTitleArray] = useState([]);
  const minSelectedTitles = 3;
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(
      titleArray.length <= minSelectedTitles && titleArray.length > 0
    );
  }, [titleArray, minSelectedTitles]);

  function handleSelectCard(title) {
    const isTitleSelected = titleArray.includes(title);

    if (isTitleSelected) {
      setTitleArray((prev) => prev.filter((item) => item !== title));
    } else {
      const temp = data.find((item) => item.title === title);
      setTitleArray((prev) => [...prev, temp.title]);
    }

    setShowError(false);
  }

  const handleNextPage = () => {
    if (titleArray.length <= minSelectedTitles) {
      setShowError(true);
    } else {
      localStorage.setItem("selectedTitles", JSON.stringify(titleArray));
      onNextPage("/");
    }
  };

  return (
    <>
      <div className={style.category}>
        <CategoryLeft
          titleArray={titleArray}
          setTitleArray={setTitleArray}
          minSelectedTitles={minSelectedTitles}
          showError={showError}
        />
        <div className={style.rightContainer}>
          {data.map((item) => (
            <CategoryRight
              onSelect={handleSelectCard}
              key={item.title}
              title={item.title}
              imageUrl={require(`../Assets/${item.imageUrl}`)}
              backgroundColor={item.backgroundColor}
              isSelected={titleArray.includes(item.title)}
            />
          ))}
        </div>
      </div>
      <button
        type="submit"
        className={style.categorynextbutton}
        onClick={handleNextPage}
      >
        Next Page
      </button>
    </>
  );
}

export default Category;
