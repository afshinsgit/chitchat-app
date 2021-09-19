import { ref } from 'vue'
import { projectAuth } from '../firebase/firebase'

const currentUser = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(user => {
  currentUser.value = user;
});

export function getUser() {
  return { currentUser };
}