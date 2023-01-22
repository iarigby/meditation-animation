sin = Math.sin

let dotGap;

function setup() {
    window.width = window.innerWidth
    window.height = window.innerHeight
    window.createCanvas(window.width, window.height);
}


let sinValueStart = 0
let chaosValueStart = 0
let amplitude = 20
let yStart = window.innerHeight/5
let yEnd = window.innerHeight*4/5
let xStart = window.innerWidth/4
let xEnd = window.innerWidth*3/4
let frequency = 2
let speed = 0.01
const lineCount = 20
const lineDiff = window.innerHeight/lineCount

/**
 * - სურათის დამატება კანვასზე
 * - კოორდინატების შეკრებვა მასივში, თითოეულზე კანვასზე ნახატის ფერის შემოწმება და იმის მიხედვით
 * გადაწყვეტა
 */
function draw() {
    background(0);
    for (let i=0; i < lineCount; i++) {
        let sinValue = sinValueStart
        let chaosValue = chaosValueStart
        for(let x = 0; x < window.innerWidth; x+=5){
            let amplitudeChaos = amplitude + Math.abs(10*sin(chaosValue))
            let frequenyChaos = frequency + Math.abs(5*sin(chaosValue))
            let y = lineDiff*i + amplitudeChaos*sin(frequenyChaos*sinValue);
            if (y < yStart || y > yEnd || x < xStart || x > xEnd)  {
                y = lineDiff*i + amplitude/3*sin(frequency*sinValue)
            }
            fill(255);
            ellipse(x, y, 4);
            sinValue -= 0.27;
        }
    }
    sinValueStart += speed;
    chaosValueStart += 0.002

}