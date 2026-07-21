const firebaseConfig = {
  apiKey: 'AIzaSyA1AFEhCN4CdPy_K-PiMoZKFxVUEnsJ3Gg',
  authDomain: 'labicana-168b7'.firebaseapp.com',
  projectId: 'labicana-168b7',
  storageBucket: 'labicana-168b7.firebasestorage.app',
  messagingSenderId: '190957651422',
  appId: '1:190957651422:web:2ec979d2c30861633f494f',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
