import React from 'react';
import PropTypes from 'prop-types';

function Food({name,picture,rating}){ 
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
  </div>
  );  
  
}

const foodLike=[
  {
    id:1, //key props
    name: '김치',
    image:'https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg',
    rating:5
  },
  {
    id:2,
    name: '삼겹살',
    image: 'https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304',
    rating:4.9
  },
  {
    id:3,
    name: '비빔밥',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800',
    rating:4.8
  },
  {
    id:4,
    name: '떡볶이',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDJfMTUw/MDAxNTYyMDUwNzMxNTY3.G8aGGcWuX71iGK9Qth93Ok6I25k_89tobuI4nNFsx7Eg.3NBhnUdHyeGF6UmdcmhMmPY3mo0ueUEyfmX3zqFHQW8g.JPEG.heeju001/%EA%B5%AD%EB%AC%BC%EB%96%A1%EB%B3%B6%EC%9D%B4%EB%A7%8C%EB%93%9C%EB%8A%94%EB%B2%95.JPG?type=w800',
    //rating:4.9
  }
];



function App() {
  return(
   <div>
     {foodLike.map(dish=>(<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
   </div>
  )
}

Food.propTypes={
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number
}

export default App;
