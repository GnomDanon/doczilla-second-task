package doczilla.testing.students.service;

import doczilla.testing.students.model.Student;
import doczilla.testing.students.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;

    public boolean add(Student student) {
        return studentRepository.add(student);
    }

    public int delete(int id) {
        return studentRepository.deleteById(id);
    }

    public List<Student> getAll() {
        return studentRepository.getAll();
    }
}
