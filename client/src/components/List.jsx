import React from 'react';
import ListElement from './ListElement.jsx';

const List = ({ students, getStudents }) => (
  <div>
    {students.map((student, index) => (
      <ListElement
        student={student}
        key={index}
        index={index}
        getStudents={getStudents}
      />
    ))}
  </div>
);

export default List;
