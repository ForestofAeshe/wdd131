console.log('loaded');

const list = document.querySelector('#list');
const button = document.querySelector('button');
console.log(button);
const input = document.querySelector('#favchap');

function addListItem(event) {
    if (input.value.trim() !== '')
    {
        console.log("test")
        const li = document.createElement('li');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        li.textContent = input.value;
        li.append(deleteButton);
        list.append(li);  
    }
}



button.addEventListener('click', addListItem);


