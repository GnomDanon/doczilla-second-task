import { studentService } from "../service/StudentService.js";

export class StudentList {
    constructor(studentList) {
        this._students = [];
        this._studentList = studentList;
    }

    async _deleteStudent(id) {
        await studentService.deleteStudent(id);
        this.renderAllStudents();
    }
    

    _renderStudents() {
        this._studentList.empty();
        this._students.forEach(student => {
            const birthdayArray = student.birthday.split('-');
            const studentElement = $(`
                <li>
                    <p>${student.surname} ${student.name} ${student.patronymic} ${birthdayArray[2]}-${birthdayArray[1]}-${birthdayArray[0]} ${student.groupName}</p>
                    <button>Удалить студента</button>
                </li>
                `);
            studentElement.find("button").on("click", () => this._deleteStudent(student.id));
            this._studentList.append(studentElement);
        });
    }

    async renderAllStudents() {
        this._students = await studentService.fetchStudents();
        this._renderStudents();
    }
}