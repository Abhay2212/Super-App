import React from "react";
import style from "./CategoryCard.module.css";

function CategoryCard({ title, imageUrl, backgroundColor, onSelect, isSelected }) {
  const cardStyle = {
    backgroundColor: backgroundColor,
    border: isSelected ? '6px solid #11B800' : 'none' ,
  };
  return (<>
    <div className={style.categoryright} onClick={() => onSelect(title)}>
      <div className={style.categorycardscontainer}>
        <div style={cardStyle} className={style.categorycard}>
          <h2>{title}</h2>
          <img src={imageUrl} alt="img" />
        </div>
      </div>
    </div>
    
     </>
  );
}

export default CategoryCard;
