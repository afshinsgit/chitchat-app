import { ref } from 'vue'
import { projectAuth } from '../firebase/firebase'

const error = ref<string | null>(null);

async function logout() {
  error.value = null;
  try {
    await projectAuth.signOut();
  } catch(err) {
    error.value = err.message;
  }
}

export function useLogout() {
  return { error, logout };
}