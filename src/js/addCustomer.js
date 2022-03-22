import { defineComponent } from "vue";

export default defineComponent({
  el: "#addCustomer",
  name: "addCustomer",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.message = "addCustomer";
  },
});