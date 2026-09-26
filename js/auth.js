import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Register
export async function registerUser(email, password) {
  try {
    const userCredential =
      await createUserWithEmailAndPassword(auth, email, password);

    alert("Registration Successful");
    return userCredential.user;

  } catch (error) {
    alert(error.message);
  }
}

// Login
export async function loginUser(email, password) {
  try {
    const userCredential =
      await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful");
    window.location.href = "index.html";

  } catch (error) {
    alert(error.message);
  }
}

// Logout
export async function logoutUser() {
  await signOut(auth);
  alert("Logged Out");
  window.location.href = "login.html";
}
