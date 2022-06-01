function jumpingOnClouds(c) {
    let jumps = 0;
    let index = 0;
    let finished = false;
        
    while(!finished){
        
        let position = c[index + 2] 

        index = position === 1 || position === undefined 
        ? index + 1
        : index + 2
        
        jumps += 1    

        finished = index === c.length - 1

    }
    
return jumps;

}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))