let container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

var button = document.createElement('button');
button.setAttribute('class','size_btn');

button.textContent = 'choose grid size';
document.body.appendChild(button);

var colorpicker = document.createElement('input')
colorpicker.setAttribute('type','color')
document.body.appendChild(colorpicker)

var button_r = document.createElement('button');
button_r.setAttribute('class','rainbow');

button_r.textContent = 'rainbow';
document.body.appendChild(button_r);



function getRandomColor() {
    var r = Math.floor(Math.random() * 256); // 随机生成0-255的红色值
    var g = Math.floor(Math.random() * 256); // 随机生成0-255的绿色值
    var b = Math.floor(Math.random() * 256); // 随机生成0-255的蓝色值
    return 'rgb(' + r + ',' + g + ',' + b + ')'; // 返回rgb格式的颜色字符串
  }
  

function createGrid(n) {
    var container = document.querySelector('.container');
    var grid = document.querySelectorAll('.grid');
    for (let i = 0; i < grid.length; i++) {
        grid[i].remove();
    }
for (let j = 0; j < n; j++) {
    let grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    container.appendChild(grid);
    // grid.textContent = 'grid';
    for (let i = 0; i < n; i++) {
        gridItem = document.createElement('div');
        gridItem.setAttribute('class', 'gridcell');
        grid.appendChild(gridItem);
        // gridItem.textContent = 'grid';
    }
    
}

var gridcell = document.querySelectorAll('.gridcell');
    gridcell.forEach(gridcell => gridcell.addEventListener('mouseover', function(){
        gridcell.style.backgroundColor = colorpicker.value;
    }));
}
createGrid(64);


button.addEventListener('click', function(){
    var size = prompt('enter grid size');
    if (size < 100 || typeof(size) == 'number') {
        createGrid(size);
    }
    else {
        alert('enter a number less than 100');
        createGrid(64);
    }
    
});


// gridcell.forEach(gridcell => gridcell.addEventListener('mouseover', function(){
//     random_c= getRandomColor()
//     gridcell.style.backgroundColor = random_c;
// }));

colorpicker.addEventListener('click', function(){
    var gridcell = document.querySelectorAll('.gridcell');
    gridcell.forEach(gridcell => gridcell.addEventListener('mouseover', function(){
        gridcell.style.backgroundColor = colorpicker.value;
    }));
    
})


button_r.addEventListener('click', function(){
    var gridcell = document.querySelectorAll('.gridcell');
gridcell.forEach(gridcell => gridcell.addEventListener('mouseover', function(){
    random_c= getRandomColor()
    gridcell.style.backgroundColor = random_c;
}
));
});