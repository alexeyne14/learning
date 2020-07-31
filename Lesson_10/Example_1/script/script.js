let name; 
let phone; 
let mail;

function userName(name){
    if(name !== null){
        return true;
    }else{
        return false;    
    }
}

function userPhone(phone){
    if(phone.length >= 6){
        return true;
    }else{
        return false;
    }
}

function userMail(mail){
    if(mail.split("").indexOf("@") >= 1 && mail.split("").indexOf(".") >= 1){
        return true;
    }else{
        return false;
    }
}
while(true){
    name = prompt("Имя");
    phone = prompt("Телефон");
    mail = prompt("Адрес");
    if(userName(name) == true && userPhone(phone) == true && userMail(mail) == true){
        alert("Все правильно");
        break;
    }else{
        alert("name = " + userName(name) + " " + name + " \n" + "phone = " + userPhone(phone) + " " + phone + " \n" + "mail = " + userMail(mail) + " " + mail);
    } 
}