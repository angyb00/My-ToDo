import { auth, db } from "../firebase";
import { collection, setDoc, doc, query, where, getDoc, getDocs, addDoc } from "firebase/firestore"


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

async function fetchTodos(uid){
    const q = query(collection(db, "ToDos"), where("user_id", "==", uid));
    const querySnapshot = await getDocs(q);
    const todos = [];
  
    querySnapshot.forEach(doc => { 
        todos.push(doc);
    });
    return todos;
}

async function fetchUser(user_id){
    const snap = await getDoc(doc(db, "Users", user_id));
    if (snap) {
        return snap.data();
    }
    else {
        console.log("Failed fetch of user.");
    }
}

export { SaveUserToFirestore, AddNewToDo, fetchTodos, fetchUser };