//Задание 3, Палиндром//
function palindrome(palindr) {
    let pal=palindr.toLowerCase("");
     let palDel=pal.replace(/\s/g, '').split('').join('');
     let palReverse = pal.replace(/\s/g, '').split('').reverse().join('');
         
         if (palReverse == palDel) {
       return 'Это палиндром';
     } else {
       return 'Это не палиндром';
     }
   }
 
  palindrome('А роза упала на лапу азора')
  //Задание 4, символ чаще всего//
  function mostFrequent(str){
    let m=str.split('');
    for(let i=0;i<m.length;i++){
      let f=1;
      if(m[i]==m[i+1]){
        console.log(m[i]+"="+(f+1));
          i++;
          }
         
  }
  }
  mostFrequent("abbcdefdacb");
  