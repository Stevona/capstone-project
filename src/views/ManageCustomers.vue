<template id="manageCustomers">
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
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="address">Address</option>
        <option value="phone">Phone</option>
        <option value="email">Email</option>
      </select>
      
    </span>
    <button class="btn btn-primary btn-sm" onclick="location.href='/addcustomer'">
        Create Customer
    </button>
  </div>
  <table summary="Manage Customers table" class="table table-hover container mt-5 bottomMargin">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">Recent Order ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(customer, index) in resultCustomers" :key="index">
        <th scope="row">
          <router-link :to="{ name: 'DetailCustomer', params: { id: customer.customerId }}">{{customer.firstName}} {{customer.lastName}}</router-link>
        </th>
        <td>{{customer.address}}, {{customer.city}}, {{customer.region}}, {{customer.country}}, {{customer.zip}}</td>
        <td>{{customer.phone}}</td>
        <td>{{customer.email}}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
</template>

<script src="../js/manageCustomers.js"></script>

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
