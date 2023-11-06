
function drawTriangle (height){
    let triangl="";
    if (height == 0 || height < 0 || !Number.isInteger(height)) {
        console.log("Height must be a positive number")
    }
    for (let i=1; i<=height; i++) {
        
        for (let j=1; j<=i; j++); {
       triangl += "$";
        }
    console.log(triangl);
    }   
 
}
drawTriangle("dgheui");


