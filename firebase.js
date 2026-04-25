import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4re9zFGrjr2IWgUNCb2yBDZlJ8gv4DMk",
  authDomain: "tuitiondesk-db.firebaseapp.com",
  projectId: "tuitiondesk-db",
  storageBucket: "tuitiondesk-db.firebasestorage.app",
  messagingSenderId: "703748630946",
  appId: "1:703748630946:web:d161a166a4cca98f51aafb",
  measurementId: "G-H2CZSEWJ4Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
