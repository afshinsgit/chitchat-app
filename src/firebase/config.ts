interface FirebaseConfig {
  apiKey: string; 
  authDomain: string; 
  projectId: string; 
  storageBucket: string; 
  messagingSenderId: string; 
  appId: string; 
}

export const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_API_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_API_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_API_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_API__MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};
