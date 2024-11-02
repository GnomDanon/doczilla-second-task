export class Student {
    constructor(id, name, surname, patronymic, birthday, groupName) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.birthday = birthday;
        this.groupName = groupName;
    }

    getJson() {
        return {
            name: this.name,
            surname: this.surname,
            patronymic: this.patronymic,
            birthday: this.birthday,
            groupName: this.groupName
        };
    }
}