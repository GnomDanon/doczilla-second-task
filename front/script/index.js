import { StudentForm } from "./component/StudentForm.js";
import { StudentList } from "./component/StudentList.js";

$(function() {
    const studentForm = new StudentForm($('#name'), $('#surname'), $('#patronymic'), $('#birthday'), $('#groupName'));
    const studentList = new StudentList($('#studentList'));

    $('#addStudentForm').submit(function(event) {
        event.preventDefault();
        studentForm.addStudent();
    });

    $('#loadStudents').click(function() {
        studentList.renderAllStudents();
    })
})
