import { defineComponent } from "vue";

export default defineComponent({
  el: "#manageCustomers",
  name: "manageCustomers",
  data() {
    return {
      message: "",
      customers: [],
      searchString: null,
      searchBy: "firstName",
    };
  },
  computed: {
    resultCustomers() {
      if (this.searchString) {
        return this.customers.filter(customer => {
          return this.searchString
            .toLowerCase()
            .split(" ")
            .every(v => customer[this.searchBy].toLowerCase().includes(v));
        });
      } else {
        return this.customers;
      }
    }
  },
  methods: {
    async getCustomers () {
      try {
        const response = await fetch('/api/customers', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('user'),
          },
        })
        this.customers = await response.json()
      } catch(error) {
        if(error.toString().includes('Unexpected token')) {
          localStorage.removeItem('user')
          alert('Please Relogin session has expired')
          window.location.href = '/login';
        }
        console.log(error)
      }
    },
  },
  mounted() {
    this.message = "Manage Customers";
    this.getCustomers()
  },
});