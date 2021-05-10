# Student Grades Project

This project is a simple system that allows instructional staff to add grades for individual assignments for students, and to calculate a cumulative grade for a student. This system consists of the following:

1. A service that sits in front of the database and provides CRUD access to the data.
2. An edge service that provides an API that allows graders to add a grade, get all grades for a student, contains business rules for calculating letter grades, and that communicates with the CRUD service via a Feign client.
3. A Eureka Service Registry. The CRUD service must register with the Eureka service and the edge service must use the Eureka service to locate the CRUD service.

## Requirements

### CRUD Service

The CRUD microservice must provide create, read, update, and delete functionality for Grade entries in the backing database. You must design and implement the REST API that provides these services.

### Edge Service

- The edge microservice must provide an endpoint that allows graders to add a new assignment grade for a student. You must design and implement this endpoint.
- The edge microservice must provide an endpoint that allows students to get a list of their assignment grades, as well as their final letter grade and percentage. You must design and implement this endpoint.
- The edge microservice must apply the following business rules in the service layer:
  - Average percentage of all grades must be reported by taking the simple average (sum /  count) of all assignments.
  - Cumulative Letter grade will be reported as the following
    - A for an average >= 90
    - B for an average >= 80 and less than 90
    - C for an average >= 70 and less than 80
    - D for an average >= 60 and less than 70
    - F for an average below 60

### Architecture

- The system must incorporate and use the Eureka service registry.
- The edge service must use Feign to talk to the CRUD microservice.
- We highly encourage you to use JPA for database interaction in the CRUD microservice.

### TDD

- Follow TDD when building this project.
- This includes using MockMvc to test all of the endpoint of both microservices.
- This includes JUnit and Mockito for service layer and DAO tests.

## Database

```sql
create schema if not exists gradebook;
use gradebook;

create table if not exists grade (
    id int not null auto_increment primary key,
    student_id int not null,
    assignment_id int not null,
    percent_grade int not null
);
```

