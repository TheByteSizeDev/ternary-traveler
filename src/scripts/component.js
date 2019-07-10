const COMPONENTS = {
    createInterestComp: function(entry) {
        return `
            <div id= "indvInterestCont-${entry.id}">
                <h4>${entry.name}</h4> 
                <i class="material-icons">edit</i>
                <i class="material-icons">delete</i>
                <p>Description: <br>
                ${entry.description}</p>
                <div id = "toBeEdited-1">
                <p>Cost: ${entry.cost}</p>
                <p>Review: <br> 
                ${entry.review}</p>
            </div>`
    },

    createAddForm: function() {
        return `
        <h3>Add Point Of Interest</h3>
              <fieldset> 
                <label for="interestName">Name:</label>
                <input id="addName" type="text" name="interestName"/>
              </fieldset>
              <fieldset> 
                  <label for="interestDescription">Description:</label>
                  <textarea
                      id="addDescription"
                      class="text-box"
                      wrap="hard"
                      rows="3"
                      type="text"
                      name="interestDescription"
                    ></textarea>
              </fieldset>
              <fieldset> 
                  <label for="interestCost">Cost:</label>
                  <input id="addCost" type="text" name="interestCost"/>
              </fieldset>
              <fieldset>
                  <label for="interestPlace">Place:</label>
                  <select id="addToPlace" name="interestPlace">
                    <option value="">Please Choose One</option>
                    <option value="Boca Raton">Boca Raton, Florida</option>
                    <option value="Rome, Italy">Rome, Italy</option>
                    <option value="Luanda, Angola">Luanda, Angola</option>
                  </select>
                  <i class="material-icons">check_circle</i>
                </fieldset>`
    },

    createEditForm: function() {
        return `
        <fieldset>
            <label for="editInterestCost">Cost:</label>
            <input id="editCost" type="text" name="editInterestCost"/>
            </fieldset>
            <fieldset>
            <label for="editInterestReview">Add Review:</label>
                <textarea
                    id="editReview"
                    class="text-box"
                    wrap="hard"
                    rows="3"
                    type="text"
                    name="editInterestReview"
                ></textarea>
            <i class="material-icons">check_circle</i>
        </fieldset>`
    }
}

export {COMPONENTS}