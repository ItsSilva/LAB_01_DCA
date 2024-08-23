import students from "./data/students.js";
import { renderStudents } from "./utils/renderStudents.js";
import { calculateMeanGrade } from "./utils/calculateMeanGrade.js";
import { organizeByCourse } from "./utils/organizeByCourse.js";
import { filterHighGrade } from "./utils/filterHighGrade.js";
import { orderByName } from "./utils/orderByName.js";

const container = document.querySelector('.student-container');

// 1. Total list of students ordered alphabetically.
const title = document.createElement('h1');
title.textContent = "Complete List of Students";
container.appendChild(title);

const orderedStudents = orderByName(students);
const studentList = document.createElement('ul');
orderedStudents.forEach(student => {
    const li = document.createElement('li');
    li.textContent = `${student.name} (ID: ${student.id})`;
    studentList.appendChild(li);
});
container.appendChild(studentList);

// 2. Student with the highest grade per course.
const highGradeTitle = document.createElement('h1');
highGradeTitle.textContent = "Student with Highest Grade by Course:";
container.appendChild(highGradeTitle);

const studentsByCourse = organizeByCourse(students);
Object.keys(studentsByCourse).forEach(course => {
    const courseStudents = studentsByCourse[course];
    const highestGradeStudent = filterHighGrade(courseStudents)[0];
    
    const courseTitle = document.createElement('h2');
    courseTitle.textContent = course;
    container.appendChild(courseTitle);
    
    const studentInfo = document.createElement('p');
    studentInfo.textContent = `${highestGradeStudent.name}: ${highestGradeStudent.grade}`;
    container.appendChild(studentInfo);
});

// 3. Average of all notes.
const meanGrade = calculateMeanGrade(students);
const meanElement = document.createElement('h2');
meanElement.textContent = `Average Grade of All Students: ${meanGrade}`;
container.appendChild(meanElement);

// 4. Information on all students by course.
const allStudentsTitle = document.createElement('h1');
allStudentsTitle.textContent = "All Students Information by Course:";
container.appendChild(allStudentsTitle);

Object.keys(studentsByCourse).forEach(course => {
    const courseStudents = studentsByCourse[course];
    const sortedStudents = orderByName(courseStudents);
    
    const courseTitle = document.createElement('h2');
    courseTitle.textContent = course;
    container.appendChild(courseTitle);
    
    sortedStudents.forEach(student => {
        const { id, name, age, grade } = student;
        const studentElement = renderStudents(id, name, age, grade, course);
        container.appendChild(studentElement);
    });
});