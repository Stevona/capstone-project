/* eslint-disable */
import { defineComponent } from "vue";

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
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return false;
      }
      else{
        alert("Please Enter a Valid Email")
        return true
      }
  },
    hasNumberName() {
      if(/\d/.test(this.firstName)){
        alert("First Name has Numbers!")
        return true;
      }
      else if(/\d/.test(this.middleName)){
        alert("Middle Name has Numbers!")
        return true;
      }
      else if(/\d/.test(this.lastName)){
        alert("Last Name has Numbers!")
        return true;
      }
      else{
        return false;
      }
  },
    
    validatePhone() {
      if (/\D/.test(this.phone)) {
        alert("Please Enter a Valid Phone Number")
        return true;
      }
      else{
        return false
      }
  },

    async submit () {
      if(this.firstName == "" ||
      this.lastName == "" ||
      this.hasNumberName() ||
      this.phone == "" ||
      this.validatePhone() ||
      this.validateEmail() ||
      this.address == "" ||
      this.city == "" ||
      this.regionStateProv == "" ||
      this.country == "" ||
      this.zip == "") {
        alert("Input Validation Failed")
        return;
      }
      this.loading = true
      try {
        const response = await fetch('/api/customers', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('user'),
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
    this.message = "Create new Customer";
  },
});