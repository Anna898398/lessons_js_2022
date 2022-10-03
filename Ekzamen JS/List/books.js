const books = [
    {
        id: 1,
        nameBook: "Гарри Поттер и философский камень",
        nameAuthor: "Джоан Роулинг",
        yearPublishing: 1997,
        namePublishingHouse: "BloomsburyPublisher",
        numberOfPages: 399,
        numberOfCopies: 5
    },
  
    {
      id: 2,
      nameBook: "Мастер и Маргарита",
      nameAuthor: "Михаила Афанасьевича Булгакова",
      yearPublishing: 1967,
      namePublishingHouse: "YMCA-Press",
      numberOfPages: 504,
      numberOfCopies: 7
    }  
  ];

  let state = "";
  let editIndex;
  
  render(books);

  

  // Форма поиска
  $(document).ready(function(){
    $(".ipt-search-book").on("keyup", function() {
      let  value = $(this).val().toLowerCase();
      $(".list tr").filter(function() {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });





