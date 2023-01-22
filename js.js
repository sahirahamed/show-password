const cb= document.getElementById('show-hide');
const password =document.getElementById('password');

cb.addEventListener('click',()=>{

if(cb.checked == true){
password.setAttribute('type','text');
}
else{
password.setAttribute('type','password');

}

})