import students from "../data/students.js";

export const calculateMeanGrade = (students) => {
    let total = 0;
    students.forEach(student => {
        total = total + student.grade;
    });
    return total / students.length;
};
console.log(calculateMeanGrade(students));