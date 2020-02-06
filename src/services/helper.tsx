function getColor(value){
    //value from 0 to 1
    var hue=((1-value)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function drawRatingCircle(data: any, canvasId, config = {}) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radius = 20;
    const startAngle = 1.5 * Math.PI;
    const endAngleKey = data.vote_average / 5 + 1.5;
    const endAngle = endAngleKey.toFixed(2) * Math.PI;
    const endAngleFull = 3.5 * Math.PI;
    const anticlockwise = false;
    const rating = data.vote_average * 10;
    const getTextStartAngle = (rating) => rating < 10 ? x - 4 : x - 9;
    const getPercentStartAngle = (rating) => rating < 10 ? 10 : 17;
    const yPath = y + 7;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Fill text in circle
    ctx.beginPath();
    ctx.font = 'bold 16px sans-serif';
    if (config.text) {
        for(let param in config.text) {
            ctx[param] = config.text[param];
        }
    }
    ctx.fillText(rating, getTextStartAngle(rating), yPath);
    //Fill % in text circle
    ctx.beginPath();
    ctx.font = 'bold 8px sans-serif';
    ctx.fillText('%', getTextStartAngle(rating) + getPercentStartAngle(rating), yPath - 8);
    // Draw circle background
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngleFull, anticlockwise);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    if (config.background) {
        for(let param in config.background) {
            ctx[param] = config.background[param];
        }
    }
    ctx.stroke();
    // Draw circle
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    ctx.lineWidth = 5;
    ctx.strokeStyle = getColor(1.1 - rating / 100);
    ctx.stroke();

    return ctx;

}

export { getColor, numberWithCommas, drawRatingCircle };
