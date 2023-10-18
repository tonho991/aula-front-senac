
if(checkDialogClosed()){
    document.getElementById('dialog').style.display = 'none';
    document.getElementById('body-container').style.filter = "blur(0px)";
}

function closeDialog(){
    document.getElementById('dialog').style.display = 'none';
    document.getElementById('body-container').style.filter = "blur(0px)"
    setCookie();
}

function checkDialogClosed(){
    return document.cookie.indexOf('closed=true') !== -1;
}

function setCookie(){
  var expires = new Date().getTime() + 3600;
  document.cookie = "closed=true; expires=" + expires;
}