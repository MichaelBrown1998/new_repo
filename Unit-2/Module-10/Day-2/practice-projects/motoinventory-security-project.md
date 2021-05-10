# MotoInventory Security Project

The purpose of this project is to give you the opportunity to practice modifying an existing web service project by securing it with Spring Security.

## Project Specification

Modify the MotoInventory project that you created in U2 M1 L3 by adding the following security configuration/rules:

##### Authorities

The system should have the following Authorities:

* Sales Manager
* Sales Person
* Staff

##### Authorization Rules

* Only Sales Managers can create new inventory entries
* Only Sales Managers can delete existing inventory entries
* Sales people can update existing inventory entries
* Anyone can view inventory entries

##### Users

Add the following users to your system:

- goconner
  - Password (Bcrypt hashed): PaSsWorD
  - Authorities: Sales Manager
- bJohnson
  - Password (Bcrypt hashed): !2@3#^^5
  - Authorities: Sales Person
- lbooker
  - Password(Bcrypt hashed): IsThisPasswordOK?
  - Authorities: Staff

### Implementation Guidelines

* Use Spring Security
* Use the standard Spring Security database schema. Add these tables to the existing application database.
* Use the Spring Security tutorial as a guide.