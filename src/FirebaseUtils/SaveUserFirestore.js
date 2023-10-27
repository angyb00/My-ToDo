import { db } from "../firebase";
import { collection, setDoc, doc } from "firebase/firestore"


async function SaveUserToFirestore(firstName, lastName, email, uid){
    const refUser = collection(db, "Users");

    try {
        const docRef = await setDoc(doc(refUser, uid), {
            first_name: firstName,
            last_name: lastName,
            email: email
        });
        console.log("Document written: ", docRef.id);
    }
    catch(error) {
        console.log("Doc write error: ", error.message);
    }
}

export { SaveUserToFirestore };