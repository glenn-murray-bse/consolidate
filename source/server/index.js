var firebase = require('firebase')

let config = require('../../config/firebase/consolidate-500d07e869fd')

firebase.initializeApp({
  serviceAccount: {
    projectId: config.project_id,
    clientEmail: config.client_email,
    privateKey: config.private_key
  },
  databaseURL: 'https://consolidate-f22bb.firebaseio.com'
})

// The app only has access as defined in the Security Rules
var db = firebase.database()
var ref = db.ref()
ref.on('value', function(data) {
  console.log('data', data.val())
})
