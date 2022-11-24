function one(){
    let output = document.getElementById('output').value += "1"
   
}


function two(){
    let output = document.getElementById('output').value += "2"
   
}

function three(){
    let output = document.getElementById('output').value += " 3"
    
}

function four(){
    let output = document.getElementById('output').value += "4"
    // console.log(output)
}

function five(){
    let output = document.getElementById('output').value += "5"
  
}

function six(){
    let output = document.getElementById('output').value += "6"
   
}

function seven(){
    let output = document.getElementById('output').value += "7"
 
}

function eight(){
    let output = document.getElementById('output').value += "8"
   
}

function nine(){
    let output = document.getElementById('output').value += "9"
    
}

function zero(){
    let output = document.getElementById('output').value += "0"
    
}


function ac(){
    let output = document.getElementById('output').value = ""
   
}





function bracket2(){
    let output = document.getElementById('output').value += ") "
  
}



function add(){
    let output = document.getElementById('output').value += " + "


}

function multiply(){
    let output = document.getElementById('output').value += " * "

}

function divide(){
    let output = document.getElementById('output').value += " / "
    


}

function subtract(){
    let out = document.getElementById('output').value += " - "



}


function equals()
{
let output = document.getElementById('output').value
let ans = eval(output)
console.log(ans)
document.getElementById('output').value =  output + " = " + ans
// if(output == ""){
//     ans = ""
}



function bracket1(){
    let output = document.getElementById('output').value += " ("
    // let brac = document.getElementById('output').value;
    // let br = eval(brac *= )
    // document.getElementById('output').value= br
}


function del(){
let output = document.getElementById('output').value 
let ans = output.slice(0,-1)
document.getElementById('output').value = ans
}

function modulus(){
    let output = document.getElementById('output').value + " % "
    let input = document.getElementById('output').value
    let percent = eval(input / 100)
    document.getElementById('output').value = output + " = " + percent 
   
}


