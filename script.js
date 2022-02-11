let btn = document.getElementsByClassName("drum");
// for(let i=0 ;i <btn.length ;i++)
// {
//     btn[i].addEventListener("onclick",function()
//     {
//         let btnText = this.innerHTML;
//         // console.log(btnText);
//         sound(btnText);
//     });
// }

document.addEventListener("keypress",function(event)
{
      sound(event.key);
});

function sound(key)
{
  switch(key)
  {
      case "w" : 
              let btn1 = new Audio("sounds/drum.wav"); 
              btn1.play();
              break;
      
      case "a" : 
              let btn2 = new Audio("sounds/drum.wav"); 
              btn2.play();
              break;
  
      case "s" : 
              let btn3 = new Audio("sounds/drum.wav"); 
              btn3.play();
              break;        

      case "d" : 
              let btn4 = new Audio("sounds/drum.wav"); 
              btn4.play();
              break;

      case "j" : 
              let btn5 = new Audio("sounds/drum.wav"); 
              btn5.play();
              break;
          
      case "k" : 
              let btn6 = new Audio("sounds/drum.wav"); 
              btn6.play();
              break;
      
      case "l" : 
              let btn7 = new Audio("sounds/drum.wav"); 
              btn7.play();
              break;
  }
}