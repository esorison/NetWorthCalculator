//listen for submit
document.getElementById('nw-form').addEventListener('submit', calculateResults);

//calculate results
function calculateResults(e) {
    //cache inputs
    const assets = document.getElementsByClassName('asset');
    const liabilities = document.getElementsByClassName('liabilities');
    console.log(convertColToArr(assets));

    //cache outputs
    const totalAssets = document.getElementById('total-assets');
    const totalLiabilities = document.getElementById('total-liabilities');
    const netWorth = document.getElementById('net-worth');

    //calculations
    totalAssets.value = parseFloat(sumArray(convertColToArr(assets))).toFixed(2);
    totalLiabilities.value = parseFloat(sumArray(convertColToArr(liabilities))).toFixed(2);
    netWorth.value = (totalAssets.value - totalLiabilities.value).toFixed(2);

    e.preventDefault();
}

//add all the values in an array
function sumArray(arr){
    return arr.reduce(function (a, b) {
        return a + b;
    })
}

//convertHtmlCollectionToArray
function convertColToArr(col) {
    let assetArr = [];
    for (let i = 0; i < col.length; i++) {
        let inputValue = parseFloat(col[i].value);
        if (isNaN(inputValue)){
            assetArr.push(0);
        } else {
            assetArr.push(inputValue);
        }
    }
    return assetArr;
}