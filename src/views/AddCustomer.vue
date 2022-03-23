<template id="addCustomer">
  <NavBar />
  <div class="hello">
    <h1>{{message}}</h1>
  </div>
  <FooterBar />
  
  <form class = "container mb-5">
  <div class ="row">
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
  <div class="form-group">
    <label for="address">Address</label>
    <input type="address" class="form-control" id="address">
  </div>
  <div class="row">
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
    <div class="col-auto my-1">
      
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Country</option>
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
<div>
  <button type="draft" class="btn btn-primary mb-1">Save as Draft</button>
</div>
<div>
<button type="submit" class="btn btn-primary">Submit</button>
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
</style>