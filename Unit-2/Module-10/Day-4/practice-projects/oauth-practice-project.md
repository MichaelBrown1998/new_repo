# OAuth Practice Project

The purpose of project is to give you practice creating OAuth authorization and resource servers with Spring.

## Project Specification

Create the following OAuth system:

### Authorization Server

Create an authorization server with the following specifications:

* Port: 9294
* User Info endpoint: /principal
* Application context path: /uaa
* Clients:
  * HTML5
    * Grant Type: Password
    * Scopes: ROLE_LVL1, ROLE_LVL2
    * Secret (Bcrypt hashed): html_5_secret
  * Android
    - Grant Type: Password
    - Scopes: ROLE_LVL1, ROLE_LVL2, ROLE_ADMIN
    - Secret (Bcrypt hashed): android_secret
  * iPhone
    - Grant Type: Password
    - Scopes: ROLE_LVL1, ROLE_LVL2, ROLE_ADMIN
    - Secret (Bcrypt hashed): i_phone_secret
* Users:
  * jdoe
    * Password (Bcrypt hashed): jdoeRoCkS!!!
    * Authorities: ROLE_ADMIN
  * ssmith
    * Password (Bcrypt hashed): pwdPWDpwd!
    * Authorities: ROLE_LVL1

### Resource Servers

You created the following services in U1 M4 L8:

* Day Converter
* Hello
* Month Converter
* Rest Calculator
* Weather Service

Confgure each of these services to run on unique ports and configure them as resource servers that interact with the Authorization Server you created in the previous step.