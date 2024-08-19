import students from "./data/students.js";
import {renderStudents} from "./utils/renderStudents.js";
import {filterHighGrade} from "./utils/filterHighGrade.js";
import {calculateMeanGrade} from "./utils/calculateMeanGrade.js";
import {orderByName} from "./utils/orderByName.js";
import {organizeByCourse} from "./utils/organizeByCourse.js";

const container = document.querySelector('.student-container');

students.forEach(student => {
    const { id, name, age, grade, course, calculateMeanGrade } = student;
    const studentElement = renderStudents(id, name, age, grade, course, calculateMeanGrade);
    container.appendChild(studentElement);
});
