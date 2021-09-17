<template>
  <form @submit.prevent="handleSubmit()">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>LOG IN</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useLogin } from '../composables/useLogin'

export default defineComponent({
  name: "LoginForm",

  setup(props, context) {

    const { error, login } = useLogin();

    const email = ref<string>('');
    const password = ref<string>('');

    async function handleSubmit() {
      await login(email.value, password.value);
      if(!error.value) {
        console.log('user logged in!');
        context.emit('login');
      }
    }
    return { email, password, error, handleSubmit }
  }
});
</script>
