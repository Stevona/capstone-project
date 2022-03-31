<template id="detailCustomer">
  <NavBar />

  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
  <FooterBar />
  <form class="container mb-4" v-on:submit.prevent="onSubmit">
    <div class="row mb-3">
      <div class="col">
        <div class="form-group">
          <label for="FirstName">First Name</label>
          <input
            v-model="customer.firstName"
            type="text"
            id="firstName"
            aria-describedby="emailHelp"
            readonly class="form-control-plaintext"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="middleName">Middle Name</label>
          <input  v-model="customer.middleName" type="text" class="form-control-plaintext" id="middleName"/>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input v-model="customer.lastName" type="text" readonly class="form-control-plaintext" id="lastName"/>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input v-model="customer.phone" type="tel" readonly class="form-control-plaintext" id="phone"/>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="customer.email" type="email" readonly class="form-control-plaintext" id="email" />
        </div>
      </div>
    </div>
    <div class="form-group mb-3">
      <label for="address">Address</label>
      <input v-model="customer.address" type="text" readonly class="form-control-plaintext" id="address" />
    </div>
    <div class="row mb-3">
      <div class="col">
        <div class="form-group">
          <label for="city">City</label>
          <input v-model="customer.city" type="text" readonly class="form-control-plaintext" id="city"/>
        </div>
      </div>

      <div class="col">
        <div class="form-group">
          <label for="region">Region/Province/State</label>
          <input v-model="customer.region" type="text" readonly class="form-control-plaintext" id="region"/>
        </div>
      </div>
      <div class="col">
       <div class="form-group">
          <label for="state">Country</label>
          <input v-model="customer.country" readonly class="form-control-plaintext" id="country" />
        </div> 
      </div>
      <div class="col">
        <div class="form-group">
          <label for="zip">Zip code</label>
          <input v-model="customer.zip" type="text" readonly class="form-control-plaintext" id="zip"/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="notes">Customer Notes</label>
      <input v-model="customer.customerNotes" type="text" readonly class="form-control-plaintext" id="notes" />
    </div>
     <div class="col-auto g-10 d-flex justify-content-center" style="padding-top: 2%;">
         <button class="btn btn-primary" type="submit" id="editCustomerButton">
      <router-link :to="{ name: 'EditCustomer', params: { id: customerId }}">Edit Customer</router-link>
         </button>
    </div>
  </form>
  <div v-if="loading" class="overlay spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <h3>Active Orders</h3>
  <div>
    <table summary="Active Orders table" class="table table-hover container">
      <thead>
        <tr>
          <th scope="col">Order ID</th>
          <th scope="col">Order Status Code</th>
          <th scope="col">Date</th>
          <th scope="col">Total Order Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">24535</th>
          <td>In Progress</td>
          <td>2/22/22</td>
          <td>$420.69</td>
        </tr>
        <tr>
          <th scope="row">24535</th>
          <td>In Progress</td>
          <td>2/22/22</td>
          <td>$420.69</td>
        </tr>
        <tr>
          <th scope="row">24535</th>
          <td>In Progress</td>
          <td>2/22/22</td>
          <td>$420.69</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="../js/detailCustomer.js"></script>

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
  color: white;
}
label {
  font-weight: bold;
  text-decoration: underline;
}
</style>
