# Pet Shelter Project

This project is a simple system that allows a pet shelter to manage ownership information of pets. This system consists of the following:

1. A service that sits in front of the pet population and provides CRUD access to the data.
2. An edge service that provides an API that allows shelter workers to view a pet, and update a pet's owner, contains business rules for updating a pet's owner, and that communicates with the CRUD service via a Feign client.
3. A Eureka Service Registry. The CRUD service must register with the Eureka service and the edge service must use the Eureka service to locate the CRUD service.

## Requirements

### CRUD Service

The CRUD microservice must provide create, read, update, and delete functionality for Pet entries in the backing H2 in-memory database. You must design and implement the REST API that provides these services.

### Edge Service

- The edge microservice must provide an endpoint that allows shelter workers to view a pet by id. You must design and implement this endpoint.
- The edge microservice must provide an endpoint that allows shelter workers to update the owner of a pet. The service either returns a success message or an error message. You must design and implement this endpoint.
- The edge microservice must enforce the following business rule in the service layer:
  - No owner may own more than three pets.

### Architecture

- The backing database must be an H2 in-memory database.
- The system must incorporate and use the Eureka service registry.
- The edge service must use Feign to talk to the CRUD microservice.
- We highly encourage you to use JPA for database interaction in the CRUD microservice.

### TDD

- Follow TDD when building this project.
- This includes using MockMvc to test all of the endpoint of both microservices.
- This includes JUnit and Mockito for service layer and DAO tests.

## Database

```sql
create schema if not exists pet_shelter;
use pet_shelter;

create table if not exists pet (
	  id int not null auto_increment primary key,
	  type varchar(20) not null,
	  name varchar(20) not null,
	  owner varchar(40) not null
);
```

