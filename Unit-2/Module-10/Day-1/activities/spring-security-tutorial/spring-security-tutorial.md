# Spring Security Tutorial

This tutorial shows you how to control access to a Spring Boot web service using Spring Security authentication and role based access control (authorization). You will need:

* MySQL
* MySQL Workbench
* Spring Initializr (start.spring.io)
* IntelliJ IDEA Community Edition

## System Design

The ``secure-app`` is a simple Spring Boot REST web service that we will secure with Spring Security. The application will include authentication and role based access control.

![iamge](images/secure-app.png)



## Building the System

We will build the system in the following steps:

1. Create the project
2. Implement the REST endpoints/api
3. Create the Spring Security Schema
4. Configure Spring Security components
5. Apply Spring Security to endpoints

### Step 1: Create the Project

Step 1 is to create the application.  We'll use the Spring Initializr to create our project. Go to ```start.spring.io``` and enter the following information:

- Group = com.trilogyed
- Artifact = secure-app
- Dependencies = Spring Web Starter, JDBC API, MySQL Driver, Spring Security

Download the project, copy it into your working directory, and open the project in IntelliJ.

### Step 2: Implement REST Enpoints

Next, we will create the Controller and endpoints for this application. Create a new Java class called ```com.trilogyed.secureapp.controller.SecureAppController``` and add the following code:

```java
@RestController
public class SecureAppController {

    @RequestMapping(value = "/open", method = RequestMethod.GET)
    public String open() {
        return "Open endpoint - anyone can access.";
    }

    @RequestMapping(value = "/loggedin", method = RequestMethod.GET)
    public String loggedIn(Principal principal) {
        return "Hello " + principal.getName() + "! Looks like you're logged in!";
    }

    @RequestMapping(value = "/needsRole", method = RequestMethod.GET)
    public String authRoleGet(Principal principal) {
        return "Hello " + principal.getName() + "! Looks like you have the MGR role";
    }

    @RequestMapping(value = "/needsRole", method = RequestMethod.POST)
    public String authRolePost(Principal principal) {
        return "Hello " + principal.getName() + "! Looks like you have the ADMIN role";
    }

    @RequestMapping(value = "/allDone", method = RequestMethod.GET)
    public String allDone() {
        return "That's All Folks!";
    }
}
```

Items to note about this code:

* Later, we will configure Spring Security. When we do that, the Principal parameter will be automatically passed to the methods that need it.

### Step 3: Create Spring Security Schema

Spring Security provides a default schema that stores users and their associated authorities. **Authorities** is the term that Spring Security uses for roles or permissions. 

Spring Security authorities are arbitrary strings that have no inherent meaning to the Spring Security system itself. The system will simply attempt to match the Authorities assigned to a given user with the list of Authorities that are allowed to access a resource. If there is at least one match, access is granted. Otherwise access is denied.

Keep in mind that authorities have no relationship to other authorities and are not inherently hierarchical. If you need hierarchical authorities (which is common),  you can create a hierarchical relationship by making sure that users who have higher level access authorities (whatever that means in your application) also have all of the lower level access authorities. For example, our example application has three authorities or roles:

1. ```ROLE_USER```
2. ```ROLE_MANAGER```
3. ```ROLE_ADMIN```

To make these hierarchical, you would make sure all user in the system have ```ROLE_USER```. You would make sure that all managers have both ```ROLE_USER``` and ```ROLE_MANAGER``` and you would make sure all administrators have ```ROLE_USER```, ```ROLE_MANAGER```, and ```ROLE_ADMIN```. See the SQL script below.

The following script
- creates the schema
- creates the tables within the schema that hold users and authorities
- populates the tables with test users and authorities.

Open MySQL Workbench and run the following script:

