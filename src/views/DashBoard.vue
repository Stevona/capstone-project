<template id="DashBoard">
  <NavBar />
    <div class="dashboard-main">
      <h1>{{name}}</h1>
      <div class="container">
        <div class="d-flex flex-row flex-wrap justify-content-between pt-5">
          <div class="d-flex flex-column flex-wrap">
            <div class="m-3">
              <h2>Recent Orders</h2>
            </div>
          </div>

          <div class="d-flex flex-column flex-wrap">
            <div class="m-3">
              <h2>Quick Links</h2>
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
h2 {
  margin: auto;
  filter: drop-shadow(1px 1px white);
}

.ql-btn {
  /* border: 2px solid #79091c; */
  background: #D10061;
  height:125px;
  width:125px;
  color: white;
  cursor:pointer;
  /* filter: drop-shadow(1px 1px white) */
}

.ql-btn:hover {
  transform: scale(1.1);
  
}
h1 {
  font-weight: bolder;
  color: black;
  filter: drop-shadow(1px 1px white)
}
.dashboard-main {
  background-image: url("../assets/flipped-dashboard-background.jpg");
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
