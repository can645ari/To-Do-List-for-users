const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list_el = document.querySelector("#tasks");
const btn = document.querySelector("#submit");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Düzenle';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Sil';

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = '';
    btn.classList.remove("active");
    btn.disabled = true;

    task_edit_el.addEventListener('click', (e) => {
        if (task_edit_el.innerText.toLowerCase() == "düzenle") {
            task_edit_el.innerText = "Kaydet";
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
        } else {
            task_edit_el.innerText = "Düzenle";
            task_input_el.setAttribute("readonly", "readonly");
        }
    });

    task_delete_el.addEventListener('click', (e) => {
        list_el.removeChild(task_el);
    });
});

input.addEventListener("input", () => {
    if (input.value !== "") {
        btn.classList.add("active");
        btn.disabled = false;
    }
    else {
        btn.classList.remove("active");
        btn.disabled = true;
    }
});
