var hourEl = document.querySelector('#hour')
var minutesEl = document.querySelector('#minutes')
var secondsEl = document.querySelector('#seconds')
var ampmEl = document.querySelector('#ampm')

updatetime()
function updatetime() {
    var h = new Date().getHours()
    var m = new Date().getMinutes()
    var s = new Date().getSeconds()
    var ampm = 'PM'
    if (h > 12) {
        h =h -12
        ampm = 'AM'
    }
     h=h<10? "0" +h :h
     m =m <10? "0" +m :m
     s = s<10? "0" + s :s



    hourEl.innerHTML=h
    minutesEl.innerHTML=m
    secondsEl.innerHTML=s
setInterval(() => {
    updatetime()
}, 1000);
}