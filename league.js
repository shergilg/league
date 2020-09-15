var KDA = document.getElementById("kda")
console.log(KDA.innerText)

function createMenu()
{
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    h2.textContent = "Summoner Stats"
    div.appendChild(h2)
    document.body.appendChild(div)
    div.id = 'content'

    let ul = document.createElement('ul')
    document.body.appendChild(ul)
    ul.id = "menu"


    let li = document.createElement('li')
    let a = document.createElement('a')
    a.textContent = "Kills"
    a.setAttribute('href', '#kills')
    li.appendChild(a)
    menu.appendChild(li)

    let li1 = document.createElement('li')
    let a1 = document.createElement('a')
    a1.textContent = "Deaths"
    a1.setAttribute('href', '#deaths')
    li1.appendChild(a1)
    menu.appendChild(li1)

    let li2 = document.createElement('li')
    let a2 = document.createElement('a')
    a2.textContent = "Assists"
    a2.setAttribute('href', '#assists')
    li2.appendChild(a2)
    menu.appendChild(li2)


    //drop down menu
    /*let divDrop = document.createElement('div')
    divDrop.setAttribute('class', 'dropdown')
    let btn = document.createElement('button')
    //btn.setAttribute('class', 'dropbtn')
    btn.setAttribute('onclick', 'dropFunstion()')
    let ii = document.createElement('i')
    ii.setAttribute('class', 'fa fa-caret-down')
    ii.appendChild(btn)
    btn.textContent = "KDA"
    divDrop.appendChild(btn)
    let divDropContent = document.createElement('div')
    divDropContent.setAttribute('class', 'dropdown-content')
    divDropContent.id = "myDropdown"
    let link1 = document.createElement('a')
    link1.textContent = "Kills"
    link1.setAttribute('href', '#')
    let link2 = document.createElement('a')
    link2.textContent = "Deaths"
    link2.setAttribute('href', '#')
    let link3 = document.createElement('a')
    link3.textContent = "Assists"
    link3.setAttribute('href', '#')
    divDropContent.appendChild(link1)
    divDropContent.appendChild(link2)
    divDropContent.appendChild(link3)
    divDrop.appendChild(divDropContent)*/
}

/*function dropFunstion(){
    document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = function(e) {
    if(e.target.matches('.dropbtn')){
        var myDropdown = document.getElementById("myDropdown")
        if(myDropdown.classList.contains('show')){
            myDropdown.classList.remove('show')
        }
    }
}*/
createMenu()

function askForSummonerName()
{
    var txt;
    var summoner = prompt("Please Enter your Summoner ID:")
    if(summoner == null || summoner == "") {
        summoner = prompt("Please Enter your Summoner ID:", "Listen Here you Piece of SH!T")
    }
    else{
        txt = summoner
        window.open("https://na.op.gg/summoner/userName=" + txt)
    }
}
string = "hhhhh"


console.log(string.concat("heloo", "oooooo"))