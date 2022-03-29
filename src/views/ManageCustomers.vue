<template id="manageCustomers">
  <NavBar />
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
  <FooterBar />

  <div class="input-group rounded container mt-5">
    <input
      type="search"
      v-model="searchString"
      class="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
    />
    <span class="input-group-text border-0" id="search-addon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>
    </span>
    <button class="btn btn-primary btn-sm" onclick="location.href='/addcustomer'">
        Create Customer
    </button>
  </div>
  <table summary="Manage Customers table" class="table table-hover container mt-5">
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
          <router-link :to="{ name: 'EditCustomer', params: { id: customer.customerId }}">{{customer.firstName}} {{customer.lastName}}</router-link>
        </th>
        <td>{{customer.address}}, {{customer.city}}, {{customer.region}}, {{customer.country}}, {{customer.zip}}</td>
        <td>{{customer.phone}}</td>
        <td>{{customer.email}}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script src="../js/manageCustomers.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
