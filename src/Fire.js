import firebase from 'firebase/compat';

class Fire {
    constructor(){
        this.init()
        this.checkAuth()
    }
    init=()=>{
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyAiCq6p7ZjjJrEIcb1VrxGK8JaqnGXrGXY",
                authDomain: "reactnative-154bd.firebaseapp.com",
                projectId: "reactnative-154bd",
                storageBucket: "reactnative-154bd.appspot.com",
                messagingSenderId: "512107299439",
                appId: "1:512107299439:web:2ef42b15c1b71d8ea7c39a",
                measurementId: "G-M5RBNTBNZ9"
            });
        }
        
    }

    checkAuth=()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(!user){
                firebase.auth().signInAnonymously()
            }
        })
    }
    send=messages=>{
        messages.forEach(item => {
            const message={
                text:item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user:item.user
            }
            this.db.push(message)
        });
    }
    parse =message=>{
        const {user,text,timestamp}=message.val()
        const {key:_id}=message
        const createdAt=new Date(timestamp)

        return{
            _id,
            createdAt,
            text,
            user
        }
    }
    get =callback=>{
        this.db.on("child_added",snapshot=>callback(this.parse(snapshot)))
    }
    off(){
        this.db.off()
    }
    get db(){
        return firebase.database().ref("messages")
    }
    get uid(){
        return(firebase.auth().currentUser ).uid
    }

    
}

export default new Fire()