<template id="navBar">
  <nav>
    <div class="px-3 py-2 ">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a class="d-flex navbar-brand align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none" href="/">
            <img width="150" alt="alt message" class="your-logo-css-class" src="@/assets/stonecap.png"/>
          </a>
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/" class="nav-link text-black">
                <img src="../assets/navbar_icon/dashboard.png" class="bi d-block mx-auto mb-1" alt="">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-black dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/navbar_icon/customer.png" class="bi d-block mx-auto mb-1" alt="">
                Customers
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/addCustomer">Create New Customer</a></li>
                <li><a class="dropdown-item" href="/manageCustomers">Manage Customers</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-link text-black dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/navbar_icon/orders.png" class="bi d-block mx-auto mb-1" alt="">
                Orders
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/addOrder">Create New Order</a></li>
                <li><a class="dropdown-item" href="/manageOrders">Manage Orders</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-link text-black dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/navbar_icon/profile.png" class="bi d-block mx-auto mb-1" alt="">
                Profile
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://www.youtube.com/watch?v=xvFZjo5PgG0">John Paxton</a></li>
                <li><a class="dropdown-item" href="/login">Log off</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #d3ccbd;
}
</style>
