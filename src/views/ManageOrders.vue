<template id="manageOrders">
  <FooterBar />
  <div class="bg">
  <NavBar />

  <div class="bg-light border border-1 rounded container body-container">
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>

  <div class="input-group rounded container mt-5">
    <input
      type="search"
      v-model="searchString"
      class="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
    />
    <span class="input-group-text border-0" id="search-dropdown">
       <select name="searchBy" id="searchBy" v-model="searchBy" class="form-select" aria-label="Default select example">
         <option value="orderId">Order ID</option>
         <option value="datetimeOrderPlaced">Date Ordered</option>
         <option value="totalOrderPrice">Total Order Price</option>
      </select>
      
    </span>
    <button class="btn btn-primary btn-sm" onclick="location.href='/addOrder'">
      Create Order
    </button>
  </div>

  <table summary="Manage Orders table" class="table table-hover container mt-5 bottomMargin">
    <thead>
      <tr>
        <th scope="col">Order ID</th>
        <th scope="col">Customer</th>
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
  </div>

</template>

<script src="../js/manageOrders.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottomMargin {
  margin-block: 10rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
