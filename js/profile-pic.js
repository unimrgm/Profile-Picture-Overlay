window.fbAsyncInit = function() {
    FB.init({
      appId      : '710118312464371',
      xfbml      : true,
      version    : 'v2.5'
    });
};

(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "http://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function loginCallback(response) {
    
    console.log("Callback executed.");
    
    if (response.authResponse) {
        console.log("Authorized :)");
    } else {
        console.log("Not authorized.");
    }
}

function login(){
    FB.login(loginCallback, {scope: "public_profile,user_photos"});
}