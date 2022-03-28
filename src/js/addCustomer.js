import { defineComponent } from "vue";
import {customerUrl} from "./config";

export default defineComponent({
  el: "#addCustomer",
  name: "addCustomer",
  data() {
    return {
      message: "",
      firstName: "",
      middleName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      regionStateProv: "",
      country: "",
      zip: "",
      customerNotes: "",
      success: false,
      error: false,
      loading: false,
    };
  },
  methods: {
    async submit () {
      if(this.firstName == "" ||
      this.lastName == "" ||
      this.phone == "" ||
      this.email == "" ||
      this.address == "" ||
      this.city == "" ||
      this.regionStateProv == "" ||
      this.country == "" ||
      this.zip == "") {
        alert("One or more Fields Required")
        return;
      }
      this.loading = true
      try {
        const response = await fetch(customerUrl, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            phone: this.phone,
            email: this.email,
            address: this.address,
            city: this.city,
            region: this.regionStateProv,
            country: this.country,
            zip: this.zip,
            customerNotes: this.customerNotes
          })
        })
        if(response.status == 201) {
          this.success = true;
          this.firstName = ""
          this.middleName = ""
          this.lastName = ""
          this.phone = ""
          this.email = ""
          this.address = ""
          this.city = ""
          this.country = ""
          this.regionStateProv = ""
          this.zip = ""
          this.customerNotes = ""
        }
      } catch(error) {
        console.log(error)
        this.error = true;
      }
      this.loading = false;
    },
  },
  mounted() {
    this.message = "Add Customer";
  },
});