<template>
  <div class="home">
    <p>ようこそ、{{this.$store.state.user_name}}さん</p>
    <img :src="this.$store.state.profile_image_url" width="50px;" height="50px;"/>
    <SignOut/>
  </div>
</template>

<script>
import firebase from 'firebase'
import SignOut from '@/components/SignOut'
export default {
  name: 'Home',
  components: {
    SignOut
  },
  created(){
    const obj = {
      profile:{

      }
    };
    obj.profile.name = firebase.auth().currentUser.providerData[0].displayName
    obj.profile.profile_image_url = firebase.auth().currentUser.providerData[0].photoURL
    this.$store.commit("setCredential", obj)
  },
  data(){
    return {
      firebase: firebase
    }
  },
  methods: {
  }
}
</script>
