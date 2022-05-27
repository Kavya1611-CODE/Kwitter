
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

    Room_name=localStorage.getItem("RoomName");
    User_name=localStorage.getItem("user_name");

    function send(){
       message=document.getElementById("msg").value;
       firebase.database().ref(Room_name).push({
             name:User_name,
             msg:message,
             like:0
       });
       document.getElementById("msg")="";
           
    }

function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
         console.log(firebase_message_id);
         console.log(message_data);
         name=message_data['name'];
         message=message_data['msg'];
         like=message_data['like'];
         name_with_tag="<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag="<h4 class='message_h4'>"+ message +"</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like+"</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;

      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked like button - "+message_id);
      button_id = message_id;
      likes= document.getElementById(button_id).value;
      updated_likes= Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(Room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("RoomName");
      window.location="index.html"
}
