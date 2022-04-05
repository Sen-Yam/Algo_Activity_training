// super-palindrome 
/*function PALINDROME (N) {
    if(N < 10) {
        return true;
    }
    else {       
        var A;
        A=N;
        var S=0;
        while(A > 0) {
           S=S*10 + A%10 ;
           A=Math.floor(A/10);
        }
        if(S==N) {
            return true;
        }
        else {
            return false;
        }

    }
}

// verifier est ce que N possede une racine entiere + verifier si cette racine est palindrome
function SQRT_PALINDROME(N) {
    if(N % Math.sqrt(N) !=0) {
        return false ;
    }
    else {
        return PALINDROME(Math.sqrt(N)) ;  // if (PALINDROME(Math.sqrt(N)))
    }
}

//  [4 , 140]
for(var i=4 ; i<=140 ; i++) {
    if(PALINDROME(i) && SQRT_PALINDROME(i)) {
        console.log(i);
    }
}

// a given number  , is it a factorial value of another one ? 
function FACT(number) {
    let n = 1;
	for(let i = 2; n < number; i++){
		n *= i;
	}
	return n == number;
}


*/



// calculer la distance minimale entre x et y , tel que x et y existent dans un tableau
//  x=1  y=2

var T=[1,0,0,0,2,0,0,2,0,1,0,2];
var D=T.length-1; 
 //distance
var x=1;
var y=2;                        // x=1  j=position(x) ......parcours la fin du tab (trouver le y)
var i=0;
while(i<T.length) {
    if(T[i]==x) {
         j=i+1;
        while(j<T.length && T[j]!=y) {
            j++;
            if(T[j]==x) {
                i=j;
            }
        }
        if(j!=T.length) {
           if(j-i <D)  {
               D=j-i;
           }
        }
        i=j;
    }
    if(T[i]==y) {
         j=i+1;
        while(j<T.length && T[j]!=x) {
            j++;
            if(T[j]==y) {
                i=j;
            }
        }
        if(j!=T.length) {
           if(j-i <D)  {
               D=j-i;
           }
        }
        i=j;   //REMARK : it's so important to do this isntruction to avoid the infinite loop !
    }
   
}

console.log(`La distance minimale est : ${D}`);