```sql
create schema if not exists secureapp;
use secureapp;

create table if not exists users(
	username varchar(50) not null primary key,
	password varchar(100) not null,
	enabled boolean not null
);

create table if not exists authorities (
	username varchar(50) not null,
	authority varchar(50) not null,
	constraint fk_authorities_users foreign key(username) references users(username));
	create unique index ix_auth_username on authorities (username,authority
);

insert into users (username, password, enabled) values ('plainUser', '$2a$10$KxTc8SYbIB/IaXCWz6NA4ug1pkAYM/e.P.0YQFGE3Ua4FZ6Qf842a', true);
insert into users (username, password, enabled) values ('managerUser', '$2a$10$QPnaeWBWz1BdDglni2CLzO2YMeifVXtQDPgUOVNETTcj8cEGwqiym', true);
insert into users (username, password, enabled) values ('adminUser', '$2a$10$Hc878CPLJ4hOtwyzt6V7..LHtzhcR3zqcXOAPseY9QGg05ZxcsTR6', true);

insert into authorities (username, authority) values ('plainUser', 'ROLE_USER');
insert into authorities (username, authority) values ('managerUser', 'ROLE_USER');
insert into authorities (username, authority) values ('managerUser', 'ROLE_MANAGER');
insert into authorities (username, authority) values ('adminUser', 'ROLE_USER');
insert into authorities (username, authority) values ('adminUser', 'ROLE_MANAGER');
insert into authorities (username, authority) values ('adminUser', 'ROLE_ADMIN');
```

Some items to note about this code:

* The passwords are hashed using the BCrypt library. Storing plain text passwords in a database is a security risk. BCrypt is the recommended password hashing algorithm for Spring Security.
* The plaintext value of each password is ```password```.
* We'll see how to create BCrypt hashed passwords in the next section.
* We have three users with the following roles:
  * ```plainUser``` : ```ROLE_USER```
  * ```managerUser``` : ```ROLE_USER, ROLE_MANAGER```
  * ```adminUser``` : ```ROLE_USER, ROLE_MANAGER, ROLE_ADMIN```

### Step 4: Configure Spring Security

We'll configure Spring Security in the following steps:

1. Configure database connection
2. Configure the Authentication  Manager

#### 4.1 Configure Database Connection

Open the ```application.properties``` and add the following entries:

```java
spring.datasource.url: jdbc:mysql://localhost:3306/secureapp?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username: root
spring.datasource.password: rootroot
```

###### Note about serverTimeZone configuration 
###### - If the “serverTimezone=UTC” does not work on your machine then it may be necessary to change UTC to a more specific timezone setting based on your location. Such as:  “serverTimezone=US/Central”

---


#### 4.2 Configure the Authentication Manager

Now we'll configure Spring Security to use the database for authentication and authorization data. Create a new Java class called ```com.trilogyed.secureapp.SecurityConfig``` and add the following code:

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    DataSource dataSource;

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder authBuilder) throws Exception {

        PasswordEncoder encoder = new BCryptPasswordEncoder();

        authBuilder.jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery(
          				"select username, password, enabled from users where username = ?")
                .authoritiesByUsernameQuery(
          				"select username, authority from authorities where username = ?")
                .passwordEncoder(encoder);

    }
}

```

Some items to note about the code:

* This is a configuration class and is marked with the ```@Configuration``` annotation.
* This class extends ```WebSecurityConfigurerAdapter```
* We are autowiring the data source configured in the previous step.
* When importing the DataSource library into the project be sure to select this import: ```javax.sql.DataSource``` 
* As mentioned above, storing plain text passwords in the database is a security risk so we hash the passwords in this database using a ```PasswordEncoder```. We have chosen to use the BCrypt password encoder for this application. This will cause Spring Security to apply the BCrypt hashing algorithm to incoming passwords before comparing them to the value in the database.
* We use the supplied AuthenticationManagerBuilder to configure Spring Security to use the database schema created previously. We need to supply a data source, a query to find users by username, a query to find authorities by username, and a password encoder.

##### Hashing Passwords

The SQL script we used to create and populate our security database included already hashed passwords. We did that by creating a PasswordUtility class. Create a new Java class called ```com.trilogyed.secureapp.util.PasswordUtility``` and add the following code:

```java
public class PasswordUtility {

