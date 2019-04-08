(function (item, action, prevItem, nextItem){
    const hiddenClass = "carousel__hidden";
    const activeClass = "carousel__active";
    let currentItem = 0;
    const itemCount = getItemsCount();

    function getItemsCount() {
        return document.getElementsByClassName('carousel__item').length;
    }

    function setActiveItem(index){
        item.forEach(item => item.classList.add(hiddenClass));   
        item[index].classList.remove(hiddenClass);
    } 

    prevItem.addEventListener('click', function() {
        currentItem = (currentItem - 1 + itemCount) % item.length;
        setActiveItem(currentItem);
    });

    nextItem.addEventListener('click', function() {
        currentItem = (currentItem + 1) % item.length;
        setActiveItem(currentItem);
    });
  
    action.classList.add(activeClass);

    setActiveItem(currentItem);
})

(Array.prototype.slice.call(document.querySelectorAll('.carousel__item')),
document.querySelector('.carousel__action'),
document.querySelector('.carousel__preview'),
document.querySelector('.carousel__next')
);


