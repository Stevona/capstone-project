import { defineComponent } from "vue";

export default defineComponent({
  el: "#dashboard",
  name: "DashBoard",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.message = "DashBoard";
  },
});