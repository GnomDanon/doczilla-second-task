const baseUrl = "http://localhost:8082/api/student"

$('#addStudentForm').submit(function(event) {
    event.preventDefault()
    const student = {
        name: $('#name').val(),
        surname: $('#surname').val(),
        patronymic: $('#patronymic').val(),
        birthday: $('#birthday').val(),
        groupName: $('#groupName').val()
    };

    $.ajax({
        url: baseUrl,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(student),
        success: function() {
            alert('Студент успешно добавлен')
        }
    })
})

function loadStudents() {
    $.getJSON(baseUrl, function(data) {
        $('#studentList').empty()
        data.forEach(student => {
            birthdayArray = student.birthday.split('-')
            $('#studentList').append(`
                <li>
                    <p>${student.surname} ${student.name} ${student.patronymic} ${birthdayArray[2]}-${birthdayArray[1]}-${birthdayArray[0]} ${student.groupName}</p>
                    <button onclick="deleteStudent(${student.id})">Удалить студента</button>
                </li>
                `)
        });
    })
}

function deleteStudent(id) {
    $.ajax({
        url: baseUrl + `/${id}`,
        type: 'DELETE',
        success: function(result) {
            alert(`Студентов удалено: ${result}`)
            loadStudents()
        }
    })
}

$('#loadStudents').click(function() {
    loadStudents()
})