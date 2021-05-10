# Speed Camera Project

This project is a simple system that allows an autonomous traffic monitoring camera to keep records of speeders. This system consists of the following:

1. A service that sits in front of the database and provides CRUD access to the data.
2. An edge service that provides an API that allows city officials to check for fines associated with a license plate, and allows an autonomous camera to log the license plate of a car that has passed it, contains business rules for calculating a fine for speeder, and that communicates with the CRUD service via a Feign client.
3. A Eureka Service Registry. The CRUD service must register with the Eureka service and the edge service must use the Eureka service to locate the CRUD service.

## Requirements

### CRUD Service

The CRUD microservice must provide create, read, update, and delete functionality for Violation entries in the backing database. You must design and implement the REST API that provides these services.

### Edge Service

- The edge microservice must provide an endpoint that allows civic officials to get a list of fines associated with a license plate. You must design and implement this endpoint.
- The edge microservice must provide an endpoint that allows traffic monitoring cameras to add a speed record to the database. The service either returns a success message or an error message. You must design and implement this endpoint.
- The edge microservice must enforce the following business rules in the service layer:
   - If the speed is 0-40 - no record is created
   - If the speed is 40-49, a record with fine of 100 is created
   - If the speed is 50-59, a record with fine of 250 is created
   - If the speed is 60+, a record with fine of 1000 is created

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
create schema if not exists traffic_monitor;
use traffic_monitor;

create table if not exists violation (
	  id int not null auto_increment primary key,
    license_plate varchar(20) not null,
    state varchar(20) not null,
    int speed not null,
    int fine not null 
);
```

