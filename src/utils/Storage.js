import firebase from 'firebase';
import {firebaseConfig} from '../config';
firebase.initializeApp(firebaseConfig);
class Storage {
    constructor() {
        this.ref = firebase.storage().ref();
    }

    uploadImage(files) {
        const file = files[0];
        const task = this.ref.child(file.name).put(file, { contentType: file.type });
        return task;
    }
}

export default Storage;