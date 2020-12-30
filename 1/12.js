const readline = require('readline');

const calculateFunc = (data) =>{
  let result = 0
  let temp = Number(data)
  while(temp !== 0) {
    if(temp > 99){
      temp = temp - 100
      result += 1
    } else if(temp > 19){
      temp = temp - 20
      result += 1
    } else if(temp > 9){
      temp = temp - 10
      result += 1
    }else if(temp > 4){
      temp = temp - 5
      result += 1
    }else {
      result = result + temp
      temp = 0
    }
  }
  console.log('Output')
  console.log(result)
}

const run = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question(`Input\n`, (answer) => {
    calculateFunc(answer)
    rl.close()
  })
}

run()


