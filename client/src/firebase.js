import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    // apiKey: "AIzaSyBw6gDwpt-ryvVo3x6-dIdhIoKFNB3FA5g",
    // authDomain: "dashtest-7cb07.firebaseapp.com",
    // databaseURL: "https://dashtest-7cb07.firebaseio.com",
    // projectId: "dashtest-7cb07",
    // storageBucket: "dashtest-7cb07.appspot.com",
    // messagingSenderId: "541191639978",
    // appId: "1:541191639978:web:77ba0cf5df3174468451d3"
    apiKey: "AIzaSyBA8Oj4PDbc826IzdhGDDU579yJ2pL3N9o",
    authDomain: "serviiotest.firebaseapp.com",
    projectId: "serviiotest",
    storageBucket: "serviiotest.appspot.com",
    messagingSenderId: "199172448030",
    appId: "1:199172448030:web:c83109d3e1e9101e3ff30f",
    measurementId: "G-QL4CWBDQQJ"
})

export const config = {
    // apiKey: "AIzaSyBw6gDwpt-ryvVo3x6-dIdhIoKFNB3FA5g",
    // authDomain: "dashtest-7cb07.firebaseapp.com",
    // databaseURL: "https://dashtest-7cb07.firebaseio.com",
    // projectId: "dashtest-7cb07",
    // storageBucket: "dashtest-7cb07.appspot.com",
    // messagingSenderId: "541191639978",
    // appId: "1:541191639978:web:77ba0cf5df3174468451d3"
    apiKey: "AIzaSyBA8Oj4PDbc826IzdhGDDU579yJ2pL3N9o",
    authDomain: "serviiotest.firebaseapp.com",
    projectId: "serviiotest",
    storageBucket: "serviiotest.appspot.com",
    messagingSenderId: "199172448030",
    appId: "1:199172448030:web:c83109d3e1e9101e3ff30f",
    measurementId: "G-QL4CWBDQQJ"
}

export const auth = app.auth();
export default app