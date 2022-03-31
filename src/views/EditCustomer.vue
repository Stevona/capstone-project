<template id="editCustomer">
  <FooterBar />

    <div class="bg">
  <NavBar />

  <div class="bg-light border border-1 rounded container body-container">
  <div v-if="success" class="alert alert-success">
    <strong>Success!</strong> Customer has been updated!
  </div>
  <div v-if="error" class="alert alert-danger">
    <strong>Error!</strong> Something went wrong! Refresh page and try again.
  </div>

  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
  <form class="container mb-4" v-on:submit.prevent="onSubmit">
    <div class="row mb-3">
      <div class="col">
        <div class="form-group">
          <label for="FirstName">First Name</label>
          <input
            v-model="customer.firstName"
            type="text"
            class="form-control"
            id="firstName"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="middleName">Middle Name</label>
          <input v-model="customer.middleName" type="text" class="form-control" id="middleName" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input v-model="customer.lastName" type="text" class="form-control" id="lastName" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input v-model="customer.phone" type="tel" class="form-control" id="phone" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="customer.email" type="email" class="form-control" id="email" />
        </div>
      </div>
    </div>
    <div class="form-group mb-3">
      <label for="address">Address</label>
      <input v-model="customer.address" type="text" class="form-control" id="address" />
    </div>
    <div class="row mb-3">
      <div class="col">
        <div class="form-group">
          <label for="city">City</label>
          <input v-model="customer.city" type="text" class="form-control" id="city" />
        </div>
      </div>

      <div class="col">
        <div class="form-group">
          <label for="region">Region/Province/State</label>
          <input v-model="customer.region" type="text" class="form-control" id="region" />
        </div>
      </div>
      <div class="col">
        <div class="col-auto">
          <label for="state">Country</label>
          <select  v-model="customer.country" class="form-select" id="inlineFormCustomSelect">
            <option value="N/A">N/A</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="zip">Zip code</label>
          <input v-model="customer.zip" type="text" class="form-control" id="zip" />
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="notes">Customer Notes</label>
      <input v-model="customer.customerNotes" type="text" class="form-control" id="notes" />
    </div>
    <div class="col-auto g-10 d-flex justify-content-center" style="padding-top: 2%;">
      <router-link style="padding-right:5%" :to="{ name: 'DetailCustomer', params: { id: customerId }}">
        <button class="btn btn-primary mr-2" id="backButton">
          Back to Detail Page
        </button>
      </router-link>
      <input type="submit" v-on:click="submit()" class="btn btn-primary" />
    </div>
  </form>
  <div v-if="loading" class="overlay spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  </div>
  </div>
</template>

<script src="../js/editCustomer.js"></script>

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
label {
  font-weight: bold;
  text-decoration: underline;
}
</style>
