<template id="navBar">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="Customer" right>
          <b-dropdown-item href="#">Add</b-dropdown-item> 
          <b-dropdown-item href="#">Edit</b-dropdown-item>
        </b-nav-item-dropdown>
        
        <b-nav-item-dropdown text="Orders" right>
          <b-dropdown-item href="#">Add</b-dropdown-item>
          <b-dropdown-item href="#">Edit</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        

        <b-button size="sm" class="my-2 my-sm-0" type="log out">Log out</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>