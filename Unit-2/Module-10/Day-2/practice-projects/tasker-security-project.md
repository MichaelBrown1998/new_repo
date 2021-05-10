# Tasker Security Project

The purpose of this project is to give you the opportunity to practice modifying an existing web service project by securing it with Spring Security.

## Project Specification

Modify the Tasker project that you created as your U2 M1 summative assessment by adding the following security configuration/rules:

##### Authorities

The system should have the following Authorities:

- Owner
- Third Party App (Reader)
- Third Party App (Admin) 

##### Authorization Rules

- Owners and Third Party App (Admin) users can create new Tasks
- Owners and Third Pary App (Admin users) can update existing Tasks
- Only Owners can delete existing Tasks
- Third Party App (Reader) users can read Tasks

##### Users

Add the following users to your system:

* jsmith
  * Password (Bcrypt hashed): password123
  * Authorities: Owner
* jdoe
  * Password (Bcrypt hashed): ThisIsMyPassword
  * Authorities: Third Party App (Reader)
* djones
  * Password(Bcrypt hashed): IHaveAGoodPassword
  * Authorities: Third Party App (Reader)

### Implementation Guidelines

- Use Spring Security
- Use the standard Spring Security database schema. Add these tables to the existing application database.
- Use the Spring Security tutorial as a guide.