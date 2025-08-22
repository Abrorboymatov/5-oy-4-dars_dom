

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function saveTodos() {
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    function formatDate(date) {
      return new Date(date).toLocaleString();
    }

    function renderTodos() {
      const list = document.getElementById("Lists");
      list.innerHTML = "";
      todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "bg-gray-50 border rounded-xl p-3 shadow-sm";
        li.innerHTML = `
          <div class="flex justify-between items-center">
            <span class="font-semibold">${todo.text}</span>
            <div class="space-x-2">
              <button onclick="editTodo(${index})" 
                class="px-2 py-1 text-sm bg-yellow-400 text-white rounded-lg hover:bg-yellow-500">✏️ Edit</button>
              <button onclick="deleteTodo(${index})" 
                class="px-2 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600">🗑️ Delete</button>
            </div>
          </div>
          <div class="text-xs text-gray-500 mt-1">
            Qo‘shilgan: ${formatDate(todo.createdAt)}
          </div>
          ${todo.updatedAt ? `<div class="text-xs text-gray-500">Tahrirlangan: ${formatDate(todo.updatedAt)}</div>` : ""}
        `;
        list.appendChild(li);
      });
    }

    function addTodo() {
      const input = document.getElementById("todoInput");
      const text = input.value.trim();
      if (text === "") return alert("Matn kiriting!");
      todos.push({ text, createdAt: new Date(), updatedAt: null });
      input.value = "";
      saveTodos();
      renderTodos();
    }

    function deleteTodo(index) {
      if (confirm("Haqiqatan o‘chirmoqchimisiz?")) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
      }
    }

    function editTodo(index) {
      const newText = prompt("Yangi matn kiriting:", todos[index].text);
      if (newText && newText.trim() !== "") {
        todos[index].text = newText.trim();
        todos[index].updatedAt = new Date();
        saveTodos();
        renderTodos();
      }
    }

    renderTodos();

