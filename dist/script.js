ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map("contacts__map", {
    center: [53.407158, 58.980282],
    zoom: 13,
    controls: ['geolocationControl']
  });

  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small"
    }
  });
  myMap.controls.add(zoomControl);
}


const select = document.querySelector('.contacts__select')
const selectTitle = select.querySelector('.contacts__select-title')
const selectList = select.querySelector('.contacts__select-list')
const selectItems = selectList.querySelectorAll('.contacts__select-item')


//Клик вне select
document.addEventListener('click', (event) => {
  if (!select.contains(event.target))
    select.classList.remove('open')
})

//Клин на заголовок select
selectTitle.addEventListener('click', () => {
  select.classList.toggle('open')
})

//Выбор пункта в select
selectItems.forEach( selectItem => {
  selectItem.addEventListener('click', () => {
    selectTitle.innerHTML = selectItem.innerHTML
    select.classList.remove('open')
  })
})
