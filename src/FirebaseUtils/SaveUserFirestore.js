import { auth, db } from "../firebase";
import { collection, setDoc, doc, query, where } from "firebase/firestore"


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

async function AddNewToDo(todoTitle, todoText){
    const refTodo = collection(db, "ToDos");

    try {
        const docRef = await addDoc(refTodo, {
            todo_title: todoTitle,
            todo_text: todoText,
            user_id: auth.currentUser.uid
        });
        console.log("Todo doc created: ", docRef.id);
    }

    catch(error) {
        console.log("Error adding todo: ", error.message);
    }
}

async function fetchTodos(){
    const q = query(collection(db, "ToDos"), where("user_id", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
}


export { SaveUserToFirestore, AddNewToDo };