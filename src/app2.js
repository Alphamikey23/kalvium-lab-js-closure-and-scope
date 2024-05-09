// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000;
function createPop(arrayOfNumbers,itemToSearch) {
    
    
    let title = document.createElement('h3');
    let currIndex = NEG_INF;
    let check = false;
    function find() {
      currIndex = arrayOfNumbers.indexOf(itemToSearch);
      check = true;
    }
    return function() {
      find();
      if(check) {
        return title.textContent=`The item is present and is at index ${currIndex}`;
      }
      else {
        return title.textContent=`The item is not present and is at index -1000000`;
      }
    }
    
  }
  
  
    // Progression 2: add 3 variables: title, currIndex, check
  
    // Progression 3: create a function "searchForElement" 
  
    // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
                      // to return the desired output.
  
  const arrayOfNumbers = [1,2,3,4,5,6];
  const itemToSearch = 4;
  
  