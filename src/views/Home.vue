<template>
  <div class="home container">
    <h3>Welcome to ChitChat</h3>
    <div v-if="showLogin">
      <h5>Log in to your account</h5>
      <LoginForm @login="redirectToChatroom()"></LoginForm>
      <hr>
      <p>Don't have an account? <span @click="showLogin = false">Sign up</span></p>
    </div>
    <div v-else>
      <h5>Create an account</h5>
      <SignupForm @signup="redirectToChatroom()"></SignupForm>
      <hr>
      <p>Have an account? <span @click="showLogin = true">Log in</span></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { SignupForm, LoginForm },
  name: 'Home',
  setup() {
    const showLogin = ref<boolean>(true);
    const router = useRouter();

    function redirectToChatroom() {
      router.push({name: 'Chatroom'});
    }
    
    return { showLogin, router, redirectToChatroom }
  }
});
</script>

<style>
.home {
  width: 100%;
  text-align: center;
  padding: 10px 0;
}
/* form styles */
.home form {
  width: 100%;
  margin: 10px auto;
}
.home input {
  width: 80%;
  padding: 10px 10px;
  box-sizing: border-box;
  border: 1px solid rgb(139, 139, 139);
  outline: none;
  color: rgb(37, 37, 37);
  margin: 10px auto;
  text-align: left;
}
.home button {
  width: 80%;
  margin: 10px auto;
}
.home span {
  color: rgb(60, 111, 252);
  cursor: pointer;
  font-weight: bold;
}
.home span:hover {
  text-decoration: underline;
}
.home hr {
  width: 80%;
  color: rgba(150, 150, 150, 0.384);
}
.home p {
  font-size: 15px;
}
</style>
