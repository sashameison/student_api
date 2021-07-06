package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private long id;

  @Column(name = "name")
  private String name;

  @Column(name = "price")
  private BigDecimal price;


  @ToString.Exclude
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "student_id")
  private Student student;

  //
  //  @ManyToMany
  //  @JoinTable(
  //      name = "course_like",
  //      joinColumns = @JoinColumn(name = "student_id"),
  //      inverseJoinColumns = @JoinColumn(name = "course_id"))
  //  Set<Course> likedCourses;
}
