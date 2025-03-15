// console.log('loaded');

const list = document.querySelector('#list');
const button = document.querySelector('button');
// console.log(button);
const input = document.querySelector('#favchap');

const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';

button.addEventListener('click', function(){
    if (input.value.trim() !== '')
        {
            // console.log("test")
            const li = document.createElement('li');

            li.textContent = input.value;
            li.append(deleteButton);
            list.append(li);  
        }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);

    input.value = '';
    input.focus();
});

