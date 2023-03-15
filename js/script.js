
let list = document.querySelector('.list');


let prodList = [
    'prosciutto',
    'latte',
    'pane',
    'fragole',
    'uova',
    'sale',
    'pomodoro',
    'sapone',
    'dentifricio'
];





let counter = 0;


while (counter < prodList.length){
    let li = document.createElement('li');
    li.innerHTML = prodList[counter];
    list.appendChild(li);
    
    counter++;
    
    
}






























