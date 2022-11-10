
    let row = prompt("How many rows do you want to exist")
    if(Number(row) != row)
    {
        console.log("Please Input a number value");
    }
    else
    {
        let myArr = []
        myArr.length = row

        for(let y = 0; y < row; y++)
        {
            myArr[y] = [y+1]
            inputlength = prompt("How many values do you want to store to row(" + myArr[y] + "):")
            myArr[y].length = inputlength
            for(let z = 0; z < inputlength; z++)
            {
            
                var data = prompt("Input value(" + (z+1) +"): ")
                myArr[y][z] = data
            }
        }
        output = prompt("What Row do you want to output?")
        output -= 1;
        for(let m = 0; m < myArr[output].length; m++)
        {
            console.log(myArr[output][m])
        }
    }
    
    