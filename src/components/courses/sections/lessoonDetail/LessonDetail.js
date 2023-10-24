import React from 'react';
import { Link } from 'react-router-dom';

const LessonDetail = ({ lesson }) => {
  return (
    <div>
      <h2>Lesson Details</h2>
      <h3>Title: {lesson.title}</h3>
      <h4>Teacher: {lesson.teacher}</h4>
      <p>Description: {lesson.description}</p>
      <Link to="/">Back to Lessons</Link>
    </div>
  );
};

export default LessonDetail;
