
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBi6PYZOUCfn08snFxIeRNJnmO85LPkJ9k",
  authDomain: "tiktok---jornada-7b65c.firebaseapp.com",
  projectId: "tiktok---jornada-7b65c",
  storageBucket: "tiktok---jornada-7b65c.appspot.com",
  messagingSenderId: "575534678613",
  appId: "1:575534678613:web:92b97e6ef2ba110a89cadc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;