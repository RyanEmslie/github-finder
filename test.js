let testArr = [];
let tableTD = document
  .querySelector("table#ctl00_MainContent_ProfileUC_Q2")
  .getElementsByTagName("td");
for (var i = 0; i < tableTD.length; i++) {
  if (tableTD[i].getElementsByTagName("input")[0] !== undefined) {
    if (tableTD[i].getElementsByTagName("input")[0].checked) {
      testArr.push(
        tableTD[i].getElementsByTagName("input")[0].labels[0].innerHTML
      );
    }
  }
}
console.log(testArr);
