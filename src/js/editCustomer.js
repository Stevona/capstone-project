/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  el: "#editCustomer",
  name: "editCustomer",
  data() {
    return {
      message: "",
      customer: [],
      customerId: this.$route.params.id,
      success: false,
      error: false,
      loading: false,
    };
  },
  created() {
    this.getCustomer()
  },
  methods: {
    async getCustomer () {
      try {
        const response = await fetch('/api/customers/' + `/${this.customerId}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        this.customer = await response.json()
      } catch(error) {
        console.log(error)
      }
    },
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.customer.email)) {
        return false;
      }
      else{
        alert("Please Enter a Valid Email")
        return true
      }
  },
    hasNumberName() {
      if(/\d/.test(this.customer.firstName)){
        alert("First Name has Numbers!")
        return true;
      }
      else if(/\d/.test(this.customer.middleName)){
        alert("Middle Name has Numbers!")
        return true;
      }
      else if(/\d/.test(this.customer.lastName)){
        alert("Last Name has Numbers!")
        return true;
      }
      else{
        return false;
      }
  },
    
    validatePhone() {
      if (/\D/.test(this.customer.phone)) {
        alert("Please Enter a Valid Phone Number")
        return true;
      }
      else{
        return false
      }
  },
    async submit () {
      if(this.customer.firstName == "" ||
      this.customer.lastName == "" ||
      this.hasNumberName() ||
      this.customer.phone == "" ||
      this.validatePhone() ||
      this.validateEmail() ||
      this.customer.address == "" ||
      this.customer.city == "" ||
      this.customer.regionStateProv == "" ||
      this.customer.country == "" ||
      this.customer.zip == "") {
        alert("Input Validation Failed")
        return;
      }
      this.loading = true
      try {
        const response = await fetch('/api/customers/' + `/${this.customerId}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.customer)
        })
        if(response.status == 200) {
          this.success = true;
        }
      } catch(error) {
        console.log(error)
        this.error = true;
      }
      this.loading = false;
    },
  },
  mounted() {
    this.message = "Edit Customer";
  },
});