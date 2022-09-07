//Create onload handler 

window.onload = () => {
    CodeCopy()
    CodeCopy2()
    colors()
    main()



}



function CodeCopy() {
    let flexRgb = document.getElementById('flex-rgb')
    let rgbInput = document.getElementById('rgb')
    let rgbBtn = document.getElementById('rgbBtn')


    rgbBtn.addEventListener('click', function () {

        rgbInput.select();
        document.execCommand("copy");
        flexRgb.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(()=>{
            flexRgb.classList.remove("active")
        },2500)



    })
}
function CodeCopy2() {
     let flexHex = document.getElementById('flex-hex')
    let hexInput = document.getElementById('hex')
    let hexBtn = document.getElementById('hexBtn')


    hexBtn.addEventListener('click', function () {

        hexInput.select();
        document.execCommand("copy");
        flexHex.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(()=>{
            flexHex.classList.remove("active")
        },2500)



    })
}




function colors() {
    let board1 = document.getElementById('range-left')
    let board = document.getElementById('left-board')
    let inputValue = document.getElementById('rgb')
    let inputValueHex = document.getElementById('hex')
    


    board1.addEventListener('change', function () {
        let color = myColor()
         
        inputValue.value = `rgb(${color})`

        board.style.backgroundColor = `rgb(${color})`;


        // HEX Code Convert
      
        let cvt =color.split(',')
        let r =cvt[0]
        let g =cvt[1]
        let b =cvt[2]
        
       let hexa =`#`+getHexa(r)+getHexa(g)+getHexa(b)
          inputValueHex.value = hexa
        



    })


}

function main() {

    let board = document.getElementById('left-board')
    let inputValue = document.getElementById('rgb')

    let Change_btn = document.getElementById('Change-btn');
    let inputValueHex = document.getElementById('hex')


    Change_btn.addEventListener('click', function () {
        const bgColor = randomColor()
       
      

        inputValue.value = `rgb(${bgColor})`
        board.style.backgroundColor = `rgb(${bgColor})`;


        // HEX Code Convert
   let cvt =bgColor.split(',')
   let r =cvt[0]
   let g =cvt[1]
   let b =cvt[2]
   
  let hexa =`#`+getHexa(r)+getHexa(g)+getHexa(b)
     inputValueHex.value = hexa

        
        

    })

}


//Random color genarator function


function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `${red}, ${green}, ${blue}`;
}

//Color Range function

function myColor() {
    let red2 = document.getElementById('red').value;
    let green2 = document.getElementById('green').value;
    let blue2 = document.getElementById('blue').value;
    return `${red2},${green2}, ${blue2}`;



}

/*Convert RGB to HEX*/
    
function getHexa(value) {

    let hex = parseInt(value).toString(16)
    return hex.length == 1 ? `0${hex}` : hex;

}

/*Convert RGB to HEX*/