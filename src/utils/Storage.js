import firebase from 'firebase';
import {firebaseConfig} from '../config';

class Storage {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.ref = firebase.storage().ref();
    }

    uploadImage(files) {
        const file = files[0];
        const task = this.ref.child(file.name).put(file, { contentType: file.type });
        task.then(function(snapshot) {
            console.log(snapshot.downloadURL);
        });
    }
}

export default Storage;