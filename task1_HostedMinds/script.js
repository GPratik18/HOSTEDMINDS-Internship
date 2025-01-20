
let tableDiv;


for(i=1;i<=10;i++){
    tableDiv = document.getElementById("tr"+i);
    
    for (j=1;j<=10;j++){
        const td = document.createElement('td')
        td.innerText = i * j
        tableDiv.appendChild(td)
    }
    tableDiv.append("")
}


for(i=1;i<=10;i++){
    tableDiv = document.getElementById("ttr"+i);
    for (j=1;j<=10;j++){
        const td = document.createElement('td')
        td.innerText = i*i *j* j
        tableDiv.append(td);
    }
    tableDiv.append("")
}
// for(i=1;i<=10;i++){
//     for (j=1;j<=10;j++){
//         tableDiv.append(" ",i*i*j*j);
//     }
// }
