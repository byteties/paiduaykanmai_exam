const readline = require('readline');

const calculateFunc = (data) =>{
  let temp = null
  let result = 0
  for (var i = 0; i < data.length; i++) {
    if(temp && (temp === data.charAt(i))){
      result += 1
    } else {
      temp = data.charAt(i)
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
    const number = answer
    rl.question('',(ans)=>{
      const stone = ans
      const data = stone.substring(0,number)
      calculateFunc(data)
      rl.close()
    })
  })
}

run()


