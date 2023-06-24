import { getFirestore } from "firebase/firestore";
import app from './fb.js';

const db = getFirestore(app);

export default db;

