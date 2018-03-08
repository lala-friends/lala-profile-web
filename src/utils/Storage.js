import firebase from 'firebase';
import {firebaseConfig} from '../config';
firebase.initializeApp(firebaseConfig);

// TODO: test code 작성
export const uploadImage = (file) => {
    const task = firebase.storage().ref().child(file.name).put(file, { contentType: file.type });
    return task;
}
