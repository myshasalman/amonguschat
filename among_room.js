var firebaseConfig = {
    apiKey: "AIzaSyCgh0dq9D1AyuHRGvEoE0XckgkNqYLOF_U",
  authDomain: "amongus-3ba4d.firebaseapp.com",
  databaseURL: "https://amongus-3ba4d-default-rtdb.firebaseio.com",
  projectId: "amongus-3ba4d",
  storageBucket: "amongus-3ba4d.appspot.com",
  messagingSenderId: "672226891954",
  appId: "1:672226891954:web:a8c9b64333a7acccc8d1ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var username = localStorage.getItem("username");
  var roomname = localStorage.getItem("room");
  function send()
  {
        var text = document.getElementById("message").value;
        firebase.database().ref("amongusroom").push({
              usname:username,
              message:text,
        });
        document.getElementById("message").innerHTML="";
  }
function getData() { firebase.database().ref("/"+"amongusroom").on('value', function(snapshot) { document.getElementById("post").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       n= message_data["usname"];
       m= message_data["message"];
       p= "<h4>"+n+"</h4>"
       q= "<h4 class='message_h4'>"+m+"</h4>";
       t= p+q;
       document.getElementById("post").innerHTML+=t;
    } });  }); }
getData();
function logout()
{
    localStorage.removeItem("username");
    localStorage.removeItem("room");
    window.location="index.html";
    }