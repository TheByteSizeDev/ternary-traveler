console.log("Your Webpack application is set up and ready to go. Please start writing code.")

import { getAndDisplayInterest } from "./helper.js"


let interestDiv1 = document.querySelector("#interestContainer-1")
let interestDiv2 = document.querySelector("#interestContainer-2")
let interestDiv3 = document.querySelector("#interestContainer-3")

getAndDisplayInterest()

export {interestDiv1, interestDiv2, interestDiv3}