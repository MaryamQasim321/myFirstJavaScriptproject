const colors=[ "#bbe4e9", "#f48db4", "#facf5a", "#8971d0", "#7dace4", "#c50d66", "#f23557", "#f23557", "#085f63"];
const btn=document.getElementById('btn');
const color=document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber=randomnumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
}
);
function randomnumber(){
    return Math.floor(Math.random()*colors.length);
}