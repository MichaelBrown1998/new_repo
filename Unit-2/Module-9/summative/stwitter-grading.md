# Stwitter Grading Breakdown

## Grading/Review

All services and components of the system should follow the well established patterns covered in the course material and tutorials and meet all requirements contained in the assignment.


## Application Documentation - 5%

* Your solution must include a README.md document that outlines the following:
  * The ports on which the various components are running.
  * The URL of the Git repository used to store configuration settings for the various components.
* Your solution must include Open API 3.x (Swagger) documentation for Stwitter, Post, and Comment Services.

## Stwitter Service

1. Produces messages that are sent to a queue. - 15%
1. Has appropriate tests. - 5%
1. Implements feign clients. - 5%

### Standard requirements - 5%

1. Bugs present in the starter code are fixed.
1. Uses config server appropriately.
1. Uses Eureka appropriately.
1. Uses JSR 303 validation and controller advice.

## Queue Consumer

1. Reads messages from the queue. - 20%

### Standard requirements - 5%

1. Uses Eureka appropriately.
1. Implements feign clients.


## Post Service

1. Uses Caching appropriately. - 10%
1. Has appropriate tests. - 5%

### Standard requirements - 5%

1. Bugs present in the starter code are fixed.
1. Uses JDBC Template appropriately - OR - Uses JPA appropriately.
1. Uses config server appropriately.
1. Uses Eureka appropriately.
1. Uses JSR 303 validation and controller advice.


## Comment Service

1. Uses Caching appropriately. - 10%
1. Has appropriate tests. - 5%

### Standard requirements - 5%

1. Bugs present in the starter code are fixed.
1. Uses JDBC Template appropriately - OR - Uses JPA appropriately.
1. Uses config server appropriately.
1. Uses Eureka appropriately.
1. Uses JSR 303 validation and controller advice.
