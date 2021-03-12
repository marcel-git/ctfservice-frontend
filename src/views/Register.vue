<template>
  <div class="login">
    <img src="../assets/icon.png" width="10%"/>
    <br>
    <input v-model="user.username" type="text" class="css-input" placeholder="Username"/>
    <br>
    <input v-model="user.email" type="email" class="css-input" placeholder="Mail">
    <br>
    <input v-model="user.password" type="password" class="css-input" placeholder="Password"/>
    <div id="submit">
      <a href="#" class="myButton" v-on:click="handleRegister">Register</a>
    </div>
    <div v-if="message" class="notification">{{message}}</div>
  </div>
</template>

<script>
import User from '../model/User'

export default {
  name: "Register",
  data() {
    return {
      user: new User('','',''),
      submitted: false,
      successful: false,
      message:''
    }
  },
  computed: {
    loggedIn(){
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if(this.loggedIn) {
      this.$router.push('/profile')
    }
  },
  methods: {
    handleRegister() {

      if (this.user.username && this.user.password) {
        this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
              this.$store.dispatch('auth/login', this.user);
              this.$router.push('/profile')
            },
            error => {
              this.message = error.response.data.message;
              this.successful = false;
              console.log(error.response.data)
            }
        );
      }
    }
  }
}
</script>

<style scoped>

.login{
  text-align: center;
}

img {
  padding-top: 2%;

}

.notification {
  background: #e06c75;
  padding: 10px;
  border-radius: 20px;
  width: 20%;

}

.css-input {
  padding: 10px;
  font-size: 16px;
  border-width: 0px;
  background-color: #2f343d;
  color: #F0FFFF;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(66,66,66,.75);
  text-shadow: 0px 0px 5px rgba(66,66,66,.75);
  margin-top: 0.5%;
  width: 20%;
}
.css-input:focus {
  outline:none;
}

.myButton {
  background-color:#42b983;
  border-radius:20px;
  display:inline-block;
  cursor:pointer;
  color: azure;
  font-family:Arial;
  font-size:17px;
  padding:16px 31px;
  text-decoration:none;
}
.myButton:hover {
  background-color:#F0FFFFFF;
  color: #2F343D;
}
.myButton:active {
  position:relative;
  top:1px;
}

#submit {
  padding-top: 1%;
  padding-bottom: 1%;
}
</style>