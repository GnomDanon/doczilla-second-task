package doczilla.testing.students.model;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@Builder
public class Student {
    private int id;
    private String name;
    private String surname;
    private String patronymic;
    private LocalDate birthday;
    private String groupName;
}
