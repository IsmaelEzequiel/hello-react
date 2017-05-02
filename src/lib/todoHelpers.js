// list.concat(item)
// [...list, item]
// ... is new in js (ES6), to pass list or multiple datas to an array or smething like that...
export const addTodo = (list, item) => [...list, item];

export const generateId = () => Math.floor(Math.random()*100000);