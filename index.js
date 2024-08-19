import students from "./data/students.js";
import { renderStudents } from "./utils/renderStudents.js";
import { calculateMeanGrade } from "./utils/calculateMeanGrade.js";
import { organizeByCourse } from "./utils/organizeByCourse.js";
import { filterHighGrade } from "./utils/filterHighGrade.js";
import { orderByName } from "./utils/orderByName.js";

const container = document.querySelector('.student-container');

const title = document.createElement('h1');
title.textContent = "Students list";
container.appendChild(title);
const orderedStudents = orderByName(students);

const studentList = document.createElement('ul');
orderedStudents.forEach(student => {
    const li = document.createElement('li');
    li.textContent = `${student.name} (ID: ${student.id})`;
    studentList.appendChild(li);
});
container.appendChild(studentList);
const meanGrade = calculateMeanGrade(students);

const studentsByCourse = organizeByCourse(students);

Object.keys(studentsByCourse).forEach(course => {
    const courseStudents = studentsByCourse[course];

    const sortedStudents = filterHighGrade(courseStudents);

    sortedStudents.forEach(student => {
        const { id, name, age, grade } = student;
        const studentElement = renderStudents(id, name, age, grade, course);
        container.appendChild(studentElement);
    });
});


const meanElement = document.createElement('h2');
meanElement.textContent = `Average Grade: ${meanGrade}`;
container.appendChild(meanElement);
