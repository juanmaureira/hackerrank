/**
 *                      Corte  piezas cortadas 
 *  [5 4 4 2 2 8]         2         6
 *  [3 2 2 _ _ 6]         2         4
 *  [1 _ _ _ _ 4]         1         2  
 *  [_ _ _ _ _ 3]         3         1 
 */

const cutTheSticks = (arr) => {
    let contCuts = 0
    let response = []
    let finished = false
    let lengthOfCut = 0

    while(!finished){

        lengthOfCut = Math.min(...arr)
        contCuts=0

        for(let i = 0; i < arr.length; i++){

            if(arr[i] >= lengthOfCut){
                arr[i] = arr[i] - lengthOfCut
                contCuts++;
            }

        }
        
        arr = arr.filter( a => a !== 0)
        response.push(contCuts)
        finished = arr.length == 0
    }

    return response
}


console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));