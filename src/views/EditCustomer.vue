<template id="editCustomer">
  <NavBar />
  <div class="hello">
    <h1>{{message}}</h1>
  </div>
  <FooterBar />

 <form class = "container mb-4">
  <div class ="row mb-3">
      <div class="col">
        <div class="form-group">
        <label for="FirstName">First Name</label>
        <input type="firstName" class="form-control" id="firstName" aria-describedby="emailHelp">
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label for="middleName">Middle Name</label>
        <input type="middleName" class="form-control" id="middleName">
        </div>
  </div>
  <div class ="col">
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="lastName" class="form-control" id="lastName">
        </div>
  </div>
  </div>
  <div class="form-group mb-3">
    <label for="address">Address</label>
    <input type="address" class="form-control" id="address">
  </div>
  <div class="row mb-3">
    <div class="col">
      <div class="form-group">
        <label for="city">City</label>
        <input type="city" class="form-control" id="city">
    </div>
  </div>
  <div class="col">
      <div class="form-group">
        <label for="state">State/Province</label>
        <input type="state" class="form-control" id="state">
    </div>
  </div>
  <div class="col">
    <div class="col-auto">
    <label for="state">Country</label>
      <select class="form-select" id="inlineFormCustomSelect">
        <option value="1">N/A</option>
        <option value="1">Canada</option>
        <option value="2">United Kingdom</option>
        <option value="3">United States</option>
      </select>
    </div>
  </div>
  <div class="col">
      <div class="form-group">
        <label for="zip">Zip code</label>
        <input type="zip" class="form-control" id="zip">
    </div>
  </div>
  </div>
  <div class="form-group">
        <label for="notes">Customer Notes</label>
        <input type="notes" class="form-control" id="notes">
    </div>
  
</form>
<form class="row g-10 d-flex justify-content-center">
  <div class="col-auto">
    <button type="draft" class="btn btn-primary mb-1">Save as Draft</button>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>

<h3> Active Orders </h3>
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
</style>