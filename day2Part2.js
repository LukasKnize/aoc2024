const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

const lines = input.split("\n")

const data = []

lines.forEach(line => data.push(line.split(' ').map(item => parseInt(item))))

const possiblySafe = []
const possiblyEditedSafe = []

data.forEach(dataLine => {
    const sorted = [...dataLine].sort(function (a, b) {
        return a - b;
    });
    const reversed = [...sorted].reverse()

    const isSameSorted = (dataLine.length == sorted.length) && dataLine.every(function(element, index) {
        return element === sorted[index]; 
    });

    const isSameReversed = (dataLine.length == reversed.length) && dataLine.every(function(element, index) {
        return element === reversed[index]; 
    });

    if (isSameSorted || isSameReversed) {
        possiblySafe.push(dataLine)
    }else{
        for (let i = 0; i < dataLine.length; i++) {
            const newDataLine = [...dataLine].splice(i, 1)
            const newSorted = [...newDataLine].sort(function (a, b) {
                return a - b;
            });
            const newReversed = [...newSorted].reverse()
            const newSameSorted = (newDataLine.length == sorted.length) && newDataLine.every(function(element, index) {
                return element === newSorted[index]; 
            });

            const newSameReversed = (newDataLine.length == newReversed.length) && newDataLine.every(function(element, index) {
                return element === newReversed[index]; 
            });

            if (newSameSorted || newSameReversed) {
                possiblyEditedSafe.push(newDataLine)
                break
            }
        }
    }
})

const isSafe = []

possiblySafe.forEach(item => {
    let can = true
    for (let i = 0; i < item.length -1; i++) {
        if (Math.abs(item[i] - item[i+1]) > 0 && Math.abs(item[i] - item[i+1]) < 4) {
            
        }else{
            can = false
        }
        
    }
    if (can) {
        isSafe.push(item)
    }else{
        for (let i = 0; i < item.length; i++) {
            let secondCan = true
            const newDataLine = [...item].splice(i, 1)
            for (let i = 0; i < newDataLine.length -1; i++) {
                if (Math.abs(newDataLine[i] - newDataLine[i+1]) > 0 && Math.abs(newDataLine[i] - newDataLine[i+1]) < 4) {
                    
                }else{
                    secondCan = false
                }
                
            }
        }
    }
})

possiblyEditedSafe.forEach(item => {
    let can = true
    for (let i = 0; i < item.length -1; i++) {
        if (Math.abs(item[i] - item[i+1]) > 0 && Math.abs(item[i] - item[i+1]) < 4) {
            
        }else{
            can = false
        }
        
    }
    if (can) {
        isSafe.push(item)
    }
})

console.log(isSafe)

