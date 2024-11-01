package doczilla.testing.students.repository;

import doczilla.testing.students.model.Student;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import javax.sql.DataSource;

@Repository
@RequiredArgsConstructor
public class StudentRepository {

    private final DataSource dataSource;

    public boolean add(Student student) {
        String sql = "INSERT INTO student (name, surname, patronymic, birthday, group_name)" +
                "VALUES (?, ?, ?, ?, ?)";

        try (Connection connection = dataSource.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, student.getName());
            statement.setString(2, student.getSurname());
            statement.setString(3, student.getPatronymic());
            statement.setDate(4, Date.valueOf(student.getBirthday()));
            statement.setString(5, student.getGroupName());
            statement.executeUpdate();
            return true;
        } catch (SQLException exception) {
            exception.printStackTrace();
            return false;
        }
    }

    public int deleteById(int id) {
        String sql = "DELETE FROM student WHERE id = ?";

        try (Connection connection = dataSource.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setObject(1, id);
            return statement.executeUpdate();
        } catch (SQLException exception) {
            exception.fillInStackTrace();
            return 0;
        }
    }

    public List<Student> getAll() {
        List<Student> students = new ArrayList<>();
        String sql = "SELECT * FROM student";

        try (Connection connection = dataSource.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(sql)){

            while (resultSet.next()) {
                Student student = Student.builder()
                        .id(resultSet.getInt("id"))
                        .name(resultSet.getString("name"))
                        .surname(resultSet.getString("surname"))
                        .patronymic(resultSet.getString("patronymic"))
                        .birthday(resultSet.getDate("birthday").toLocalDate())
                        .groupName(resultSet.getString("group_name"))
                        .build();
                students.add(student);
            }
        } catch (SQLException exception) {
            exception.fillInStackTrace();
        }
        return students;
    }
}
