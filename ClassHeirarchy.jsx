import React from "react";

// 1. Base Class: Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() { return `Hello, my name is ${this.name}.`; }
}

// 2. Subclass: Student (Inheritance)
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // Calls the parent constructor
    this.major = major;
  }
  // Method Overriding (Polymorphism)
  introduce() { return `I am ${this.name}, a student studying ${this.major}.`; }
}

// 3. Subclass: Teacher (Inheritance)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  // Method Overriding (Polymorphism)
  introduce() { return `I am Dr. ${this.name}, and I teach ${this.subject}.`; }
}

const PersonClasses = () => {
  // Creating instances of classes
  const members = [
    new Student("Rakshak Gupta", 20, "Full Stack Development"),
    new Teacher("James Wilson", 45, "React.js"),
  ];

  return (
    <div className="experiment-container">
      <h2>Experiment 3.3: Person Class Hierarchy</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Demonstrating OOP Principles: Inheritance and Polymorphism
      </p>

      {members.map((member, index) => (
        <div className="class-card" key={index}>
          <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>
            {member.name} 
            <span style={{ fontSize: '0.9rem', color: '#3498db', marginLeft: '10px' }}>
              ({member instanceof Student ? "Student" : "Teacher"})
            </span>
          </h3>
          
          <p className="intro-text">
            {member.introduce()}
          </p>

          {/* Conditional rendering based on class type */}
          <div style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            {member instanceof Student && <span><strong>Major:</strong> {member.major}</span>}
            {member instanceof Teacher && <span><strong>Subject:</strong> {member.subject}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonClasses;