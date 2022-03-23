<template id="editCustomer">
  <NavBar />
  <div class="hello">
    <h1>{{message}}</h1>
  </div>
  <FooterBar />

  <form>
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
        <label for="city">State/Province</label>
        <input type="state" class="form-control" id="state">
    </div>
  </div>
  <div class="col">
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="country" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Country
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" >Canada</a></li>
    <li><a class="dropdown-item">United Kingdom</a></li>
    <li><a class="dropdown-item">United States</a></li>
  </div>
</div>
  </div>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
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