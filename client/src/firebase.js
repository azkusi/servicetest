import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBw6gDwpt-ryvVo3x6-dIdhIoKFNB3FA5g",
    authDomain: "dashtest-7cb07.firebaseapp.com",
    databaseURL: "https://dashtest-7cb07.firebaseio.com",
    projectId: "dashtest-7cb07",
    storageBucket: "dashtest-7cb07.appspot.com",
    messagingSenderId: "541191639978",
    appId: "1:541191639978:web:77ba0cf5df3174468451d3"
})

export const config = {
    apiKey: "AIzaSyBw6gDwpt-ryvVo3x6-dIdhIoKFNB3FA5g",
    authDomain: "dashtest-7cb07.firebaseapp.com",
    databaseURL: "https://dashtest-7cb07.firebaseio.com",
    projectId: "dashtest-7cb07",
    storageBucket: "dashtest-7cb07.appspot.com",
    messagingSenderId: "541191639978",
    appId: "1:541191639978:web:77ba0cf5df3174468451d3"
}

export const auth = app.auth();
export default app