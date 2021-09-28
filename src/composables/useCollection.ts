import { projectFirestore } from '../firebase/firebase'
import { ref } from 'vue'

export function useCollection(collection: any) {
  const error = ref<string | null>(null);

  async function addNewDocToFirestore(doc: any) {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch(err) {
      console.log(err.messagge);
      error.value = err.message; 
    }
  }

  return { error, addNewDocToFirestore };
}
