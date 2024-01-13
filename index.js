let play = document.getElementById("play")
let pause = document.getElementById("pause")
let reset = document.getElementById("reset")
let history = document.getElementById("history")
let result = document.getElementById("result")
let table = document.getElementById("table")

let history_list = []
let milliseconds = 0;
let intervalIndex;


play.addEventListener("click", function () {
    clearInterval(intervalIndex);
    intervalIndex = setInterval(() => {
        milliseconds++
        result.innerHTML = convertTime(milliseconds)
    },100)
})
pause.addEventListener("click",function (){
    clearInterval(intervalIndex);
    let history_item = {
        time : convertTime(milliseconds),
        type: 'Pause'
    }
    history_list.push(history_item)
    result.innerHTML = convertTime(milliseconds);
})
reset.addEventListener("click",function (){
    clearInterval(intervalIndex);
    let history_item = {
        time : convertTime(milliseconds),
        type: 'Reset'
    }
    history_list.push(history_item)
    milliseconds = 0
    result.innerHTML = convertTime(milliseconds);
})
history.addEventListener('click',function (){
    let history_table = history_list.map((item,index)=>{
        return `
        <tr>
                <th scope="row">${index+1}</th>
                <td>${item.time}</td>
                <td>${item.type}</td>
            </tr>
        `
    }).join('')
    table.innerHTML = history_table
})
function convertTime(time){
    let seconds = Math.floor(time / 100)
    let min = Math.floor(time / 6000)
    let residual_millisecond = time - min * 60000 - seconds * 100

    const roundMin = min < 10 ? "0" + min : min;
    const roundSec = seconds < 10 ? "0" + seconds : seconds;
    const round_residual_second = residual_millisecond < 10 ? "0" + residual_millisecond : residual_millisecond;

    const r = `${roundMin}:${roundSec}:${round_residual_second}`;
    return r;
}




