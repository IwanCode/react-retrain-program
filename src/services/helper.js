function getColor(value){
    //value from 0 to 1
    console.log(value);
    var hue=((1-value)*120).toString(10);
    console.log(["hsl(",hue,",100%,50%)"].join(""));
    return ["hsl(",hue,",100%,50%)"].join("");
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { getColor, numberWithCommas };
