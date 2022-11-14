
/*alert("hi!");*/

let mobileLinks = document.querySelector('.mobile-nav-links-container');




let show = true;


let toggleFunction = () => {

  if(show){
  mobileLinks.style.display = "flex";
  show = false;

} else {
    mobileLinks.style.display = "none";
    show = true;
}

} //toggleFunction





/*
let top = document.querySelector('.toggle-top');


let toggleTop = ()=> {

 window.scrollTo({
   top: 0,
   behavior: 'smooth',
 });

}


*/