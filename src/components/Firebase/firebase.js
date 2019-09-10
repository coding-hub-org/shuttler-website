import Firebase from "firebase";

const config = {
  apiKey: "AIzaSyA3vvAsqGyP_c8RRkBh44JczzO9y1J0mNQ",
  authDomain: "shuttler-p001.firebaseapp.com",
  databaseURL: "https://shuttler-p001.firebaseio.com",
  projectId: "shuttler-p001",
  storageBucket: "shuttler-p001.appspot.com",
  messagingSenderId: "571374342123",
  appId: "1:571374342123:web:a036013b6e887b9e"
};

Firebase.initializeApp(config);

const getInstance = () => {
  return Firebase;
};

export const sendNotification = (title, message) => {
  getInstance()
    .firestore()
    .collection("notifications")
    .add({
      date: Date(),
      title,
      description: message
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      alert("Message was sent to all users");
    })

    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
};
export const signInWithEmailAndPassword= (email,password)=>{
    getInstance()
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(error=>{
      console.error("Error signing in:",error.code," - ",error.message);
    })
}
export const authStateChange = (fnc)=>{
  getInstance().auth().onAuthStateChanged(function(user) {
    if (user) {
      fnc(true);
      console.log("Signed in");
    } else {
      fnc(false);
      console.log("No auth");
    }
  });
}
export const signOut = ()=>{
  getInstance().auth().signOut().then(
    ()=>{console.log("Signed Out");}
  ).catch(error=>{console.error(error);})
}

export default getInstance();