<template>
  <div class="home container">
    <h3>Home</h3>
    <div v-if="showLogin">
      <h5>Log in to your account</h5>
      <LoginForm></LoginForm>
      <hr>
      <p1>Don't have an account? <span @click="showLogin = false">Sign up</span></p1>
    </div>
    <div v-else>
      <h5>Create an acount</h5>
      <SignupForm></SignupForm>
      <hr>
      <p1>Have an account? <span @click="showLogin = true">Log in</span></p1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'

export default defineComponent({
 components: { SignupForm, LoginForm },
 setup() {
   const showLogin = ref<boolean>(true);
   
   return { showLogin }
 }
});
</script>

<style>
.home {
  text-align: center;
  padding: 15px 0;
}
</style>
