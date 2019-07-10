/*
get all points of interest
filter them by their place id
put them in the correct divs based on that
need a function to list them all under their place
*/

import { COMPONENTS } from "./component.js"
import {interestDiv1, interestDiv2, interestDiv3} from "./main.js"

const RENDER = {
    listEntries: function(entryArr, num) {
        entryArr.forEach( entry => {
            let interestDiv = document.getElementById(`interestContainer-${num}`)
            console.log(interestDiv)
            interestDiv.innerHTML = COMPONENTS.createInterestComp(entry)
        })
    }
}



export { RENDER }

/*

getPointsOfInterest: function (placeId) {
        return fetch(`http://localhost:3000/interests/?placeId=${placeId}`)
        .then(data => data.json())
    },

API.getPointsOfInterest(1)
    .then( data => RENDER.listEntries(data))
  }
API.getPointsOfInterest(2)
    .then( data => RENDER.listEntries(data))
  }
API.getPointsOfInterest(3)
    .then( data => RENDER.listEntries(data))
  }

listEntries(entryArr)
entryArr.forEch( entry => {
    interstDiv${entry.placeId}.appendChild
})
*/