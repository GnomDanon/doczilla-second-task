import { Student } from "../model/Student.js";
import { studentService } from "../service/StudentService.js";

export class StudentForm {
    constructor(nameField, surnameField, patronymicField, birthdayField, groupNameField) {
        this._nameField = nameField;
        this._surnameField = surnameField;
        this._patronymicField = patronymicField;
        this._birthdayField = birthdayField;
        this._groupNameField = groupNameField;
    }

    addStudent() {
        const student = new Student(
            null,
            this._nameField.val(),
            this._surnameField.val(),
            this._patronymicField.val(),
            this._birthdayField.val(),
            this._groupNameField.val()
        );
        studentService.postStudent(student);
    }
}