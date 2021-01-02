const readline = require('readline');

const calculateFunc = (data) =>{
  let temp = null
  let result = 0
  const checker = ['R','G','B']
  let isCheck = false
  for (var i = 0; i < data.length; i++) {
    if(temp && (temp === data.charAt(i))){
      result += 1
    } else {
      temp = data.charAt(i)
    }
    isCheck = checker.includes(temp)
  }
  if(isCheck){
    console.log('Output')
    console.log(result)
  } else {
    console.info('Warning : Second Input must be "R" "G" or "B"')
  }
}

const run = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question(`Input\n`, (answer) => {
    const number = Number(answer)
    if(!Number.isNaN(number)){
      rl.question('',(ans)=>{
        const stone = ans
        const data = stone.substring(0,number)
        calculateFunc(data)
        rl.close()
      })
    }else {
      console.info('Warning : First Input must be Number')
      rl.close()
    }
  })
}

run()


