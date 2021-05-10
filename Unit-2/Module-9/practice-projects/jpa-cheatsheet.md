# JPA Cheatsheet

### Documentation

* JpaRepository JavaDoc

### Building a Repository/DAO

1. Create project with Spring Initializr. Include support for:
   1. JPA
   2. MySQL
   3. Web
2. Create Java class model for given scenario
3. Annotate Java classes with JPA annotations to map the classes to database tables.
   1. Mark the class with ```@Entity```
   2. Include ```@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})``` so that Hibernate properties don't get serialized by our REST API.
   3. Include ```@Id``` and ```@GeneratedValue(strategy = GenerationType.AUTO)``` on the Id field (primary key) of the class.
   4. Include any One to Many relationships if any exist.
      1. ```@OneToMany``` annotation on the Set of related objects (see Customer/Customer Note as an example)
   5. Include any Many to One relationships to match the One to Many relationships.
      1. See Note class below for an example.
      2. Include @JoinColumn

```java
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Customer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer customerId = new Integer(0);
    private String name;
    private String email;
    private String phone;
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Note> notes = new HashSet<>();

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Set<Note> getNotes() {
        return notes;
    }

    public void setNotes(Set<Note> notes) {
        this.notes = notes;
    }
}
```



```java
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Note implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer noteId;
    private String content;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    public Integer getNoteId() {
        return noteId;
    }

    public void setNoteId(Integer noteId) {
        this.noteId = noteId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

}
```

3. Create the Repository interface(s):
   1. Use JpaRepository and the @Repository annotation.
   2. Create any necessary custom query methods.
4. Create test suite

### Database Configuration

Use the following standard connection settings whe using JPA to auto create your MySQL database.

**NOTE: Make sure you have created the schema ahead of time!!!**

```
spring.datasource.url: jdbc:mysql://localhost:3306/YOUR_SCHEMA_NAME_HERE?useSSL=false
spring.datasource.username: root
spring.datasource.password: rootroot
spring.datasource.driver-class-name: com.mysql.jdbc.Driver

spring.jpa.hibernate.ddl-auto=create
spring.jpa.show-sql=true
```

POM file changes:

```
		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<version>5.1.46</version>
			<scope>runtime</scope>
		</dependency>

```

