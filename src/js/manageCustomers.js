import { defineComponent } from "vue";

export default defineComponent({
  el: "#manageCustomers",
  name: "manageCustomers",
  data() {
    return {
      message: "",
      customers: [],
      searchString: null,
    };
  },
  computed: {
    resultCustomers() {
      if (this.searchString) {
        return this.customers.filter(customer => {
          return this.searchString
            .toLowerCase()
            .split(" ")
            .every(v => customer.firstName.toLowerCase().includes(v));
        });
      } else {
        return this.customers;
      }
    }
  },
  methods: {
    async getCustomers () {
      try {
        const response = await fetch(process.url.API_URL + 'customers', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        this.customers = await response.json()
      } catch(error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.message = "manageCustomers";
    this.getCustomers()
  },
});