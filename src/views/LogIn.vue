<template>

 <div class="login-main">
   <div class="row">
        <div class="div-to-align">
    <div class="div-wrapper d-flex bd-highlight justify-content-center align-items-center"> 
       
  <div class = "login-form">
      <div class="d-inline-flex p-2 bd-highlight">
    <form class="container">
     <div class="form-group">
      <label for="username">Username</label>
       <input type="email" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username">
     </div>
     <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
     </div>
     <div class="form-group form-check">
         <div class="d-flex flex-row bd-highlight">
             <div  class="p-2 bd-highlight mr-2">
      <label class="form-check-label" for="exampleCheck1">Remember Me</label>
      </div>
      <div  class="p-2 bd-highlight d-flex justify-content-end mx-2">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      </div>
      </div>
     </div>
     <button type="submit" class="ql-btn">Log In</button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
 </div>
 <FooterBar />
</template>

<script>
export default {

}
</script>

<style> 
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
    width: 75%;
    padding: 250px 20px;
 
    /* .... */
}
 




</style>