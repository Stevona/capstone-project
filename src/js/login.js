import { defineComponent } from "vue";

export default defineComponent({
  el: "#login",
  name: "LogIn",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.message = "Login";
  },
});