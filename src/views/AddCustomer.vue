<template id="addCustomer">
  <NavBar />
  <div v-if="success" class="alert alert-success">
    <strong>Success!</strong> Customer has been created!
  </div>
  <div v-if="error" class="alert alert-danger">
    <strong>Error!</strong> Something went wrong! Refresh page and try again.
  </div>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
  <FooterBar />

  <form class="container mb-4" v-on:submit.prevent="onSubmit">
    <div class="row mb-3">
      <div class="col">
        <div class="form-group">
          <label for="FirstName">First Name *</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            v-model="firstName"
            aria-describedby="emailHelp"
            required
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="middleName">Middle Name</label>
          <input
            type="text"
            class="form-control"
            v-model="middleName"
            id="middleName"
            
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="lastName">Last Name *</label>
          <input
            v-model="lastName"
            type="text"
            class="form-control"
            id="lastName"
            required
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="phone">Phone Number *</label>
          <input type="tel"  v-model="phone" class="form-control" id="phone" required/>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" v-model="email" class="form-control" id="email" required/>
        </div>
      </div>
    </div>
    <div class="form-group mb-3">
      <label for="address">Address *</label>
      <input type="text"  v-model="address" class="form-control" id="address" required/>
    </div>
    <div class="row mb-3">
      <div class="col">
        <div class="form-group">
          <label for="city">City *</label>
          <input type="text" v-model="city" class="form-control" id="city" required/>
        </div>
      </div>

      <div class="col">
        <div class="form-group">
          <label for="region">Region/Province/State *</label>
          <input type="text" v-model="regionStateProv" class="form-control" id="region" required/>
        </div>
      </div>
      <div class="col">
        <div class="col-auto">
          <label for="state">Country *</label>
          <select v-model="country" class="form-select" id="inlineFormCustomSelect" required>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="zip">Zip code *</label>
          <input v-model="zip" type="text" class="form-control" id="zip" required/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="notes">Customer Notes</label>
      <input v-model="customerNotes" type="text" class="form-control" id="notes" />
    </div>
    <div class="col-auto g-10 d-flex justify-content-center" style="padding-top: 2%;">
      <input type="submit" v-on:click="submit()" class="btn btn-primary" />
    </div>
  </form>
  <div v-if="loading" class="overlay spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script src="../js/addCustomer.js"></script>

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
