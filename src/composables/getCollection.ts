import { projectFirestore } from '../firebase/firebase'
import { ref, watchEffect } from 'vue'

export function getCollection(collection: any) {
  const error = ref<string | null>(null);
  const documents = ref<any>(null);
  const connectionRef = projectFirestore.collection(collection).orderBy('messageTimestamp');

  const unsub = connectionRef.onSnapshot(snap => {
    console.log('snapshot');
    const results: any[] = [];
    snap.docs.forEach(doc => {
      if (doc.data().messageTimestamp) {
      results.push({...doc.data(), id: doc.id });
      }
    });
    documents.value = results;
    error.value = null;
  }, (err) => {
    error.value = err.message;
    documents.value = null;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => { unsub() })
  })

  return { error, documents };
}

