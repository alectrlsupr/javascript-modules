var counter = (function(firstValue){

    var currentValue = firstValue
    
    var logger = function () { 
      console.log("El valor actual es: ", currentValue);
     }
  
    var increment = function(step){
      currentValue += step
      logger()
    }
    var decrement = function(step){
      currentValue -= step
      logger()
    }
  
    var addBtn = document.querySelector('#add')
    var removeBtn = document.querySelector('#remove')
    var counterSpan = document.querySelector('#counter')

    addBtn.addEventListener('click',function(e){
        e.preventDefault();
        increment(1)
        counterSpan.innerText = currentValue
    })

    removeBtn.addEventListener('click',function(e){
        e.preventDefault();
        decrement(1)
        counterSpan.innerText = currentValue
    })

    return { inc: increment,
            dec: decrement }
    })(0)