let n=Math.random()
n=n*6+1
n= Math.floor(n)

let m=Math.random()
m=m*6+1
m= Math.floor(m)

console.log(n,m)

let dice1 = `images/dice${n}.png`;
let dice2= `images/dice${m}.png`;

if (n>m){
    document.getElementById("win").innerHTML="Player 1 Wins!";
}
else if (n<m){
    document.getElementById("win").innerHTML="Player 2 Wins!"
}
else{
    document.getElementById("win").innerHTML="It's a draw"
}

if (n==1){
    document.getElementsByClassName("img1")[0].setAttribute("src",dice1 )
}
else if(n==2){
    document.getElementsByClassName("img1")[0].setAttribute("src",dice1)
}
else if(n==3){
    document.getElementsByClassName("img1")[0].setAttribute("src",dice1)
}
else if(n==4){
    document.getElementsByClassName("img1")[0].setAttribute("src",dice1)
}
else if(n==5){
    document.getElementsByClassName("img1")[0].setAttribute("src", dice1)
}
else{
    document.getElementsByClassName("img1")[0].setAttribute("src",dice1 )
}

if (m==1){
    document.getElementsByClassName("img2")[0].setAttribute("src",dice2 )
}
else if(m==2){
    document.getElementsByClassName("img2")[0].setAttribute("src",dice2)
}
else if(m==3){
    document.getElementsByClassName("img2")[0].setAttribute("src",dice2)
}
else if(m==4){
    document.getElementsByClassName("img2")[0].setAttribute("src",dice2)
}
else if(m==5){
    document.getElementsByClassName("img2")[0].setAttribute("src", dice2)
}
else{
    document.getElementsByClassName("img2")[0].setAttribute("src",dice2 )
}
