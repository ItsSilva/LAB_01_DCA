import students from "../data/students.js";

export const orderByName = (students) => {
    let order = students.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else {
            return 1;
        }
    });
    return order;
};
console.log(orderByName(students));