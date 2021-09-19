<template>
  <div class="chat-container">
    <Navbar></Navbar>
  </div>
</template>


<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import Navbar from '../components/Navbar.vue'
import { useRouter } from 'vue-router'
import { getUser } from '../composables/getUser'

export default defineComponent({
  name: 'Chatroom',
  components: { Navbar },
  setup() {

    const router = useRouter();
    const { currentUser } = getUser();

    watchEffect(() => {
      if(!currentUser.value) {
        router.push({name: 'Home'})
      }
    });

    return  { currentUser }
  },
})
</script>


<style>
.chat-container {
  width: 100%;
  max-width: 1000px;
  margin: 80px auto;
  border-radius: 10px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
  color: rgb(0, 0, 0);
  background: rgb(255, 255, 255);
}

</style>