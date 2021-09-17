import { ref } from 'vue'
import { projectAuth } from '../firebase/firebase'

const error = ref<string | null>(null);

async function login(email: string, password: string) {
  error.value = null;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(email, password);
    if(!response) {
      throw new Error('Could not log in');
    }
    error.value = null;
    return response;
  } catch(err) {
    error.value = err.message;
  }
}

export function useLogin() {
  return { error, login };
}