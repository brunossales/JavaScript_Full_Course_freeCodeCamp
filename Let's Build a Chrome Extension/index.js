let inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
let myLeads = []
const ulEl = document.getElementById("ul-el")
const inputDel = document.getElementById("delete-btn")
const inputTab = document.getElementById("tab-btn")
//  false = "" or 0 or null or undefenid or NaN
//  true = "string", 1...5...

//`${variavel} texto `

//JSON.parse - converte arquivo JSON em objeto
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputTab.addEventListener("click", function(){
    
})

function render(leads) {
    let listItens = ""
    for (let i = 0; i < leads.length; i++) {
        //innetHtml é para não ler como texto
        //  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        listItens += `
            <li> 
                <a target='_blank' href='${leads[i]}'>       ${leads[i]}
                </a>
            </li>
            `

        //Mesma coisa do que o ^^^^
        // criar um elemento
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItens
}

//dbclick - double click
inputDel.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

//Stringfy transforma em JSON uma String
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
