const readline = require('readline');

const calculateNumber = (longNum,num,data,count=0) => {
  let result = data
  let i = 0
  if(longNum%num[i] === 0){
    result = longNum/num[i]
    return result
  } else {
    result = Math.floor(longNum/num[i]) - 1
    let cal = (result * (num[i]-count)) +num[i+1]
    if(cal === longNum){
      if(count === 0){
        result = result + 1
      }
    } else if(cal > longNum){
      if(num[i+1] / num[i] > 1){
        count += 1
      }
      calculateNumber(longNum,num,result,count)
    } else {
      num.shift()
      calculateNumber(longNum,num,result,count)
    }
  }
  return result
}

const calculateFunc = (data) =>{
  let longTwigs = data[0]
  data.shift()
  const temp = data.sort()
  const result = calculateNumber(longTwigs,temp,0)
  console.info('Output')
  console.info(result)
}

const run = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question(`Input\n`, (answer) => {
    const array =  answer.split(' ').map((e)=>Number(e))
    const check = array.filter((e)=>Number.isNaN(e))
    if(check.length === 0){
      calculateFunc(array)
    } else {
      console.info('Warning : All Input must be Number')
    }
    rl.close()
  })
}

run()


