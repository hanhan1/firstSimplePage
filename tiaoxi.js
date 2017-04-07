let final = `
let me = {
  name: 'SunnyZhang',
  birth: new Date(1989,9,21),
  gender: 'male',
  jobTitle: 'Android Engineer',
  everday: {
    work: function(){
      wakeUp()
      openWeiChat()
      haveBreakFirst()
      develop()
      haveLunch()
      sayGoodNightToHanHan()
      playGames()
      goToBed()
    }
  },
  hobbies: [
    { name:'loveHanHan'},
    { name:'badminton'}
  ]
}
` 
let n = 0
console.log(Prism.languages)

var id = setInterval(function(){
  console.log(n)
  if(n===final.length){
    clearInterval(id)
  }
  n+=1
  html = final.substring(0,n)
  code.innerHTML = Prism.highlight(html, Prism.languages.js)
}, 50)