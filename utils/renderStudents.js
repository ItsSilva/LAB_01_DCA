export const renderStudents = (id, name, age, grade, course) => {

    const studentsContainer = document.createElement('figure');
    studentsContainer.classList.add('student-info');

    const h1 = document.createElement('h1');
    const h3StudentsInfo = document.createElement('h3');
    const ul = document.createElement('ul');

    h1.textContent = name;
    h3StudentsInfo.textContent = 'Student Info: ';

    const liId = document.createElement('li');
    liId.textContent = `ID: ${id}`;
    ul.appendChild(liId);

    const liAge = document.createElement('li');
    liAge.textContent = `Age: ${age}`;
    ul.appendChild(liAge);

    const liGrade = document.createElement('li');
    liGrade.textContent = `Grade: ${grade}`;
    ul.appendChild(liGrade);

    const liCourse = document.createElement('li');
    liCourse.textContent = `Course: ${course}`;
    ul.appendChild(liCourse);

    studentsContainer.appendChild(h1);
    studentsContainer.appendChild(h3StudentsInfo);
    studentsContainer.appendChild(ul);

    return studentsContainer;
};
