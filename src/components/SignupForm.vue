<template>
  <form @submit.prevent="handleSubmit()">
    <input type="text" required placeholder="Username" v-model="username">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <button>SIGN UP</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "Home",
  setup() {
    const username = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');

    function handleSubmit() {
      console.log(username.value, email.value, password.value);
    }

    return { username, email, password, handleSubmit }
  }
});
</script>
