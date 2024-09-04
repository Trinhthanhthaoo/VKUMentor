
    $(document).ready(function(){

    $("#signup_Btn").on("click", function() {
    var emailSignup = $("#Email_signup").val();
    var passwordSignup = $("#password_signup").val();
    var usernameSignup = $("#Username_signup").val();
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/login/signup",
        data: JSON.stringify({ 
            email: emailSignup, 
            matKhau: passwordSignup,
            tenDangNhap : usernameSignup
         }),contentType: "application/json; charset=UTF-8",
    })
    .done(function( msg ) {
        console.log(msg);
       if(msg.data){
        alert("susccesfully");
       }
       else{
        alert("fail");
       }
    });

    });

    
    $("#btnLogin").on("click", function() {
    var passwordSignin = $("#txtUsername").val();
    var usernameSignin = $("#txtPassword").val();
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/login/signin",
        data: { 
            tenDangNhap : usernameSignin,
            matKhau: passwordSignin
         }
    })
    .done(function( msg ) {
       if(msg.data){
        alert("susccesfully");
       }
       else{
        alert("fail");
       }
    console.log(usernameSignin)
    console.log(passwordSignin)
    console.log(msg)
    });
});
});

