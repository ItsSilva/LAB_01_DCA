Designing with Algorithms | Laboratory Week 2
Node.js - Modules

Creating a Student Management System with Modules in Node.js

Description:

In this lab, individual students will develop a small system to manage students using modules in Node.js. The goal is for students to practice creating and using modules, as well as manipulating data (filtering, mapping, etc.).

Requirements:

Create a Node.js project using npm init to initialize the project.
Write clean code, with good naming of elements (components, variables, classes, etc.), clear and appropriate algorithms.

Create the data module: Create a students.js module that exports an array of objects. Each object represents a student with the following properties: id, name, age, grade (grade from 0 to 100) and course.

Create utility modules: Create a utils.js module that exports various functions to manipulate and query student data.

		Within these functions you must:
Sort students by name in ascending alphabetical order.
Filter students who have a grade greater than 80 and then order them from highest to lowest grade.
Calculate the average grade of all students.
Organize students into an object based on their course.

Create a module that uses the data from students.js to manipulate the DOM, dynamically creating HTML elements that allow displaying student information (id, name, age, grade, course) in the form of letters / cards in the file major. 
Create the index.js file: Import and use the modules to organize students by course and insert the content into the app DOM element for display.

Make correct use of the file system.