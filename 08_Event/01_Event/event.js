//JavaScript is a sequencially run language. In javaScript most of the Events run Sequencially.


function approachOnclick(){
    document.getElementById("owl").onclick = function(){
        console.log("owl Clicked")
    }
}

// approachOnclick();

//Modern Approach
function EventListenerAppr(){
    document.getElementById("owl").addEventListener("click",function(ev){
        console.log("Owl Clicked")
    });
}
// EventListenerAppr()

function eventObject(){
    document.getElementById("owl").addEventListener("click", function(event){
        console.log(event);
    });

    //1. Browser Event
    //2. Environment Event
    /*
    Study these => 
        //1.type, timeStamp, defaultPrevented.
        //2.target,toElement,srcElement,currentTarget
        //3.clientX,clientY,screenX,screenY.
        //4.altKey, ctrlKey, shiftKey, keyCode.
    */    
}
// eventObject();

function eventPropagation(){
    /*
    1.EventBubbling
    2.EventCapturing
    In JavaScript Event bubbling is Default
    
    */
    //1. Bubbling
    //Bottom To TOP
    document.getElementById("images").addEventListener("click", function (event){
        console.log("clicked inside the ul");
    },false);

    document.getElementById("owl").addEventListener("click",function(event){
        console.log("Owl Clicked!")
        event.stopPropagation()
    },false);


    //2.Capturing
    //Top to Bottom
    document.getElementById("images").addEventListener("click", function (event){
        console.log("clicked inside the ul");
    },true);

    document.getElementById("owl").addEventListener("click",function(event){
        console.log("Owl Clicked!")
    },true);

    document.getElementById("google").addEventListener("click", function(event){
        event.preventDefault();
        event.stopPropagation();
        console.log("Google Clicked");
    })
}
// eventPropagation();

function removeImages(){
    document.getElementById("images").addEventListener("click",function(event){
        console.log(event.target.parentNode);
        console.log(event.target.tagName)
        if (event.target.tagName === "IMG") {
            let removeIt = event.target.parentNode;
            removeIt.remove(); 
        }
        // removeIt.parentNode.removeChild(removeIt);
    })
}
removeImages();