import { defineComponent } from "vue";

export default defineComponent({
  el: "#dashboard",
  name: "DashBoard",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    
  },
  mounted() {
    this.name = "TJX StoneCap Dashboard";
  },
});