import { Student } from "../model/Student.js";

class StudentService {
    constructor() {
        const apiUrlMeta = document.querySelector('meta[name="api-url"]');
        this._apiUrl = apiUrlMeta.content === '__API_URL__' ? 'http://localhost:8080/api' : apiUrlMeta.content;
    }

    async postStudent(student) {
        $.ajax({
            url: `${this._apiUrl}/student`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(student.getJson()),
            success: function() {
                alert('Студент успешно добавлен');
            }
        })
    }

    async fetchStudents() {
        try {
            const responce = await $.get(`${this._apiUrl}/student`);
            return responce.map(student => new Student(
                student.id, student.name, student.surname, 
                student.patronymic, student.birthday, student.groupName
            ));
        } catch (error) {
            console.log('Ошибка при загрузке данных', error);
        }
    }

    async deleteStudent(id) {
        await $.ajax({
            url: `${this._apiUrl}/student/${id}`,
            type: 'DELETE',
            success: function(result) {
                alert(`Студентов удалено: ${result}`);
            }
        })
    }
}

export const studentService = new StudentService();