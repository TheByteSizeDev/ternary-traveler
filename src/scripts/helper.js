import { API } from "./api.js"
import { RENDER } from "./render.js"
import {interestDiv1, interestDiv2, interestDiv3} from "./main.js"

function getAndDisplayInterest() {
    interestDiv1.innerHTML = ""
    interestDiv2.innerHTML = ""
    interestDiv3.innerHTML = ""
    API.getPointsOfInterest(1)
    .then( data => RENDER.listEntries(data, 1))
   API.getPointsOfInterest(2) 
    .then( data => {
        RENDER.listEntries(data, 2)
        console.log(data)
    })
    API.getPointsOfInterest(3)
    .then( data => RENDER.listEntries(data, 3))
    }

  export { getAndDisplayInterest }