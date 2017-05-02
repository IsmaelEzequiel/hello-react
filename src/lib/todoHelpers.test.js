import { addTodo } from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
  const startTodos = [
    {id: 1, name: 'todo one', isComplete: false},
    {id: 2, name: 'todo two', isComplete: false}
  ]
  const newTodo = {id: 3, name: 'todo three', isComplete: false}
  const expectedTodo = [
    {id: 1, name: 'todo one', isComplete: false},
    {id: 2, name: 'todo two', isComplete: false},
    {id: 3, name: 'todo three', isComplete: false}
  ]

  const result = addTodo(startTodos, newTodo);

  expect(result).toEqual(expectedTodo);
}); 

test('addTodo should not mutable the existing array', () => {
  const startTodos = [
    {id: 1, name: 'todo one', isComplete: false},
    {id: 2, name: 'todo two', isComplete: false}
  ]
  const newTodo = {id: 3, name: 'todo three', isComplete: false};
  const expectedTodo = [
    {id: 1, name: 'todo one', isComplete: false},
    {id: 2, name: 'todo two', isComplete: false},
    {id: 2, name: 'todo two', isComplete: false}
  ]

  const result = addTodo(startTodos, newTodo);

  expect(result).not.toBe(startTodos);
});