<template>
  <form @submit.prevent="handleSubmit()">
    <input type="text" required placeholder="Username" v-model="username">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>SIGN UP</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useSignup } from '../composables/useSignup'

export default defineComponent({
  name: "SignupForm",

  setup(props, context) {

    const { error, signup } = useSignup();

    const username = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');

    async function handleSubmit(): Promise<void> {
      await signup(email.value, password.value, username.value);
      if (!error.value) {
        console.log('user signed up!');
        context.emit('signup');
      }
    }

    return { username, email, password, error, handleSubmit }
  }
});
</script>
