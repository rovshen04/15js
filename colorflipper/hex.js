
const a = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","E","F"];
const current = document.querySelector("#color");
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(){
    var hex = "#";
    for(let i=0; i<6;i++)
        hex+=a[Math.floor(Math.random()*16)];
    document.querySelector('body').style.backgroundColor = hex;
    current.textContent = hex;
})