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
      success: false,
    };
  },
  methods: {
    async login () {
      if(this.username == "" ||
      this.password == ""){
        alert("Enter a valid username and password")
        return
      }

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
        if(response.status == 200) {
          this.success = true;          
        }
        else{
          this.username == ""
          this.password == ""
          alert("Invalid Credentials")
          
        }
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