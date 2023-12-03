import React from 'react'
import Category from '../../Components/Category/Category'
import { useNavigate } from 'react-router-dom';

function CategoryPage() {
  const navigate = useNavigate(); 

  const categoryCardData = [
    {title: 'Action', imageUrl: 'Action.png', backgroundColor: '#FF5209' },
    {title: 'Drama', imageUrl: 'Drama.png', backgroundColor: '#D7A4FF' },
    {title: 'Romance', imageUrl: 'Romance.png', backgroundColor: '#148A08' },
    {title: 'Thriller', imageUrl: 'Thriller.png', backgroundColor: '#84C2FF' },
    {title: 'Western', imageUrl: 'Western.png', backgroundColor: '#902500' },
    {title: 'Horror', imageUrl: 'Horror.png', backgroundColor: '#7358FF' },
    {title: 'Fantasy', imageUrl:'Fantasy.png', backgroundColor: '#FF4ADE' },
    {title: 'Music', imageUrl: 'Music.png', backgroundColor: '#E61E32' },
    {title: 'Fiction', imageUrl: 'Fiction.png', backgroundColor: '#6CD061' }
  ];

  const categoryredirection = () => {
    navigate('/')
  }


  return (
    <div style={{width: "100vw"}}>
        <Category data={categoryCardData} onNextPage={categoryredirection}/>
    </div>
  )
}

export default CategoryPage