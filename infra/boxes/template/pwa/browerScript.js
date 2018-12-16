const script=document.createElement("script");
script.src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.body.appendChild(script);

function post(){
  $.ajax({
    method:"POST",
  	url:'http://localhost:3000/db/user/?action=createAccount',
    contentType:"application/x-www-form-urlencoded",
    success:function(data){
      console.log(data)
    }
  })
}

function get(){
  $.ajax({
    method:"GET",
  	url:'http://localhost:3000/db/user',
  	data:{
  		action:"createAccount"
  	},
    success:function(data){
      console.log(data)
    }
  })
}
