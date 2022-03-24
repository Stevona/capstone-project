<template id="addCustomer">
  <NavBar />
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
  <FooterBar />

  <form class="container mb-4">
    <div class="row mb-3">
      <div class="col">
        <div class="form-group">
          <label for="FirstName">First Name</label>
          <input
            type="firstName"
            class="form-control"
            id="firstName"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="middleName">Middle Name</label>
          <input type="middleName" class="form-control" id="middleName" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="lastName" class="form-control" id="lastName" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="phone" class="form-control" id="phone" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
      </div>
    </div>
    <div class="form-group mb-3">
      <label for="address">Address</label>
      <input type="address" class="form-control" id="address" />
    </div>
    <div class="row mb-3">
      <div class="col">
        <div class="form-group">
          <label for="city">City</label>
          <input type="city" class="form-control" id="city" />
        </div>
      </div>

      <div class="col">
        <div class="form-group">
          <label for="region">Region/Province/State</label>
          <input type="region" class="form-control" id="region" />
        </div>
      </div>
      <div class="col">
        <div class="col-auto">
          <label for="state">Country</label>
          <select class="form-select" id="inlineFormCustomSelect">
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
          <input type="zip" class="form-control" id="zip" />
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="notes">Customer Notes</label>
      <input type="notes" class="form-control" id="notes" />
    </div>
  </form>
  <form class="row g-10 d-flex justify-content-center">
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
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
</style>
