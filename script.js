


function every ( val) {
    document.getElementById('display').value +=val
     }
    
     function equal() {
        try {
            document.getElementById('display').value = eval(document.getElementById ('display').value);
        } catch (error) {
            document.getElementById('display').value='';
        }
    }

    function delall(){
    if (delall !== true) {
        document.getElementById('display').value =''
        
    }
      
    }
    
    
    
    function splice(){
      let clear = display.value
      display.value = clear.slice(0, -1)
          
        }
        // window.close();
        function togglePower() {
            if (togglePower !== true ) {
                container.style.display = 'block' 
            }
                    
        } 
        function togglePower2() {
            if (togglePower !== true) {
                container.style.display= 'none'
                display.innerHTML = `
                <div style="background-color="grey"><div/>
                `
                document.getElementById('display').value='';

            }
        }