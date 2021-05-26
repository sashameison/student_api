package com.example.demo.service;

import com.example.demo.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAllStudents();

    Student getById(int id);

    Student save(Student student);

    void update(Student student);

    void delete(Student student);
}
