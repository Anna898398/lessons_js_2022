//импорт списка посетителей из массива в таблицу
const visitors = [

    {
        id: 1,
        name: "Johnny Depp",
        phone: 7777777777
    },
    
    {
        id: 2,
        name: "Kit Harington",
        phone: 3337778888
    },
    
    {
        id: 3,
        name: "Joseph Jason Namakaeha Momoa",
        phone: 5552316677
    }      
];

let state = "";
let editIndex;

render(visitors);


// отображение данных из const visitors
function render(visitors) {

    const tbody = $(".list-visitors");
  
    // innerHTML -> html
    tbody.html(() => {

        let html = "";
    
        for (let i = 0; i < visitors.length; i++) {

            html += `

                <tr>
                    <td class"col-1">${visitors[i].id}</td>
                    <td class"col-3">${visitors[i].name}</td>
                    <td class"col-3">${visitors[i].phone}</td>

                    <td class="col-1">
                        <button class="btn-edit-visitors form-control" type="button">Edit</button>
                    </td>
                </tr>
            `;
        }
  
        return html;
    });
}


// показать/скрыть форму добавления, кнопка New book
document.addEventListener("DOMContentLoaded", hiddenCloseclick());
document.getElementById('btnAddNewVisitor').addEventListener("click", hiddenCloseclick);

function hiddenCloseclick() {

    let x = document.getElementById('formAddVisitor');

    if (x.style.display === "none") {

        x.style.display = "block";

    } else {

        x.style.display = "none"}
};


//редактирование таблицы (редактируются почему то только новые данные)
function insertRow(id) {

    let btnAddApply = document.getElementsByClassName('btn-add-apply')[0];

    if (btnAddApply.innerText === "Apply") {

        editRow(btnAddApply); // передадим кнопку в метод
        return false;
    }

    let tbody = document.getElementById(id),
        row = document.createElement("tr"),
        cellCounter = document.getElementById("tableVisitors").rows.length;

    let btnEdit = document.createElement("button");
        btnEdit.className = 'btn-edit-visitors form-control';
        btnEdit.innerText = "Edit"; // текст кнопки
        btnEdit.addEventListener('click', function() {
        editButton(this);
        return false;
    });

    let tdId = document.createElement("td");
        tdId.setAttribute('id', 'td1_id');
        tdId.className = 'td_num';
        tdId.appendChild(document.createTextNode(cellCounter));

    let tdName = document.createElement("td");
        tdName.appendChild(document.createTextNode(document.getElementById("formName").value));

    let tdPhone = document.createElement("td");
        tdPhone.appendChild(document.createTextNode(document.getElementById("formPhone").value));

    let tdEdit = document.createElement("td");
        tdEdit.className = 'td-edit';
        tdEdit.appendChild(btnEdit);

    row.appendChild(tdId);
    row.appendChild(tdName);
    row.appendChild(tdPhone);
    row.appendChild(tdEdit);

    tbody.appendChild(row);

    document.getElementsByClassName('form-name')[0].value = "";
    document.getElementsByClassName('form-phone')[0].value = "";

    return false;
}

function editRow(btnAddApply) {

    // получим изменяемую строку по индесу записанному в value кнопки обновления
    let row = document.getElementById("tableVisitors").rows[btnAddApply.value]; 
        row.style.backgroundColor = "white";


    // получим значения, введенные в инпуты
    let inputName = document.getElementsByClassName('form-name')[0];
    let inputPhone = document.getElementsByClassName('form-phone')[0];


    // обновим значения ячеек в строке
    row.cells[1].innerText = inputName.value;
    row.cells[2].innerText = inputPhone.value;


    // поменяем значение кнопки обратно и очистим инпуты
    btnAddApply.innerText = "Add";
    btnAddApply.value = "";

    inputName.value = "";
    inputPhone.value = "";
}

function editButton(btn) {
    
    //обработка редактирования строки
    // получим стркоу
    let tr = btn.parentNode.parentNode;
        tr.style.backgroundColor = "rgb(1, 205, 202)";
    

    // получим значения из строки
    let valueName = tr.cells[1].innerText;
    let valuePhone = tr.cells[2].innerText;


    // заполним инпуты значениями из строки
    document.getElementsByClassName('form-name')[0].value = valueName;
    document.getElementsByClassName('form-phone')[0].value = valuePhone;
    
    
    // кнопка Add меняется на Apply
    let btnAddApply = document.getElementsByClassName('btn-add-apply')[0];
        btnAddApply.innerText = "Apply"; // текст кнопки
        btnAddApply.value = tr.cells[0].innerText; // в value будем хранить индекс строки
}



// сортировка при нажатии на шапку колонки
// обращение к таблице
const tabSort = document.getElementById('tableVisitors');


// получаем заголовки
const headerClick = tabSort.querySelectorAll('th');


// пройтись циклом по всем заголовкам
[].forEach.call(headerClick, function(header, index) {

    header.addEventListener('click', function() {

        // Эта функция будет выполнять сортировку
        sortColumn(index);
    });
});


// запросить все строки
const tableSortBook = tabSort.querySelector('tbody');
const rows = tableSortBook.querySelectorAll('tr');

const sortColumn = function(index) {

    // строки клонируются
    const newRows = Array.from(rows);


    // сортируем строки по содержимому ячеек
    newRows.sort(function(rowA, rowB) {

        // Получаем содержимое ячеек
        const cellA = rowA.querySelectorAll('td')[index].innerHTML;
        const cellB = rowB.querySelectorAll('td')[index].innerHTML;

        switch (true) {
            case cellA > cellB: return 1;
            case cellA < cellB: return -1;
            case cellA === cellB: return 0;
        }
    });


    // удаляются старые строки
    [].forEach.call(rows, function(row) {

        tableSortBook.removeChild(row);
    });


    // добавляются новые строки
    newRows.forEach(function(newRow) {

        tableSortBook.appendChild(newRow);
    });
};


// Форма поиска
function tableSearch() {

    let iptSearchBook = document.getElementById('iptSearch');
    let tableSearchBook = document.getElementById('tableVisitors');
    let word = new RegExp(iptSearchBook.value, 'i');
    let flag = false;

    for (let i = 1; i < tableSearchBook.rows.length; i++) {

        flag = false;

        for (let j = tableSearchBook.rows[i].cells.length - 1; j >= 0; j--) {

            flag = word.test(tableSearchBook.rows[i].cells[j].innerHTML);

            if (flag) break;
        }

        if (flag) {

            tableSearchBook.rows[i].style.display = "";

        } else {

            tableSearchBook.rows[i].style.display = "none";
        }
    }
}