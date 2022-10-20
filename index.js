// js for second html
 var books = document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function(book){
    book.textContent += ' (book title)';

});

var Booklist = document.querySelector('#book-list ');
Booklist.innerHTML += 'Books and more books';


/* 
// for the btns
var btns = document.querySelectorAll('#book-list .delete');
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        var li = e.target.parentElement;
        li.parentNode.removeChild(li)
        // or 
        // list.removeChild(li);
    });
});
     */

// or 
// the diff is that when the inner html is changed
// on the console, it will show delete becos it doesn't 
// add to the ul

var list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        var li = e.target.parentElement;
        list.removeChild(li);
    }
});

var addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    var value = addForm.querySelector('input[type = "text"]').value;

    // create elements
    let li = document.createElement('li');
    let Bookname = document.createElement('span');
    let deleteBtn = document.createElement('span');

    // create contents
    Bookname.textContent = value;
    deleteBtn.textContent = 'delete';

    // append child 
    li.appendChild(Bookname);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // add classes
    Bookname.classList.add('name');
    deleteBtn.classList.add('delete');
});

// hide box

var hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    }
    else {
        list.style.display = "initial";
    }
});

// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
   Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
});


