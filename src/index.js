
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix===undefined||matrix.length===0){
        return [];
    }

    let arr = matrix[0];
    for(let i=1;i<matrix.length;i++){
        if(i%2!==0){
            matrix[i] = matrix[i].reverse();
        }
        for(let j=0;j<matrix[i].length;j++){
            arr.push(matrix[i][j])
        }
    }
    return arr;
}
