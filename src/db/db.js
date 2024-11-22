import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxyYT12XvVWqcOwtdlCaL1KJKN8AQwk5A",
  authDomain: "ecommerce-santiagocorrea.firebaseapp.com",
  projectId: "ecommerce-santiagocorrea",
  storageBucket: "ecommerce-santiagocorrea.firebasestorage.app",
  messagingSenderId: "21045184491",
  appId: "1:21045184491:web:0ef40f1f2d07beeece7bae",
  measurementId: "G-TK4LWQL58K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para obtener productos
const getProducts = async (category = '') => {
  const productsCollection = collection(db, "products");
  let q;

  if (category) {
    q = query(productsCollection, where("category", "==", category));
  } else {
    q = query(productsCollection);
  }

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Exports nombrados
export { db, getProducts };