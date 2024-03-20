import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyBqr1qwbp_-sQTGdUHyBR8PjuYY-Sh7yQQ",
  authDomain: "languageexchange-66dc9.firebaseapp.com",
  projectId: "languageexchange-66dc9",
  storageBucket: "languageexchange-66dc9.appspot.com",
  messagingSenderId: "925417570128",
  appId: "1:925417570128:web:d8b20a27f8e51d6672f655",
  measurementId: "G-YP3MKJQYHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
