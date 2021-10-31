require('dotenv').config()
const firebaseConfig = {
    apiKey:`${process.env.procREACT_API_KEY}`,
    authDomain: "tourx-6a075.firebaseapp.com",
    projectId: "tourx-6a075",
    storageBucket: "tourx-6a075.appspot.com",
    messagingSenderId: "214392073438",
    appId: "1:214392073438:web:738695049bef6d358ca64f"
  };

export default firebaseConfig;