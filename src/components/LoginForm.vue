<template>
  <form @submit.prevent="handleSubmit()">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <button>LOG IN</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "Home",
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');

    function handleSubmit() {
      console.log(email.value, password.value);
    }

    return { email, password, handleSubmit }
  }
});
</script>
