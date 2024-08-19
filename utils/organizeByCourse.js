import students from "../data/students.js";

export const organizeByCourse = (students) => {
    let courses = {};
    students.forEach(student => {
        if (!courses[student.course]){
            courses[student.course] = [];
        }
        courses[student.course].push(student);
    });
    return courses;
};
console.log(organizeByCourse(students));