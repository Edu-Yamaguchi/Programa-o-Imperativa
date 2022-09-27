!true // False
!false // True
!!false true // True
!!true // True
!1 //  False
!!1 // True
!0 // True
!!0 // False
!!"" // True

let x = 5 ;
let y = 9;
x < 10 && x!==5 // False
x>9 || x===5 // True
!(x===y) // True


// EXERCÍCIO 02


let x=10
let y ="a"
y==="b" || x >= 10 // True

let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y) // False

let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito) // False