    public static void main(String[] args) {
        PasswordEncoder enc = new BCryptPasswordEncoder();

        String password = "password";

        String encodedPassword = enc.encode(password);

        System.out.println(encodedPassword);

    }
}
```

This is a crude program that takes a password String, applies the BCrypt algorithm, and then prints the hashed String to the console. We copied the value printed to the console and pasted it into the SQL script.

### Step 5: Apply Spring Security to Endpoints

Our final step is to apply Spring Security to the endpoints of our application. We'll do this as follows:

1. Turn on HTTP Basic (username and password) authentication.
1. Apply security rules to the endpoints.
1. Setup the logout rules.
1. Configure the Cross Site Request Forgery protection.

Open the ```SecurityConfig``` class that you created in the previous step and modify it so it looks like this:

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    DataSource dataSource;

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder authBuilder) throws Exception {

        PasswordEncoder encoder = new BCryptPasswordEncoder();

        authBuilder.jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery(
          				"select username, password, enabled from users where username = ?")
                .authoritiesByUsernameQuery(
          				"select username, authority from authorities where username = ?")
                .passwordEncoder(encoder);

    }
    
    public void configure(HttpSecurity httpSecurity) throws Exception {

        httpSecurity.httpBasic();

        httpSecurity.authorizeRequests()
                .mvcMatchers("/loggedin").authenticated()
                .mvcMatchers(HttpMethod.GET, "/needsRole").hasAuthority("ROLE_MANAGER")
                .mvcMatchers(HttpMethod.POST, "/needsRole").hasAuthority("ROLE_ADMIN")
                .anyRequest().permitAll();

        httpSecurity
                .logout()
                .clearAuthentication(true)
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/allDone")
                .deleteCookies("JSESSIONID")
                .deleteCookies("XSRF-TOKEN")
                .invalidateHttpSession(true);

        httpSecurity
                .csrf()
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());

    }
}
```

Items to note about this code:

##### 5.1 Turn on HTTP Basic Authentication

We want to use a method of authentication for this application called "HTTP Basic." This is done by calling the ```httpBasic()``` method on the HttpSecurity parameter passed into the ```configure``` method.

##### 5.2 Apply Security Rules to Endpoints

Access rules are applied at the endpoint level. Rules can be applied to individual endpoints or to groups of endpoints by matching RequestMappings to access rules. These rules are executed in the order they are coded so you must make sure the more specific rules come before the more general rules. In our configuration code

```java
        httpSecurity.authorizeRequests()
                .mvcMatchers("/loggedin").authenticated()
                .mvcMatchers(HttpMethod.GET, "/needsRole").hasAuthority("ROLE_MANAGER")
                .mvcMatchers(HttpMethod.POST, "/needsRole").hasAuthority("ROLE_ADMIN")
                .anyRequest().permitAll();


```

we do the following:

1. First we match ```/loggedin``` and specify that you must be logged in (authenticated) to access the endpoint. 
1. Next we specify that ```GET``` requests to ```/needsRole``` are only accessible to users with the ```ROLE_MANAGER``` authority. This implies that the user is also logged in because you can't have an authority if you're not logged in.
1. Next we specify that ```POST``` requests to ```/needsRole``` are only accessible to users with the ```ROLE_ADMIN``` authority.
1. Finally, we specfy that we'll permit anyone (logged in or not) to access all other endpoints.

##### 5.3 Setup Logout Rules

We enable logout by calling the ```logout()``` method on the ```HttpSecurity``` parameter. We then specify the following:

1. The URL that is to be called for logging out.
1. The URL that the application will redirect to when logout is complete.
1. The cookies to delete
1. Tell the application to invalidate the HTTP Session

##### 5.4 Configure CSRF Protection

Spring has CSRF protection enabled by default, but the mechanism used for exchanging the CSRF token by default is the HTTP session, which doesn't work well for Postman and many frameworks including Angular. These frameworks expect the CSRF token in a cookie so we tell Spring Security to put the CSRF token in a cookie to accommodate these clients.

