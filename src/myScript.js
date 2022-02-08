let prodArray = [];

function addProd() {
    let pid = document.getElementById("prodId").value;
    let pname = document.getElementById("prodName").value;
    let pprice = document.getElementById("prodPrice").value;

    if (checkData(pid, pname, pprice)) {
        checkUnique(pid, pname, pprice);
        display();
    }

}


function checkData(pid, pname, pprice) {
    if (pid == "" || isNaN(pid)) {
        alert("Enter correct ID");
        document.getElementById("prodId").focus();
    }
    else if (isNaN(pname) === false || pname === "") {
        alert("Field empty or invalid entry!");
        document.getElementById("prodName").focus();
    }
    else if (isNaN(pprice) || pprice === "") {
        alert("Field empty or invalid entry!");
        document.getElementById("prodPrice").focus();
    }
    else {
        return true;
    }

}


function dataInsert(pid, pname, pprice) {  
            prodArray.push({
                "id": pid,
                "name": pname,
                "price": pprice
            });
}
function checkUnique(pid, pname, pprice){
    if (prodArray.length == 0){
        dataInsert(pid, pname, pprice);
        return;
    }
    else{
    for(let i=0; i<prodArray.length; i++)
        {
            if(prodArray[i].id== pid)
            {
                alert("ID already exist");
                return;
            }            
        }
        dataInsert(pid, pname, pprice);
    }
}

function dataEdit(){
    if (prodArray.includes(pid)){
        var prodArray = getData(pid);
        document.getElementById("prodId").value = prodId;
        document.getElementById("addProdBtn").style.display="block"
    }
}

function getData(pid){
    for(let i =0; i= prodArray.length;i++){

    }
}


function display() {
    let result = "";

    if (prodArray.length === 0) {
        document.getElementById("output").innerHTML = "<p>No values</p>";
    }
    else {
        
        for (let i = 0; i < prodArray.length; i++) {
            result += `<tr>
            <td>${prodArray[i].id}</td>
            <td>${prodArray[i].name}</td>
            <td>${prodArray[i].price}</td>
            <td><a href ="#" onclick="dataEdit('${prodArray[i].id}')">Edit</a></td>
            </tr>`;
        }
        document.getElementById("output").innerHTML = `<table>
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
        </tr>
        ${result}
        </table>`;
       

    }
}