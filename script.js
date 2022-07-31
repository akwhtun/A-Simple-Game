const containers = document.querySelectorAll('.item-container');
const items = document.querySelectorAll('.item');
const title = document.querySelector('.title');
const crossSord = document.querySelector('.cross-sords');
const xTurn = document.querySelector('.x-turn');
const yTurn = document.querySelector('.y-turn');

//containers
const leftContainer = document.querySelector('.left-container');
const topContainer = document.querySelector('.top-container');
const bottomContainer = document.querySelector('.bottom-container');
const rightContainer = document.querySelector('.right-container');
const centerContainer = document.querySelector('.center-container');

//icons
const moon = document.querySelector('svg');
const cross = document.querySelector('.cross')

//btns
const cover = document.querySelector('.cover');
const start = document.querySelector('.start-btn');


items.forEach(item => {
    item.addEventListener("dragstart", () => {
        moon.classList.remove('bs');
        cross.classList.remove('show');
        item.classList.add('dragging');
    })
})

items.forEach(item => {
    item.addEventListener("dragend", () => {
        item.classList.remove('dragging');
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
    const dragitem = document.querySelector('.dragging');
    e.preventDefault();

    const hasAlreadyItem =container.childElementCount;
    const player = dragitem.attributes['data-item'].value;
    
    if(hasAlreadyItem){
        return;
    }else{
        checkItem(container, dragitem , player);
    }
     
    })
});

function checkItem(container, dragitem, player){

    if( chcekPosition(dragitem, leftContainer, container, topContainer)){    
        moon.classList.add('bs');
        return;
    }
    if( chcekPosition(dragitem, topContainer, container, leftContainer)){
        moon.classList.add('bs');
        return;
    }
    if(chcekPosition(dragitem, topContainer, container, bottomContainer)){
        cross.classList.add('show');
        return;
    }
    if( chcekPosition(dragitem, bottomContainer, container, topContainer)){
        cross.classList.add('show');
        return;
    }
    if(chcekPosition(dragitem, leftContainer, container, rightContainer)){
        cross.classList.add('show');
        return;
    }
    if(chcekPosition(dragitem, rightContainer, container, leftContainer)){
        cross.classList.add('show');
        return;
    }
    container.appendChild(dragitem);  
    if(player == 'y-item'){
        let y = document.querySelectorAll('.y');
        let x = document.querySelectorAll('.x');
        for(var i =0; i< y.length; i++){
            y[i].setAttribute('draggable', false);
            y[i].style.cursor = 'default';
        }
        for(var i =0; i< x.length; i++){
            x[i].setAttribute('draggable', true);
            x[i].style.cursor = 'move';
            var allTitle = title.querySelectorAll('.tit');
            for(var j =0; j< allTitle.length; j++){
            allTitle[j].style.display = 'none';
            xTurn.style.display='inline-block';
            }
        }
    }
    if(player == 'x-item'){
        let y = document.querySelectorAll('.y');
        let x = document.querySelectorAll('.x');
        for(var i =0; i< x.length; i++){
            x[i].setAttribute('draggable', false);
            x[i].style.cursor = 'default';
        }
        for(var i =0; i< y.length; i++){
            y[i].setAttribute('draggable', true);
            y[i].style.cursor = 'move';
            var allTitle = title.querySelectorAll('.tit');
            for(var j =0; j< allTitle.length; j++){
            allTitle[j].style.display = 'none';
            yTurn.style.display='inline-block';
            }
        }
    } 
}

function chcekPosition(drag, dragItemContainer, con, itemcontainer){
if(drag == dragItemContainer.children[0] && con == itemcontainer){
    return true;
}
}

start.addEventListener('click', () => {
    cover.classList.add('cvr');
    var allTitle = title.querySelectorAll('.tit');
    for(var i =0; i< allTitle.length; i++){
        allTitle[i].style.display = 'none';
        crossSord.style.display='flex';
    }
})