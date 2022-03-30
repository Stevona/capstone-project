<template>

<div class="login-main">
  <div class="row div-to-align d-flex justify-content-center align-items-center" style="margin-right: 0px;margin-left: 0px;">
    <div class="d-flex justify-content-center align-items-center flex-column"> 
      <div class = "login-form rounded-3 pt-3 pb-3 d-flex justify-content-center align-items-center flex-column">
        <img class="logo" src="../assets/stonecap.png" alt="">
        <div class="d-inline-flex p-2 bd-highlight">
          <form class="container" v-on:submit.prevent="onSubmit">
            <div class="form-group">
              <label for="username">Username</label>
              <input v-model="username" type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Username">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <!-- <div class="form-group form-check">
              <div class="d-flex flex-row bd-highlight">
                <div  class="p-2 bd-highlight mr-2">
                  <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <div  class="p-2 bd-highlight d-flex justify-content-end mx-2">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                </div>
              </div>
            </div>  -->
            <button v-on:click="login()" type="submit" class="ql-btn mt-3">Log In</button>
            <div v-if="loading" class="overlay spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<FooterBar />
</template>

<script src="../js/login.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
.logo {
  width: 50%;
}
h3 {
  margin: auto;
}

.ql-btn {
  border: 2px solid #79091c;
  background-color: #9b0c23;
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
.login-main {
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

.login-form {
    background-color: #fdfdfd;
    border-style: outset;

}
.div-wrapper {
    height: 200px;
    margin-top: 40px;
}

.div-to-align {
    width: 100%;
    height: 80%;
    /* padding: 250px 20px; */
}
</style>