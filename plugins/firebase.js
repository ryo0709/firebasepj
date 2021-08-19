import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyD5XVsIsY3DYAoWmrryXpYe6QC33nLPMQ4",
  authDomain: "fir-pj-305a2.firebaseapp.com",
  projectId: "fir-pj-305a2",
  storageBucket: "fir-pj-305a2.appspot.com",
  messagingSenderId: "1016646261298",
  appId: "1:1016646261298:web:49551c4a0ad049051afa2b",
  measurementId: "G-8GETG3G6DE"
    }
  )
}
  
export default firebase