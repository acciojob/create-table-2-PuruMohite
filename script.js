function createTable() {
    //Write your code here
    let rn = parseInt(prompt("Input number of rows"));
    let cn = parseInt(prompt("Input number of columns"));
    if(isNaN(rn) || isNaN(cn)){
        return;
    }
    if(rn <=0 || cn <=0){
        alert("The values should be positive integers.");
        return;
    }
    let table = document.getElementById('myTable');
    table.innerHTML="";
    for(let i=0; i<rn; i++){
        const row = table.insertRow();
        for(let j=0; j<cn; j++){
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
