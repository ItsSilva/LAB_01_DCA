export const renderStudents = (id, name, age, grade, course) => {
    const studentsContainer = document.createElement('div');
    studentsContainer.classList.add('student-card');

    const nameElement = document.createElement('h3');
    nameElement.textContent = name;

    const infoList = document.createElement('ul');
    
    const infoItems = [
        { label: 'ID', value: id },
        { label: 'Age', value: age },
        { label: 'Grade', value: grade },
        { label: 'Course', value: course }
    ];

    infoItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.label}: ${item.value}`;
        infoList.appendChild(li);
    });

    studentsContainer.appendChild(nameElement);
    studentsContainer.appendChild(infoList);

    return studentsContainer;
};