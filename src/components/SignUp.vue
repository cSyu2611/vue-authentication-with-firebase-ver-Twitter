<template>
  <div class="signup">
    <h2>Twitterアカウントと連携</h2>
    <button variant="primary" @click="signUp">連携</button>
  </div>
</template>

<script>
import firebase from "firebase";
import {providerTwitter} from '../main.js'
export default {
  name: "Signup",
  data() {
    return {
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .signInWithPopup(providerTwitter)
        .then(() => {
          this.$router.push('/')
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
