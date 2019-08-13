// FOR LOOP

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// WHILE LOOP

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// LOOPING ON AN ARRAY

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false
  }
];

// For

for (let todo of todos) {
  console.log(todo.text);
}

// For Each

todos.forEach(todo => {
  console.log(todo.text);
});

// Map
const todoText = todos.map(todo => {
  return todo.text;
});

console.log("TCL: todoText", todoText); // Array

// Filter

const todoCompleted = todos
  .filter(todo => {
    return todo.isCompleted === true;
  })
  .map(todo => {
    return todo.text;
  });

console.log("TCL: todoCompleted", todoCompleted);
