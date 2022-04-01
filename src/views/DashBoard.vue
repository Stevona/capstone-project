<template id="DashBoard">
  <div class="dashboard-main">
    <NavBar />
    <h1>{{ name }}</h1>
    <div class="container">
      <div class="d-flex flex-row flex-wrap justify-content-between pt-5">
        <div class="d-flex flex-column flex-wrap flex-fill">
          <div class="m-3">
            <h2>Recent Orders</h2>
          </div>
          <table summary="Recent Orders table" class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Order Status Code</th>
                <th scope="col">Date Ordered</th>
                <th scope="col">Total Order Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(order, index) in resultOrders" :key="index">
                <th scope="row">
                  <router-link :to="{ name: 'DetailOrder', params: { id: order.orderId, firstName: order.Customer.firstName, lastName: order.Customer.lastName }}">{{order.orderId}}</router-link>
                </th>
                <th scope="row">
                  <router-link :to="{ name: 'DetailCustomer', params: { id: order.Customer.customerId }}">{{order.Customer.firstName}} {{order.Customer.lastName}}</router-link>
                </th>
                <td>{{order.OrderStatusCode.orderStatusCode}}</td>
                <td>{{order.datetimeOrderPlaced}}</td>
                <td>{{order.totalOrderPrice}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-flex flex-column flex-wrap box flex-fill mb-5">
          <div class="m-3">
            <h2>Quick Links</h2>
          </div>
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-center">
              <a href="/addCustomer"
                ><button type="button" class="ql-btn col-md-auto m-1">
                  Create Customer
                </button></a
              >
              <a href="/manageCustomers"
                ><button type="button" class="ql-btn col-md-auto m-1">
                  Manage Customer
                </button></a
              >
            </div>
            <div class="d-flex justify-content-center">
              <a href="/addOrder"
                ><button type="button" class="ql-btn col-md-auto m-1">
                  Create Order
                </button></a
              >
              <a href="/manageOrders"
                ><button type="button" class="ql-btn col-md-auto m-1">
                  Manage Orders
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<script src="../js/dashboard.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: auto;
  filter: drop-shadow(1px 1px white);
}

.ql-btn {
  /* border: 2px solid #79091c; */
  background: #d10061;
  height: 125px;
  width: 125px;
  color: white;
  cursor: pointer;
  /* filter: drop-shadow(1px 1px white) */
}

.ql-btn:hover {
  transform: scale(1.1);
}

.dashboard-main {
  background: url("../assets/flipped-dashboard-background.jpg") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  min-height: 100vh;
  /* height: 100%; */
  padding: 0;
}

table {
  background-color: rgb(250, 249, 241);
}

a {
  color: #9b0c23;
}
</style>
