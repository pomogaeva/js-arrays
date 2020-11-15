// Task 1 - shopping list
let shoppingList = [{
    name: 'apple',
    ammount: 5,
    isBought: false
  },
  {
    name: 'tangerine',
    ammount: 10,
    isBought: true
  },
  {
    name: 'banana',
    ammount: 3,
    isBought: true
  },
  {
    name: 'avocado',
    ammount: 1,
    isBought: false
  },
  {
    name: 'kiwi',
    ammount: 6,
    isBought: true
  }
]

let purchasedProducts = shoppingList.sort((a, b) => {
  if (a.isBought > b.isBought) {
    return 1;
  }
  if (a.isBought < b.isBought) {
    return -1;
  }
  return 0;
});

console.log(purchasedProducts);

function addNewProduct(obj) {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].name === obj.name) {
      shoppingList[i].ammount += obj.ammount;
      return;
    }
  }
  shoppingList.push(obj);
}

let strawberry = {
  name: 'strawberry',
  ammount: 1,
  isBought: false
}

let apples = {
  name: 'apple',
  ammount: 4,
  isBought: false
}

addNewProduct(strawberry);
addNewProduct(apples);
console.log(shoppingList);

function checkPurchase(obj) {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].name === obj.name) {
      shoppingList[i].isBought = true
    }
  }
}

checkPurchase(apples);
console.log(shoppingList);

// Task 2 - supermarket receipt
let purchaseList = [{
    name: 'bread',
    amount: 2,
    price: 10
  },
  {
    name: 'tomatoes',
    amount: 10,
    price: 3
  },
  {
    name: 'butter',
    amount: 1,
    price: 15
  },
  {
    name: 'eggs',
    amount: 20,
    price: 25
  }
]

for (let prop of purchaseList) {
  console.log(prop);
}

function calcPurchase(obj) {
  let sum = 0;
  let totalAmount = 0;
  let average = 0;

  for (let i = 0; i < obj.length; i++) {
    sum += obj[i].amount * obj[i].price;
    totalAmount += obj[i].amount;
  }

  average = sum / totalAmount;

  console.log(`Purchase total is ${sum}`);
  console.log(`Average purchase is ${average}`);
}

calcPurchase(purchaseList);

const mostExpensive = purchaseList.sort((a, b) => b.price * b.amount - a.price * a.amount, 0);
console.log(mostExpensive);

// Task 3 - CSS styles list
let stylesList = [{
    name: 'color',
    value: 'red'
  },
  {
    name: 'font-size',
    value: '42px'
  },
  {
    name: 'font-weight',
    value: '700'
  },
  {
    name: 'text-align',
    value: 'center'
  },
  {
    name: 'text-decoration',
    value: 'underline'
  }
];

function applyStyles(styles, text) {
  document.write(`<p style="`);
  for (let i in styles) {
    document.write(`${styles[i].name}: ${styles[i].value};`);
  }
  document.write(`">${text}</p>`);
}

applyStyles(stylesList, 'Lorem ipsum dolor sit amet');

// Task 4 - classrooms
let classrooms = [{
    name: 'magellan',
    seats: 20,
    faculty: 'geography'
  },
  {
    name: 'euclid',
    seats: 17,
    faculty: 'math'
  },
  {
    name: 'darvin',
    seats: 15,
    faculty: 'biology'
  },
  {
    name: 'mendeleev',
    seats: 12,
    faculty: 'chemistry'
  },
  {
    name: 'herodotus',
    seats: 10,
    faculty: 'history'
  },
  {
    name: 'freud',
    seats: 16,
    faculty: 'philosophy'
  }
];

function showAllClassrooms(obj) {
  for (let prop of obj) {
    console.log(prop);
  }
}

showAllClassrooms(classrooms);

function showFacultyClassrooms(obj, a) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].faculty == a) {
      return console.log(obj[i]);
    }
  }
  return null;
}

showFacultyClassrooms(classrooms, 'geography');

let group = {
  name: 'group1',
  number: 14,
  faculty: 'math'
}

function showMatchClassrooms(obj1, obj2) {
  for (let i = 0; i < obj1.length; i++) {
    if (obj1[i].faculty == obj2.faculty && obj1[i].seats >= obj2.number) {
      return console.log(obj1[i]);
    }
  }
  return null;
}

showMatchClassrooms(classrooms, group);

function sortClassroomsBySeats(a, b) {
  const classroomA = a.seats;
  const classroomB = b.seats;

  let comparison = 0;
  if (classroomA > classroomB) {
    comparison = -1;
  } else if (classroomA < classroomB) {
    comparison = 1;
  }
  return comparison;
}

console.log(classrooms.sort(sortClassroomsBySeats));

function sortClassroomsByName(a, b) {
  const classroomA = a.name.toLowerCase();
  const classroomB = b.name.toLowerCase();

  let comparison = 0;
  if (classroomA > classroomB) {
    comparison = 1;
  } else if (classroomA < classroomB) {
    comparison = -1;
  }
  return comparison;
}

console.log(classrooms.sort(sortClassroomsByName));