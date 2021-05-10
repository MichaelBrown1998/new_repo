# MotoInventory Service Project - SOLUTION

## MotoInventory Service:

### Bugs

* MotoInventoryDaoTest:
  * Line 123: the expected value for the ```assertEquals``` should be 0 rather than 1.
* MotoInventoryDaoJdbcTemlateImpl:
  * Line 19: Prepared statement is missing a comma (,) after the second to last question mark (?)

### JSR 303 Validation Settings

* All properties should have a max limit of 20 exception for Year, which should be 4
* All properties should be marked as required.

### Controller

* All hardcoded method implementations must be replaced with calls to the DAO.
* The DAO must be injected into the Controller.
* The DAO must be accessed through the DAO interface rather than the concreate implementation.
* New endpoint must be implemented according to the spec.
  * Controller must use the Discovery Client to locate and call the VIN Lookup Service
  * Return type for the endpoint method must be Map

### Configuration

* Configuration settings must be accessed via the Spring Cloud Config Server

## VIN Lookup Service

### Configuration

* Configuration settings must be accessed via the Spring Cloud Config Server

### Service Registry

* Service must register with the Eureka Service Registry

## Spring Cloud Config Server

* Spring Cloud Config Server must be running on port 9999

## Eureka Service Registry

* The Eureka Service Registry must be running on port 8761