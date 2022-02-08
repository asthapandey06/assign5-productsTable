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
    //check valid values entered
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
    //insert elements in array
    prodArray.push({
        "id": pid,
        "name": pname,
        "price": pprice
    });
}
function checkUnique(pid, pname, pprice) {
    //check id is unique or not
    if (prodArray.length == 0) {
        dataInsert(pid, pname, pprice);
        return;
    }
    else {
        for (let i = 0; i < prodArray.length; i++) {
            if (prodArray[i].id == pid) {
                alert("ID already exist");
                return;
            }
        }
        dataInsert(pid, pname, pprice);
    }
}
//display in table format
function display() {
    let result = "";

    if (prodArray.length === 0) {
        document.getElementById("output").innerHTML = "<p>No record found</p>";
    }
    else {

        for (let i = 0; i < prodArray.length; i++) {
            result += `<tr>
            <td>${prodArray[i].id}</td>
            <td>${prodArray[i].name}</td>
            <td>${prodArray[i].price}</td>
            <td><a href ="#" onclick="dataEdit('${prodArray[i].id}')">Edit</a> |
            <a href ="#" onclick="deleteProd('${prodArray[i].id}')">Delete</a></td>
            </tr>`;
        }
        document.getElementById("output").innerHTML = `<table>
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Edit/Delete</th>
        </tr>
        ${result}
        </table>`;
    }
}
//edit data
function dataEdit(id) {
    var prodArr = getData(id);
    document.getElementById("prodId").value = prodArr.id;
    document.getElementById("prodName").value = prodArr.name;
    document.getElementById("prodPrice").value = prodArr.price;
    document.getElementById("updateProdBtn").style = "display:block";
    document.getElementById("updateProdBtn").setAttribute("onclick", `updateProdArr(${id})`);
    document.getElementById("addProdBtn").style = "display:none";
    document.getElementById("prodId").setAttribute("disabled",'disabled');

}
//fetch product id
function getData(id) {
    {
        for (let i = 0; i < prodArray.length; i++) {
            if (prodArray[i].id == id) {
                return prodArray[i];
            }
        }
    }
}
function updateProdArr(id) {
    for (let i = 0; i < prodArray.length; i++) {
        if (prodArray[i].id == id) {
            prodArray[i].name = document.getElementById("prodName").value;
            prodArray[i].price = document.getElementById("prodPrice").value;
        }
       
    }
    display();
}
function deleteProd(id){
    for (let i =0; i<prodArray.length; i++){
        if (prodArray[i].id == id){
            prodArray.splice(i, 1);
            display();
            break;
        }
    }
    
}