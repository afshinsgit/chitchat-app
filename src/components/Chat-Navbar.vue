<template>
  <nav v-if="currentUser">
    <div>
      <p>Hey there... {{ currentUser.displayName }}</p>
      <p class="email">Currently logged in as... {{ currentUser.email }}</p>
      <div class="error">{{ error }}</div>
    </div>
    <button @click="handleLogout()">Logout</button>
  </nav>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useLogout } from '../composables/useLogout'
import { getUser } from '../composables/getUser'

export default defineComponent({
  name: 'ChatNavbar',
  setup() {
    
    const { error, logout } = useLogout();
    const { currentUser } = getUser();

    async function handleLogout() {
      await logout();
      if(!error.value) {
        console.log('user logged out!');
      }
    }

    return {error, currentUser, handleLogout}
  },

})
</script>


<style>
nav {
  padding: 20px;
  border-bottom: 0px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}

nav p.email {
  font-size: 15px;
  color: rgb(75, 34, 34);
}

</style>