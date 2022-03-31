# Capstone Project References
The following is important information about the Capstone Project.<br>
For complete references and documentation, access the [GitHub Wiki](https://github.com/EICPCohort5/capstone-project/wiki).

# README Contents
- [Important Links](#important-links)
- [Application Design Decisions](#application-design-decisions)
- [Application Goals](#application-goals)
- [Application Requirements and Architecture Recommendations](#application-requirements-and-architecture-recommendations)
- [Tech Stack](#tech-stack)
- [Cohort First Steps](#cohort-first-steps)
- [Teams & Team Leads](#team-leads)

---
# Important Links
- [StoneCap Azure Web Application](https://officialstonecap.azurewebsites.net)
- [Prototype for Front-End Interface](https://share.proto.io/PSVDX9/)
- [Order Tracking API - OpenAPI](https://app.swaggerhub.com/apis/TJX7/Order_Tracking_API/1.0.0-oas3)

---
# Application Design Decisions
- Camel Case and communicate with other teams if you plan on doing any other formatting (EX. devsecopsVanguards)
- Commit often on both an individual and team level

### Branch Layout for Teams
<img width="25%" src="https://res.cloudinary.com/duej1dvdm/image/upload/v1647884942/Branch_Layout.drawio_2_oolk6b.png" alt="Layout"/>

---
# Application Goals
### Goal of Application: Create an "Order Tracking" application
We want to increase the productivity of our customer service representatives (CSR). We're building a new app for them that can do the following:
- Customer
  - Create a customer
  - Find an existing customer
  - Edit a customer
  - Remove a customer
- Orders
  - Create order
  - Find an existing order
  - Modify order
    - Add/remove/edit products
    - Update status: See below
- Products
  - Search products
  - Add products to an order
  - Remove products from an order
  - Editor products in an order

### Suggested Order Lifecycle
- Customer calls in an order
- Customer Service Representative (CSR) adds Customer if not existing
- CSR edits Customer as needed
- CSR creates an Order
- Add Product(s)
  - Check if available
  - Add to the Order if so
- CSR informs shipping to assemble and ship the Order
- Shipping collects Products in Order
- Conditional at any point prior to shipping: Customer calls in to modify existing Order
- Order is shipped
- Order arrives
- Shipping agent informs CSR
- Order is closed

### Business Constraints
- Max number of active orders per customer
- Can't add a Product if none available
- Can't modify an Order that has been shipped
- Can't close out an Order without confirmation that Order arrived as expected

---
# Application Requirements and Architecture Recommendations

### CSRs need to be able to
- Authenticate themselves via a login mechanism
- CRUD for Orders including the ability to interactively add products from the Product catalog
- There must be the ability to save an Order as a draft
- Tie the order to a Customer
- Browse the product catalog (as a CSR adds or removes products from an order, the product count needs to be updated)
- Browse the customer database
- Track and change the shipping status of the order

### Business Objects
- Customers
  - customer_id (PK)
  - first_name
  - middle_name
  - last_name
  - phone
  - email
  - customer_notes
  - address
- Orders
  - order_id (PK)
  - customer_id (FK)
  - order_status_code (FK) (e.g., **Draft/Open/Finalized/Preparing to ship/Ready for shipping/Shipped/Delivered/Closed**)
  - datetime_order_placed
  - total_order_price
  - order_notes
- Products
  - product_id (PK)
  - product_SKU
  - product_price
  - product_name
  - product_quantity
  - product_description

The above listing of data fields is not necessarily comprehensive. You'll also observe that a real database schema is only hinted at. This is not a prescriptive data model, and it's a fact of software development that data models change over time; that's why there is an entire art of schema migrations. One thing clearly lacking from the above is a means by which to link together the customers, orders, and products.

### API Starting Point
| Method    | URLs              | Actions                                                                           |
| :-------- | :---------------- | :-------------------------------------------------------------------------------- |
| GET       | api/customers     | Get all customers                                                                 |
| GET       | api/customers/:id | Get specific customer                                                             |
| POST      | api/customers     | Create new customer                                                               |
| PUT/PATCH | api/customers/:id | Modify existing customer                                                          |
| DELETE    | api/customers/:id | Remove customer (data compliance/right to be forgotten)                           |
| GET       | api/orders        | Get all orders                                                                    |
| GET       | api/orders/:id    | Get specific order                                                                |
| POST      | api/orders        | Create new order (think about how to differentiate between draft and live orders) |
| PUT/PATCH | api/orders/:id    | Modify existing order                                                             |
| DELETE    | api/orders/:id    | Delete a draft order (shouldn't allow for deletion of live orders)                |
| GET       | api/products      | Get all products                                                                  |
| GET       | api/products/:id  | Get specific product                                                              |
| PUT/PATCH | api/products/:id  | Modify product (e.g., inventory)                                                  |

What about searching? Filtering? Versioning? Pagination? Limiting the result set?

---
# Tech Stack
- Documentation
  - API must be documented using [OpenAPI](https://swagger.io/specification/) specification. Additional Swagger tools can be used as desired.
- Backend
  - Node.js 16
  - ExpressJS 4
  - Other libraries as you see fit
- Frontend tech choices are left to your discretion
  - Wireframing: [Figma](https://www.figma.com/) is recommended
  - CSS: [Bootstrap](https://getbootstrap.com/) is recommended
  - JS
    - You can use plain, vanilla JS to do everything if you want
    - You can also use any library that you'd like
    - Helpful libraries
      - [JQuery](https://jquery.com/)
      - [Axios](https://github.com/axios/axios)
      - Feel free to use React, Vue, or Angular if you're feeling ambitious
- Database: MySQL. Additional software for analytics is unconstrained.
- GitHub Actions will be used for CI/CD pipelines in conjunction with Azure.
- Authentication and authorization solutions are unconstrained.
- Testing framework is left unconstrained, but either [Mocha](https://mochajs.org/) and/or [Jest](https://jestjs.io/) are recommended. Front-end team should consider libraries like [Testing Library](https://testing-library.com/docs/) for unit tests. Testing should examine libraries for integration tests.

---
# Cohort First Steps
1. Discuss the architecture of the app amongst the team. Create a diagram that illustrates the flow data between various components.
1. Review the suggested API design and Business Object schemas. Do they support all of the functionality that is required for the application? Can you visualize which API methods will need to be called, and how the Business Objects will change at each step of the Order Lifecycle?
1. How will you coordinate amongst teams? Amongst yourselves? How can your PM see progress?
1. Draw an Entity Relationship Diagram for the DB schema. Once this is in hand, creation and intialization of the required tables is trivial.
1. Encode the API using the [OpenAPI](https://swagger.io/specification/) specification. Doing so will not only serve as a canoncial source of living documentation, but also allow for the auto generation of client and server method stubs.
1. Review the suggested JS and CSS frameworks. Your choice of server side tech is non-negotiable in this case, but management defers to you regarding choice of front-end technologies.
1. Discuss a minimum viable product, and when you can achieve it

### Suggested Milestones
This is not comprehensive or exhaustive. Nor is it in any particular order!

- [ ] DevSecOps has set up a repo (under EICP5Cohort)
- [ ] Front-end has a screen that talks to the back-end
- [ ] Database has a table that the back-end can talk to
- [ ] Testing and docs has documented the planned API for back-end to conform to
- [ ] Back-end can draw data from the database
- [ ] Back-end has an API endpoint that receives from the front-end, talks to the database, returns to the front-end
- [ ] DevSecOps has GitHub Actions set up to do some work
- [ ] Testing generates integration tests (front-end to back-end, front-end to back-end to database, back-end to database, others?)
- [ ] DevSecOps and/or Database have deployed the database to Azure
- [ ] DevSecOps and/or back-end have deployed the API to Azure
- [ ] DevSecOps coordinates with appropriate teams for a login system
- [ ] Testing generates user acceptance tests (automated)
- [ ] Testing and docs maintains the README and other documentation (Wiki?)

---
# Team Leads
- Steven Portillo - Front End
- Maria Ringes - Testing
- Baltej Toor - Back End
- Peter Baker - DevSecOps
- Jacob Whiteman - Database

---
# Teams
### Front-end
- Mary Wishart
- Jun Hao Chia
- Christopher Gritter
- Steven Portillo
- Rahul Whig

### Back-end
- Caroline Manghan
- Bri Fahrenkopf
- Katrina Wallace
- Baltej Toor
- Daniel Kotlinski

### Database and Analytics
- Jacob Whiteman
- Joseph Travers
- Seena Rose Mathew
- Callum Ogle
- Wiktoria Fiolek

### DevSecOps
- Adam Audet
- Kaitlin Mullins
- Peter Baker
- Phillip Kopita
- Ambioris Lora

### Testing and Documentation
- Alex Mazzarese
- Christopher Zarba
- Charlie Nathan
- Abdulahad Qureshi
- Maria Ringes
