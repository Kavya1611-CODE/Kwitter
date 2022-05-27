var firebaseConfig = {
    apiKey: "AIzaSyDixtPqhYETzuhiD7IG0pHaX2HGT0kPXhk",
    authDomain: "kwitter-eb8eb.firebaseapp.com",
    databaseURL: "https://kwitter-eb8eb-default-rtdb.firebaseio.com",
    projectId: "kwitter-eb8eb",
    storageBucket: "kwitter-eb8eb.appspot.com",
    messagingSenderId: "59094511362",
    appId: "1:59094511362:web:7262b5f53af3bcfed21c1b"
  };
  

  firebase.initializeApp(firebaseConfig);

  function addUSERname(){
      UserVar=document.getElementById("username").value;
      firebase.database().ref("/").child(UserVar).update({
          purpose:"add a user"
      });
  }
