//add asset and value to the assets list
document.getElementById('add-asset-form').addEventListener('submit', function (e) {
    //cache add asset modal UI vars
    let assets = document.getElementById('assets');
    let assetName = document.getElementById('asset-name');
    let assetValue = document.getElementById('asset-value');

    //create a div for append to assets list
    let div = document.createElement('div');
    div.className = 'form-group';
    div.innerHTML = `<div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">${assetName.value}</span>
                        </div>
                        <input type="number" class="form-control asset" value="${assetValue.value}">
                    </div>`;

    //append the div
    assets.appendChild(div);

    //clear modal fields
    assetName.value = "";
    assetValue.value = "";

    e.preventDefault();
});

//add liability and value to the liabilities list
document.getElementById('add-liability-form').addEventListener('submit', function (e) {
    //cache add asset modal UI vars
    let liabilities = document.getElementById('liabilities');
    let liabilityName = document.getElementById('liability-name');
    let liabilityValue = document.getElementById('liability-value');

    //create a div for append to assets list
    let div = document.createElement('div');
    div.className = 'form-group';
    div.innerHTML = `<div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">${liabilityName.value}</span>
                        </div>
                        <input type="number" class="form-control liabilities" value="${liabilityValue.value}">
                    </div>`;

    //append the div
    liabilities.appendChild(div);

    //clear modal fields
    liabilityName.value = "";
    liabilityValue.value = "";

    e.preventDefault();
});

//listen for calculate
document.getElementById('calculate-button').addEventListener('click', calculateResults);

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