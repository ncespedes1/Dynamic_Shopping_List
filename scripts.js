

const addItem = document.querySelector('#addBtn')
const shoppingList = document.querySelector('#shoppingList')

const totalCount = document.querySelector('#totalCount')
let totalCounter = 0
const completedCount = document.querySelector('#completedCount')
let completedCounter = 0
const remainingCount = document.querySelector('#remainingCount')

const clearCompletedItems = document.querySelector('#clearCompleted')

//add item to shopping list
addItem.addEventListener('click', (event)=>{
    event.preventDefault();
    const itemInput = document.querySelector('#itemInput')
    if(itemInput.value.trim() == ''){
        alert('Item required.')
        return
    }
    
    const newItem = document.createElement('li')
    newItem.className = 'shopping-item'

    
    console.log(itemInput.value)
    newItem.innerHTML = `${itemInput.value} <button class="remove-btn">Remove</button>`
    shoppingList.appendChild(newItem)
    
    totalCounter++
    totalCount.innerText = totalCounter
    remainingCount.innerText = totalCounter - completedCounter

    itemInput.value = ''
})


shoppingList.addEventListener('click', (event)=> {
    console.log(event)
    console.log(event.target)

    //remove-button
    if(event.target.classList.contains('remove-btn')){
        
        const listItem = event.target.parentElement
        console.log(listItem)

        const itemText = listItem.textContent
        console.log(itemText)

        if(listItem.classList.contains('completed')){
            completedCounter--
            completedCount.innerText = completedCounter
        }

        listItem.remove()

        totalCounter--
        totalCount.innerText = totalCounter
        remainingCount.innerText = totalCounter - completedCounter
        
    } else {
        //change completed item status

        const listStatus = event.target
        if (!listStatus.classList.contains('completed')){
            listStatus.classList.add('completed')

            completedCounter++
            completedCount.innerText = completedCounter
            remainingCount.innerText = totalCounter - completedCounter

        } else {
            listStatus.classList.remove('completed')

            completedCounter--
            completedCount.innerText = completedCounter
            remainingCount.innerText = totalCounter - completedCounter
        }
        
    }
})


//clear completed items from shopping list
clearCompletedItems.addEventListener('click', ()=>{
    console.log('clear completed btn')
    
    const completedItems = document.querySelectorAll('.completed')
    console.log(completedItems)
    
    completedItems.forEach(item =>{
        console.log(item)
        item.remove()
    })

    totalCounter -= completedCounter
    completedCounter = 0
    totalCount.innerText = totalCounter
    completedCount.innerText = completedCounter
    remainingCount.innerText = totalCounter - completedCounter
})
