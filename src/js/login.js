import { defineComponent } from "vue";

export default defineComponent({
  el: "#login",
  name: "LogIn",
  data() {
    return {
      message: "",
      username: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    async login () {
      this.loading = true
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.username,
            password: this.password,
          })
        })
        let tempUser = await response.json()
        localStorage.setItem('user',tempUser.token)
        window.location.href = '/';
      } catch(error) {
        console.log(error)
      }
      this.loading = false;
    },
  },
  mounted() {
    this.message = "Login";
  },
});