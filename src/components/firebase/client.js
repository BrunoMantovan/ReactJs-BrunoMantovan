import {initializeApp} from "firebase/app"
import {getFirestore, addDoc, collection} from 'firebase/firestore'
import dataArray from "../../assets/Json/vehicles.json";

const firebaseConfig = {
    apiKey: "AIzaSyCEJoZrBajjtg1497Pj5RlhcVF2eoKCN9g",
    authDomain: "react-coder-a280c.firebaseapp.com",
    projectId: "react-coder-a280c",
    storageBucket: "react-coder-a280c.appspot.com",
    messagingSenderId: "1004905448952",
    appId: "1:1004905448952:web:07a55e1a6cd6487647820d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



const productos = dataArray.results;

export async function añadirProductos() {
    productos.forEach(async (data) => {
      try {
        const productosCollection = collection(db, 'productos');
  
        await addDoc(productosCollection, data);
  
        console.log('Document successfully written!');
      } catch (error) {
        console.error('Error writing document: ', error);
      }
    });
}