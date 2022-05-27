
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
    username=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcom, "+ username+ "😀";

    function addRoom(){
          roomName=document.getElementById("room_name").value;
          firebase.database().ref("/").child(roomName).update({
                purpose:"add in room name"
          });
          localStorage.setItem("RoomName", roomName);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("RoomName");
      window.location="index.html";
}