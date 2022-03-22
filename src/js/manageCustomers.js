import { defineComponent } from "vue";

export default defineComponent({
  el: "#manageCustomers",
  name: "manageCustomers",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.message = "manageCustomers";
  },
});