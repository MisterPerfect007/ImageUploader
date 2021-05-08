import firebase from 'firebase';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAijNe6YGMwoeRRsNS6S1TW5NA08Rx3KFU",
    authDomain: "tapsoba-image-uploader.firebaseapp.com",
    projectId: "tapsoba-image-uploader",
    storageBucket: "tapsoba-image-uploader.appspot.com",
    messagingSenderId: "600263058586",
    appId: "1:600263058586:web:b49799e4a70e739f336b23",
    measurementId: "G-1DCR8VRRS7"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}