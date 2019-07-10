const API = {
    
    getPointsOfInterest: function(placeId) {
        return fetch(`http://localhost:8088/interests/?placeId=${placeId}`)
        .then(response => response.json())
    },
  
  addPointOfInterest: function(entry) {
    return fetch("http://localhost:8088/interests", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
  },
  
  deletePointOfInterest: function (id) {
    return fetch(`http://localhost:8088/interests/${id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
  },
  
  updatePointsOfInterest: function(updatedInterest) {
    return fetch(`http://localhost:8088/interests/${updatedInterest.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedInterest)
    })
  }
}

export {API}

