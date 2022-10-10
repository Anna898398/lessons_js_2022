//импорт списка посетителей из массива в таблицу
const cards = [

    {
        id: 1,
        visitor: "Johnny Depp",
        book: "Гарри Поттер и философский камень",
        borrowDate: "12.12.2019",
        returnDate: "25.02.2020"
    },
    
    {
        id: 2,
        visitor: "Kit Harington",
        book: "Мастер и Маргарита",
        borrowDate: "12.12.2019",
        returnDate: "25.02.2020"
    },
    
    {
        id: 3,
        visitor: "Joseph Jason Namakaeha Momoa",
        book: "Гарри Поттер и философский камень",
        borrowDate: "12.12.2019",
        returnDate: "25.02.2020"
    }     
];

let state = "";
let editIndex;

render(cards);


// отображение данных из const cards
function render(cards) {

    const tbody = $(".list-cards");
  
    // innerHTML -> html
    tbody.html(() => {

        let html = "";
    
        for (let i = 0; i < cards.length; i++) {

            html += `

                <tr>
                    <td class"col-1">${cards[i].id}</td>
                    <td class"col-3">${cards[i].visitor}</td>
                    <td class"col-3">${cards[i].book}</td>
                    <td class"col-2">${cards[i].borrowDate}</td>
                    <td class"col-2">${cards[i].returnDate}</td>
                </tr>
            `;
        }
  
        return html;
    });
}


// показать/скрыть форму добавления, кнопка New book
document.addEventListener("DOMContentLoaded", hiddenCloseclick());
document.getElementById('btnAddNewCards').addEventListener("click", hiddenCloseclick);

function hiddenCloseclick() {

    let x = document.getElementById('formAddCards');

    if (x.style.display === "none") {

        x.style.display = "block";

    } else {

        x.style.display = "none"}
};


// форма ввода данных книги, передача их в таблицу
$(document).ready(function() {

    $(".btn-add-apply").click(function() {
        
        let iptId = $("#formId").val();
        let iptVisitor = $("#formVisitor").val();
        let iptBook = $("#formBook").val();
    
        let markup = "<tr><td class='td-edit'>" + iptId + "</td><td class='td-edit'>" + iptVisitor + "</td><td class='td-edit'>" + iptBook + "</td><td><input type='date' list='dateBorrow'></td><td><input type='date' list='dateBorrow'></td></tr>";

        $("table tbody").append(markup);
    });
});



// сортировка при нажатии на шапку колонки
// обращение к таблице
const tabSort = document.getElementById('tableCards');


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
    let tableSearchBook = document.getElementById('tableCards');
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