
const int = document.querySelector('#counter');
let visitCounter = getCount() || 0;

let countTick = document.createElement('p');
int.append(countTick);
countTick.textContent = visitCounter;
console.log('test1');

function displayCount(count)
{
    let countTick = document.createElement('p');
    countTick.textContent = count
    console.log(count);
    
    addEventListener('load',function (){
        visitCounter++
        countTick.textContent = `Times reviewed: ${count}`;
    })
    addEventListener('load', function(){
        setCount();

    })

}

function setCount()
{
    localStorage.setItem('visitCounter',JSON.stringify(visitCounter))
}

function getCount()
{
    return JSON.parse(localStorage.getItem('visitCounter'));
}

displayCount(visitCounter);
