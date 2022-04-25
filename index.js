const search_button = document.getElementById('search-button');
const modalwindow = document.querySelector('.modal-window');
const adultswrapper = document.querySelector('.adults-wrapper')
const minusadult = adultswrapper.querySelector('.minus')
const plusadult = adultswrapper.querySelector('.plus')
const childrenwrapper = document.querySelector('.children-wrapper')
const minuschild = childrenwrapper.querySelector('.minus')
const pluschild = childrenwrapper.querySelector('.plus')
const adult_value = adultswrapper.querySelector('.adult-value')
const child_value = childrenwrapper.querySelector('.child-value')
const appear_date = modalwindow.querySelector('.appear-date')
const leaving_date = modalwindow.querySelector('.leaving-date')
const appear_icon_calendar = modalwindow.querySelector('.for-appear-calendar')
const leaving_icon_calendar = modalwindow.querySelector('.for-leaving-calendar')
const appear_input_placeholder = modalwindow.querySelector('.appear-date')
const leaving_input_placeholder = modalwindow.querySelector('.leaving-date')
const for_calendar = modalwindow.getElementsByClassName('for-calendar')
const date = new Date();
const months = ["ЯНВАРЬ	", "ФЕВРАЛЬ", "МАРТ	", "АПРЕЛЬ", "МАЙ", "ИЮНЬ", "ИЮЛЬ", "АВГУСТ", "СЕНТЯБРЬ", "ОКТЯБРЬ", "НОЯБРЬ", "ДЕКАБРЬ"];
let adultcount = 1;
let child = 1;

search_button.addEventListener('click', function(){    
    appear_input_placeholder.placeholder = date.getDate() + " " + months[date.getMonth()].toUpperCase() + " " + date.getFullYear()
    if (modalwindow.style.display == 'block'){
        modalwindow.style.display = 'none'
    } else {
        modalwindow.style.display = 'block'
    }    
})

minusadult.addEventListener('click', function(){
    console.log('minus adult pressed')
    if (adultcount > 1){
        adultcount --
        adult_value.innerText = adultcount
        console.log(adult_value.innerText)
    }   
})
plusadult.addEventListener('click', function(){
    console.log('plus adult pressed')
    adultcount ++
    adult_value.innerText = adultcount
    console.log(adult_value.innerText)
})

minuschild.addEventListener('click', function(){
    console.log('minus child pressed')
    if (child > 0){
        child --
        child_value.innerText = child
    }    
})
pluschild.addEventListener('click', function(){
    console.log('plus child pressed')
    child ++
    child_value.innerText = child
})

appear_icon_calendar.addEventListener('change', function(){
    let date = new Date(appear_icon_calendar.value)    
    appear_date.value = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
})
leaving_icon_calendar.addEventListener('change', function(){
    console.log(date)
    let date = new Date(leaving_icon_calendar.value)    
    
    leaving_date.value = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
})