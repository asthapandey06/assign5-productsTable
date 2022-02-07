let prodArray = [];

function addProd() {
    let pid = document.getElementById("prodId").value;
    let pname = document.getElementById("prodName").value;
    let pprice = document.getElementById("prodPrice").value;

    if (checkData(pid, pname, pprice)) {
        datainput(pid, pname, pprice);
        display();
    }

}


function checkData(pid, pname, pprice) {
    if (pid == "" || isNaN(pid)) {
        alert("Enter correct ID");
    }
    else if (isNaN(pname) === false || pname === "") {
        alert("Enter valid Name");
    }
    else if (isNaN(pprice) || pprice === "") {
        alert("Enter valid price");
    }
    else {
        return true;
    }

}


function datainput(pid, pname, pprice) {
    prodArray.push({
        "id": pid,
        "name": pname,
        "price": pprice
    });
}

function display() {
    let result = "";

    if (prodArray.length === 0) {
        document.getElementById("output").innerHTML = "<p>No values</p>";
    }
    else {

        for (let i = 0; i < prodArray.length; i++) {
            result += `<tr><td>${prodArray[i].id}</td><td>${prodArray[i].name}</td><td>${prodArray[i].price}</td></tr>`;
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