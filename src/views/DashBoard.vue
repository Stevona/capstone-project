<template id="DashBoard">
  <NavBar />
    <div class="dashboard-main">
      <h1>{{name}}</h1>
      <div class="container">
        <div class="d-flex flex-row flex-wrap justify-content-between pt-5">
          <div class="d-flex flex-column flex-wrap">
            <div class="m-3">
              <h3>Recent Orders</h3>
            </div>
          </div>

          <div class="d-flex flex-column flex-wrap">
            <div class="m-3">
              <h3>Quick Links</h3>
            </div>
            <div class="d-flex flex-column">
              <div class="d-flex">
                <button type="button" class="ql-btn col-md-auto m-1">Create Customer</button>
                <button type="button" class="ql-btn col-md-auto m-1">Manage Customer</button>
                <button type="button" class="ql-btn col-md-auto m-1">Create Order</button>
              </div>
              <div class="d-flex">
                <button type="button" class="ql-btn col-md-auto m-1">Create Customer</button>
                <button type="button" class="ql-btn col-md-auto m-1">Manage Customer</button>
                <button type="button" class="ql-btn col-md-auto m-1">Create Order</button>
              </div>
              <div class="d-flex">
                <button type="button" class="ql-btn col-md-auto m-1">Create Customer</button>
                <button type="button" class="ql-btn col-md-auto m-1">Manage Customer</button>
                <button type="button" class="ql-btn col-md-auto m-1">Create Order</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  <FooterBar />
</template>

<script src="../js/dashboard.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: auto;
}

.ql-btn {
  border: 2px solid #79091c;
  background-color: #9b0c23;
  height:125px;
  width:125px;
  color: white;
  cursor:pointer;
}

.ql-btn:hover {
  background-color: #a0273b;
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
