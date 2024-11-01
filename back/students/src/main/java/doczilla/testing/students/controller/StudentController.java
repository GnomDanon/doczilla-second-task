package doczilla.testing.students.controller;

import doczilla.testing.students.model.Student;
import doczilla.testing.students.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/student")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @CrossOrigin
    @PostMapping
    public ResponseEntity<String> addStudent(@RequestBody Student student) {
        boolean success = studentService.add(student);
        if (success) {
            return ResponseEntity.ok("Студент успешно добавлен");
        }
        return ResponseEntity.internalServerError().body("Внутренняя ошибка сервера");
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable int id) {
        int deletedCount = studentService.delete(id);
        return ResponseEntity.ok(String.format("Удалено студентов: %d", deletedCount));
    }

    @CrossOrigin
    @GetMapping
    public List<Student> getStudents() {
        return studentService.getAll();
    }
}
