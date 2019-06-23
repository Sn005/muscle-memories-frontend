import * as firebase from 'firebase'
import 'firebase/firestore'
const config = {
  // apiKey: process.env.firebaseApiKey,
  // authDomain: process.env.firebaseAuthDomain,
  // databaseURL: process.env.firebaseDatabaseURL,
  // projectId: process.env.firebaseProjectId,
  // storageBucket: process.env.firebaseStorageBucket,
  // messagingSenderId: process.env.firebaseMessagingSenderId
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export default firebase
