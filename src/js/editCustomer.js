import { defineComponent } from "vue";

export default defineComponent({
  el: "#editCustomer",
  name: "editCustomer",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.message = "editCustomer";
  },
});