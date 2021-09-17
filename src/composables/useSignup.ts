import { ref } from 'vue'
import { projectAuth } from '../firebase/firebase'

const error = ref<string | null>(null);

async function signup(email: string, password: string, username: string) {
  error.value = null;
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(email, password);
    if(!response) {
      throw new Error('Could not complete sign up');
    }
    response.user?.updateProfile({displayName: username});
    error.value = null;
    return response;
  } catch(err) {
    console.log(err.message);
    error.value = err.message;
  }
}

export function useSignup() {
  return { error, signup };
}