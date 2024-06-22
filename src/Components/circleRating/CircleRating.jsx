import React from 'react';
import './style.scss';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function CircleRating({rating}) {
  return (
    <div className='circleRating'>
      <CircularProgressbar 
      value={rating}
       maxValue={10}
       text={rating}
       styles={buildStyles({
        pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green"
       })}
      />
    </div>
  )
}

export default CircleRating
