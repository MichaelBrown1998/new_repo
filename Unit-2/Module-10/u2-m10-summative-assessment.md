# U2 M10 Summative Assessment

The purpose of this assessment is for you to demonstrate your ability to apply Spring security to an existing application and deploy it to Elastic Beanstalk.

## Requirements

This assessment is based on the Game Store Capstone Project that you completed for Unit 1. If you were unable to complete any of the features of that project, you must complete them before beginning this assessment.

### Security Rules - 80% total

Apply the following security rules to your Game Store application:

* Searching: - 20% (10% for working endpoint, 10% for working security)
  * Any user (both authenticated and unauthenticated) can search for products.
* Updates: - 20% (10% for working endpoint, 10% for working security)
  * Any staff member can update a product.
* Create: - 20% (10% for working endpoint, 10% for working security)
  * Only Managers and above can create new products.
* Delete - 20% (10% for working endpoint, 10% for working security)
  * Only Admin users can delete a product.

### Users

You are responsible for creating users and assigning roles so that you can verify your security configuration.

### Deployment - 20%

After implementing the above changes and verifying that they work locally you must deploy your application to Elastic Beanstalk and demonstrate that it is working on that platform.