## Exercising the Application

Now that the application is built and configured, it is time to exercise the endpoints and make sure our security rules are acting as expected. Start your service and follow the steps below to validate you configuration.

We will be testing our endpoints with *incognito* windows so we don't have to clear the cache between every test.

#### Browser

##### The ```open``` Endpoint

* Open a new incognito window in your browser and navigate to ```localhost:8080/open```. You should *not* be promtped to login.
* The page should display: ```Open endpoint - anyone can access.```

##### The ```loggedin``` Endpoint

* Navigate to ```localhost:8080/loggedin```. 
* You should be promted for a username and password. 
* Enter ```plainUser``` for the username and ```password``` for the password. 
* The page should display: ```Hello plainUser! Looks like you're logged in!```.

##### The ```needsRole``` Endpoint: GET

* Navigate to ```localhost:8080/needsRole``` using the same window/tab you used in the last step. 
* You should get a Whitelable Error Page and a 403 Forbidden error. This is because you are logged in as a user that has only the ```ROLE_USER``` authority and ```ROLE_MANAGER``` is required to access this endpoint. 

We'll now log in as another user and try again:

* Navigate to ```localhost:8080/logout```. The browser should redirect to ```localhost:8080/allDone``` and display ```That's All Folks!```. 
* Close your incognito window and open another incognito window. 
* Navigate to ```localhost:8080/needsRole```. You should be prompted for a username and password. Enter ```managerUser``` for the username and ```password``` for the password.
* The page should display ```Hello managerUser! Looks like you have the MGR role``` 



#### Postman

##### The ```needsRole``` Endpoint: POST

We'll use Postman to test sending a ```POST``` request to ```/needsRole```. We'll do this in several steps to illustrate how HTTP Basic authentication and CSRF tokens are handled with Postman.

##### Step 1: Send Empty POST

Our first attempt will be to send an empty post to ```/needsRole```. Open Postman and send a POST as in the following image. You should get a 403 Forbidden response as shown below:

![image](images/needrole-empty-post.png)

We get a 403 Forbidden response because we didn't send a username and password for HTTP Basic authentication. The browser automatically promted us for a username and password but that is not the case when we use Postman. We need to send the username and password in the headers.

##### Step 2: Send Empty POST with Authentication Headers

Go back to the POST request that you just sent in Postman and add HTTP Basic authentication headers as show in the image below and submit the request. You should still get a 403 Forbidden response as shown below:

![image](images/needsrole-http-basic-empty-post.png)

We get a 403 Forbidden response because we haven't accounted for CSRF token required by Spring Security for requests that change application state such as POST and PUT. We need to send the CSRF token in the header of our request.

##### Step 3: Send Empty POST with Authentication Headers and CSRF Token

Recall that we configured Spring Security to send the CSRF token back to us in a cookie. The value of the CSRF token can be found in the Cookies menu in Postman. Handling these cookies is automatically handled by various client frameworks. Because we are using Postman, we have to handle the token manually. 

Click the Cookies menu link. Postman should display the following:

![image](images/postman-cookies.png)

Now click on the XSRF-TOKEN to display the following:

![image](images/xsrf-cookie.png)

Copy the value of the XSRF-TOKEN. We will send this value in our request headers.

###### Note about serverTimeZone configuration 
###### - The XSRF-TOKEN generated by Postman is valid for 24 hours. After that 24 hour period the student will need to copy a new token into the header so that a valid XSRF-TOKEN is passed to the API.

Close the Manage Cookies dialog, click on the Headers menu item, and add the X-XSRF-TOKEN header Key. Use the XSRF value that copied in the previous step as the value for the Key. Submit the request and your Postman UI should look similar to this (you will have a different value for the X-XSRF-TOKEN Key): 

![image](images/needsrole=successful-post-with-csrf.png)

Now that we have included both the Authentication Headers and the CSRF token, Spring Security has granted us access to the protected resource. Both of these header values must be sent with every Postman request to this endpoint.
