import { defineComponent } from "vue";

export default defineComponent({
  el: "#detailCustomer",
  name: "detailCustomer",
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
        const response = await fetch('/api/customers/' + `${this.customerId}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('user'),
          },
        })
        this.customer = await response.json()
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
    this.message = "Customer Details";
  },
});