// Import the functions you need from the SDKs you need
const { initializeApp , applicationDefault} = require("firebase-admin/app");
const {getFirestore} = require('firebase-admin/firestore')
require('dotenv').config()

// Initialize Firebase
initializeApp({
    credential: applicationDefault()
});
const db = getFirestore();

module.exports = db
