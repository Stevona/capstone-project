<template id="DashBoard">
  <NavBar />
    <div class="dashboard-main">
      <h1>{{name}}</h1>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
            <h3>Recent Orders</h3>
          </div>
          <div class="col-md-auto ">
            <h3>Quick Links</h3>
              <button type="button" class="ql-btn col-md-auto">Create Customer</button>
              <button type="button" class="ql-btn col-md-auto">Manage Customer</button>
              <button type="button" class="ql-btn col-md-auto">Create Order</button>
              <button type="button" class="ql-btn col-md-auto">Create Customer</button>
              <button type="button" class="ql-btn col-md-auto">Manage Customer</button>
              <button type="button" class="ql-btn col-md-auto">Create Order</button>
              <button type="button" class="ql-btn col-md-auto">Create Customer</button>
              <button type="button" class="ql-btn col-md-auto">Manage Customer</button>
              <button type="button" class="ql-btn col-md-auto">Create Order</button>
          </div>
        </div>
      </div>
    </div>
  <FooterBar />
</template>

<script src="../js/dashboard.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ql-btn {
  border: 2px solid #79091c;
  background-color: #9b0c23;
  height:125px;
  width:125px;
  color: black;
  cursor:pointer;
}

.ql-btn:hover {
  background-color: #a0273b;
  color:white;
}
h1 {
  font-weight: bolder;
  color: black;
  text-shadow: 2px 2px #fdfdfd;
}
.dashboard-main {
  background-image: url("../assets/dashboard-background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* background-color: #d3ccbd; */
  height: 100%;
  width: 100%;
  position: fixed;

  padding: 1vh;
}
</style>
