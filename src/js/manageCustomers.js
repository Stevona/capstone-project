import { defineComponent } from "vue";
import {customerUrl} from "./config";

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
  created() {
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
        const response = await fetch(customerUrl, {
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