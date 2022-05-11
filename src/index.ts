// Get body element

const bodyEle = document.body;


const colors:string[] = ['yellow', 'red','blue', 'gray','green', 'purple'];

const getRandomColor = function(){
    return generateRandomColor(colors);

}

const generateRandomColor = function(colors: string[]){
    const randindex = Math.floor(Math.random() * 6);
    return colors[randindex];
}

const changeColors = function(){
    bodyEle.style.backgroundColor = getRandomColor();
}

// setInterval( function(){
//     changeColors();
// }, 3000);