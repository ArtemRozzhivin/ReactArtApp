// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDr22pwL6YAIh3MEK_Z9AFvPpyc21HFgZ8',
  authDomain: 'react-art-app-4eaa4.firebaseapp.com',
  projectId: 'react-art-app-4eaa4',
  storageBucket: 'react-art-app-4eaa4.appspot.com',
  messagingSenderId: '442692931175',
  appId: '1:442692931175:web:32ffa1d6885ca8cb880ec2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
