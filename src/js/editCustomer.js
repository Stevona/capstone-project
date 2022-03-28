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
        const response = await fetch(process.url.API_URL + 'customers/' + `/${this.customerId}`, {
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
    async submit () {
      this.loading = true
      try {
        const response = await fetch(process.url.API_URL + 'customers/' + `/${this.customerId}`, {
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
    this.message = "editCustomer";
  },
});