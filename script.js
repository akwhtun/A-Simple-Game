const containers = document.querySelectorAll('.item-container');
const items = document.querySelectorAll('.item');

//containers
const leftContainer = document.querySelector('.left-container');
const topContainer = document.querySelector('.top-container');
const bottomContainer = document.querySelector('.bottom-container');
const rightContainer = document.querySelector('.right-container');
const centerContainer = document.querySelector('.center-container');

//items
const moon = document.querySelector('svg');


items.forEach(item => {
    item.addEventListener("dragstart", () => {
        moon.classList.remove('bs');
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

    var hasAlreadyItem =container.childElementCount;
    

    if(hasAlreadyItem){
        return;
    }else{
        checkItem(container, dragitem , hasAlreadyItem);
    }    
   
    })
});

function checkItem(container, dragitem){

    if( chcekPosition(dragitem, leftContainer, container, topContainer)){    
        moon.classList.add('bs');
        return;
    }
    if( chcekPosition(dragitem, topContainer, container, leftContainer)){
        moon.classList.add('bs');
        return;
    }
    if(chcekPosition(dragitem, topContainer, container, bottomContainer)){
        return;
    }
    if( chcekPosition(dragitem, bottomContainer, container, topContainer)){
        return;
    }
    if(chcekPosition(dragitem, leftContainer, container, rightContainer)){
        return;
    }
    if(chcekPosition(dragitem, rightContainer, container, leftContainer)){
        return;
    }
    container.appendChild(dragitem);  
}

function chcekPosition(drag, dragItemContainer, con, itemcontainer){
if(drag == dragItemContainer.children[0] && con == itemcontainer){
    return true;
}
}