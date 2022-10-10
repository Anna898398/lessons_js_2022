// показать/скрыть форму добавления, кнопка New book
document.addEventListener("DOMContentLoaded", hiddenCloseclick());
document.getElementById('btnAddNewBook').addEventListener("click", hiddenCloseclick);

function hiddenCloseclick() {

    let x = document.getElementById('formAddBook');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
};


//импорт списка книг из массива в таблицу
const books = [
    {
        id: 1,
        name: "Гарри Поттер и философский камень",
        nameAuthor: "Джоан Роулинг",
        yearPublishing: 1997,
        namePublishingHouse: "BloomsburyPublisher",
        numberOfPages: 399,
        numberOfCopies: 5
    },
    
    {
        id: 2,
        name: "Мастер и Маргарита",
        nameAuthor: "Михаил Афанасьевич Булгаков",
        yearPublishing: 1967,
        namePublishingHouse: "YMCA-Press",
        numberOfPages: 504,
        numberOfCopies: 7
    },
    
    {
        id: 3,
        name: "Париж, фиалки и любовь...",
        nameAuthor: "Бомон Клодин",
        yearPublishing: 2011,
        namePublishingHouse: "РОСМЭН",
        numberOfPages: 284,
        numberOfCopies: 2
    }  
];

let state = "";
let editIndex;
    
render(books);


// отображение данных из const books
function render(books) {

    const list = $(".list");
  
    // innerHTML -> html
    list.html(() => {

        let html = "";
    
        for (let i = 0; i < books.length; i++) {

            html += `
                <tr>
                    <td  contenteditable="true" class"td-edit col-1">${books[i].id}</td>
                    <td  contenteditable="true" class"td-edit col-3">${books[i].name}</td>
                    <td  contenteditable="true" class"td-edit col-2">${books[i].nameAuthor}</td>
                    <td  contenteditable="true" class"td-edit col-1">${books[i].yearPublishing}</td>
                    <td  contenteditable="true" class"td-edit col-2">${books[i].namePublishingHouse}</td>
                    <td  contenteditable="true" class"td-edit col-1">${books[i].numberOfPages}</td>
                    <td  contenteditable="true" class"td-edit col-1">${books[i].numberOfCopies}</td>

                    <td class="col-1">
                        <input type="checkbox" name="record">
                    </td>
                </tr>
            `;
        }
    
        return html;
    });
}


// форма ввода данных книги, передача их в таблицу
$(document).ready(function() {

    $(".btn-apply").click(function() {
        
        let iptId = $("#formId").val();
        let iptName = $("#formName").val();
        let iptNameAuthor = $("#formNameAuthor").val();
        let iptPublishing = $("#formYearPublishing").val();
        let iptNamePublishingHouse = $("#formNamePublishingHouse").val();
        let iptNumberOfPages = $("#formNumberOfPages").val();
        let iptNumberOfCopies = $("#formNumberOfCopies").val();
        let markup = "<tr><td class='td-edit'>" + iptId + "</td><td class='td-edit'>" + iptName + "</td><td class='td-edit'>" + iptNameAuthor + "</td><td class='td-edit'>" + iptPublishing + "</td><td class='td-edit'>" + iptNamePublishingHouse + "</td><td class='td-edit'>" + iptNumberOfPages + "</td><td class='td-edit'>" + iptNumberOfCopies + "</td><td><input type='checkbox' name='record'></td></tr>";

        $("table tbody").append(markup);
    });

    
    // Выбор и удаление выбранных строк с помощью чекбокса
    $(".delete-row").click(function() {

        $("table tbody").find('input[name="record"]').each(function() {

            if($(this).is(":checked")) {

                $(this).parents("tr").remove();
            }
        });
    });
});   


// редактирование данных в ячейке таблица по щелчку на нее
let tableEditBook = document.getElementById("tableBooks");
let editingTd = null;

tableEditBook.onclick = function (event) {

    let target = event.target.closest(".edit-cancel, .edit-ok, .td-edit");

    if (!tableEditBook.contains(target)) return;

    if (target.className === "edit-cancel form-control") {

        finishTdEdit(editingTd.elem, false);

    } else if (target.className === "edit-ok form-control") {

        finishTdEdit(editingTd.elem, true);

    } else if (target.tagName === "TD") {

        if (editingTd) return;

        makeTdEditable(target);
    }
};

function makeTdEditable(td) {

    editingTd = {

        elem: td,
        data: td.innerHTML
    };

    td.classList.add("td-edit");

    let textArea = document.createElement("input");
        textArea.style.width = td.offsetWidth;
        textArea.style.height = td.offsetHeight;
        textArea.className = "edit-area form-control";

    textArea.value = td.innerHTML;
    td.innerHTML = "";
    td.append(textArea);
    textArea.focus();

    td.insertAdjacentHTML(
        "beforeend",
        `<div class="edit-controls">
            <button class="edit-ok form-control" type="button">OK</button>
            <button class="edit-cancel form-control" type="button">CANCEL</button>
        </div>`
    );
}

function finishTdEdit(td, isOk) {

    if (isOk) {

        td.innerHTML = td.firstChild.value;

    } else {

        td.innerHTML = editingTd.data;
    }
    
    td.classList.remove("td-edit");
    editingTd = null;
}

// сортировка при нажатии на шапку колонки
// обращение к таблице
const tabSort = document.getElementById('tableBooks');


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
    let tableSearchBook = document.getElementById('tableBooks');
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

