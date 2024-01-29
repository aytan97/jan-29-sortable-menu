var availableTags = [
    "C",
    "C++",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];

let menuItems = [
    'Kozmetik', 'Kişisel Bakım',
    'Elektronik',
    'Moda',
    'Ev', 'Yaşam', 'Kırtasiye', 'Ofis',
    'Oto', 'Bahçe', 'Yapı Market'
];
 
const load = (items) => {
    let mainMenu = [];
    let sortedMenu = [];

    $.each(items, (i, e) => {
        mainMenu.push(`<li class="nav-item"><a class="nav-link" href="#">${e}</a></li>`);
        sortedMenu.push(`<li class="list-group-item ">
        <span class="sort-list">${e}</span> 
        <span class="float-end badge rounded-pill text-bg-warning list-again">${(i + 1)}</span>
        </li>`);
    });
    $('.navbar-nav').html(mainMenu);
    $('#sortable').html(sortedMenu);
}

load(menuItems);
let newList=[]
$("#sortable").sortable({
    start: function (event, ui) { console.log('start'); },
    change: function (event, ui) { console.log('change'); },
    stop: function (event, ui) {
    
             let items = document.querySelectorAll('.sort-list');
             $.each(items, (i, e) => {   
                 newList.push(e.innerText)
              });

             let navItem = document.querySelectorAll('.nav-link');
              $.each(navItem, (i, n) => {
                 n.innerHTML = newList[i];
              });

             let rowNumber = document.querySelectorAll('.list-again')
              $.each(rowNumber, (i, r) => {
                 r.innerHTML=i+1
              });

           newList=[];
           rowNumber =[]
           
    },
});