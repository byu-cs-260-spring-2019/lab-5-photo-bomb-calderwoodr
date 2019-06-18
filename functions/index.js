const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

const app = express();

var db = firebase.firestore();
var colRef = db.collection("quote_list");
exports.app = functions.https.onRequest(app);

// app.post('/api/post', async (req, res) => {
//     try {
//         let querySnapshot = await colRef.get();
//         let index = parseInt(querySnapshot.docs.length);
//         let numRecords = parseInt(querySnapshot.docs[index-1].id);
//         let q = {
//             id: numRecords + 1,
//             quote: req.body.quote,
//             author: req.body.author
//         }
//         colRef.doc(q.id.toString()).set(q);
//         res.send(q);
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }



// });

// app.get('/api/quotes', async (req, res) => {
//     try{
//         let querySnapshot = await colRef.get();
//         res.send(querySnapshot.docs.map(doc => doc.data()));
//     }catch(err){
//         res.sendStatus(500);
//     }
// });