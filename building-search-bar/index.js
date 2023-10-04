const searchInput = document.getElementById("searchInput")
const listNames = document.getElementsByClassName("names")
let name = ''
let currentName = ''

searchInput.addEventListener('keyup', function(e) {
    
    name = e.target.value.toLowerCase()

    for(i=0; i<listNames.length; i++) {
        
        currentName = listNames[i].innerHTML.toLowerCase()
        
        if(currentName.includes(name)) {
            listNames[i].style.display = "block"
        }
        else listNames[i].style.display = "none"
    }
})


    

