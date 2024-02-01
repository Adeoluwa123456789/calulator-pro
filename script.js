


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
        if (splice !== true) {
            document.getElementById('display').value =''
            
        }
          
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