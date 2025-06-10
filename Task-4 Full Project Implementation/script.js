// === TO-DO LIST FUNCTIONALITY ===
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  todoList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    todoList.appendChild(li);
  });
}

function addTask() {
  const task = todoInput.value.trim();
  if (task === "") return;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  todoInput.value = "";
  loadTasks();
}

loadTasks();

// === PRODUCT LIST FUNCTIONALITY ===
const products = [
  { name: "Phone", category: "electronics", price: 300, rating: 4.5 },
  { name: "Laptop", category: "electronics", price: 1000, rating: 4.8 },
  { name: "Book 1", category: "books", price: 20, rating: 4.2 },
  { name: "Book 2", category: "books", price: 25, rating: 3.9 }
];

function displayProducts(items) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>Category: ${item.category}</p>
      <p>Price: $${item.price}</p>
      <p>Rating: ${item.rating}</p>
    `;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("category-filter").value;
  let filtered = products;
  if (category !== "all") {
    filtered = products.filter(p => p.category === category);
  }
  displayProducts(filtered);
}

function sortProducts() {
  const option = document.getElementById("sort-option").value;
  let sorted = [...products];
  if (option === "price") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (option === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }
  displayProducts(sorted);
}

displayProducts(products);
