import students from "../data/students.js";

export const filterHighGrade = (students) => {
    let highGrade = [];
    students.forEach(student => {
        if (student.grade > 80){
            highGrade.push(student);
            highGrade.sort((a, b) => b.grade - a.grade);
        }
    });
    return highGrade;
};
console.log(filterHighGrade(students));