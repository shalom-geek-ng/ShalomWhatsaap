
var list = document.getElementById("list")
var input = document.getElementById("input")
var button = document.getElementById("add")


button.addEventListener('click', function (event) {
    event.preventDefault()

    var text = input.value

    if (text == "") {
        alert("Please Type In Something")
    } else {
        var li = document.createElement('li')
        li.textContent = text
        var deleteBtn = document.createElement('button')
        

        li.style.display = 'flex'
        li.style.width = 'fit-content'
        li.style.borderRadius = '10px solid white'
        

        li.appendChild(deleteBtn)
        list.appendChild(li)

        input.value = ""

        deleteBtn.addEventListener('click', (event) => {
            var parent = event.target.parentElement
            list.removeChild(parent)

            checkItems()
        })

        checkItems()
    }

})


function checkItems(){
    if(document.querySelectorAll("ul li").length == 0){
        var p = document.createElement('p')
    
        p.textContent = 'No new messages'
        p.classList.add("p")
        p.style.textAlign = 'center'
        p.style.color = 'white'
    
        list.appendChild(p)
    }else{
        list.removeChild(document.querySelector(".p"))
    }
}

checkItems()

// var list = document.getElementById("list")
// var input = document.getElementById("input")
// var button = document.getElementById("add")
// button.addEventListener('click', function(event){
//     event.preventDefault();
//     var text = input.value;
//     if(text==''){
//         var li = document.createElement('li');
//         list.appendChild(li);
//         li.textContent = "Type a message";
//     }else{
//         var li = document.createElement('li');
//         list.appendChild(li);
//         li.textContent = text;
//     }
// })
