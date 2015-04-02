(function(){
    var user = document.getElementById('name').value;

    // Tell app your name
    var button = document.getElementById('theButton');
    button.addEventListener('click', function(){
        user = document.getElementById('name').value;
        var greeting = "Hello " + user + " Write a message below!";
        document.querySelector('#message').textContent = greeting;
        button.classList.add('hiding');
        var input = document.getElementById('name');
        input.classList.add('hiding');
    });

    // Make a new message
    var addButton = document.getElementById('addMemo');
    addButton.addEventListener('click', function(){
        var newMessageBlock = document.querySelector('.message').cloneNode(true);
        var myMessage = document.getElementById('userMemo').value;
        var auth = newMessageBlock.firstChild;
        auth.textContent = "Written by: " + user;
        auth.nextSibling.textContent = myMessage;
        newMessageBlock.classList.add('show');
        newMessageBlock.classList.remove('hiding');
        document.getElementById('myMessages').appendChild(newMessageBlock);
        document.getElementById('userMemo').value = '';
    });
})();