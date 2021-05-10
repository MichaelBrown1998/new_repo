# Hospital Equipment Tracker Project

A surprising problem in hospitals is that equipment regularly gets lost. Hospital personnel regularly lose track of wheelchairs, infusion pumps, defibrillators, and other valuable, scarce equipment. This project is a simple system that allows a hospital staff to track their valuable equipment. This system consists of the following:

1. A service that sits in front of the inventory and provides CRUD access to the data.
2. An edge service that provides an API that allows personnel to search for equipment by name, and to update the location of a piece of equipment, and that communicates with the CRUD service via a Feign client.
3. A Eureka Service Registry. The CRUD service must register with the Eureka service and the edge service must use the Eureka service to locate the CRUD service.

## Requirements

### CRUD Service

The CRUD microservice must provide create, read, update, and delete functionality for EquipmentLocation entries in the backing database. The database should be an H2 in-memory database. You must design and implement the REST API that provides these services.

### Edge Service

- The edge microservice must provide an endpoint that allows personnel to find all equipment by description. For example, find the location of all wheelchairs.
- The edge microservice must provide an endpoint that allows personnel to update the location of a piece of equipment. The service either returns a success message or an error message (for example, "invalid id"). You must design and implement this endpoint.

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
create schema if not exists hospital_inventory;
use hospital_inventory;

create table if not exists equipment_location (
	  id int not null auto_increment primary key,
    description varchar(40) not null,
    location varchar(40) not null
);
```

