import { defineComponent } from "vue";
import {customerUrl} from "./config";

export default defineComponent({
  el: "#manageCustomers",
  name: "manageCustomers",
  data() {
    return {
      message: "",
      customers: [],
    };
  },
  created() {
    this.getCustomers()
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
  },
});