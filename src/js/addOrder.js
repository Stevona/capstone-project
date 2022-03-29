import { defineComponent } from "vue";

export default defineComponent({
  el: "#addOrder",
  name: "addOrder",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.message = "Create new Order";
  },
});