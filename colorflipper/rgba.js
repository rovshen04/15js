const current = document.querySelector("#color");
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(){
    var a =  Math.floor(Math.random()*257);
    var b =  Math.floor(Math.random()*257);
    var c =  Math.floor(Math.random()*257);
    var l =  Math.random().toFixed(2);
    console.log("rgba("+a+","+b+","+c+","+l+")");
    document.querySelector('body').style.backgroundColor = "rgba("+a+","+b+","+c+","+l+")";
    current.textContent = "rgba("+a+" , "+b+" , "+c+" , "+l+")";
})