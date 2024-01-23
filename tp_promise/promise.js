


function getTodo(id){

    const p = new Promise((resolve,reject)=>{
        setTimeout(function(){
            const todo = {
                id,
                title:`Todo id : ${id}`,
                completed:false
            }        
            resolve(todo)
        },1000)

    })
    return p
}



// const pTodo = getTodo(1)

// pTodo.then((todo)=>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// }).then((todo)=>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// }).then((todo)=>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// })


// const p1 = getTodo(1)
// const p2 = getTodo(2)
// const p3 = getTodo(3)

// Promise.all([p1,p2,p3]).then(arr => console.log(arr))




async function main(){
    const todo1 = await getTodo(1)
    console.log(todo1)
    const todo2 = await getTodo(2)
    console.log(todo2)
    const todo3 = await getTodo(3)
    console.log(todo3)
    
}

main()