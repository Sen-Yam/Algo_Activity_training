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

/* var T=[1,0,0,0,2,0,0,2,0,1,0,2];
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

 */

// inverser la plus longue sequence croissante dans un tableau non triee 
var deb,fin;
var Taille=0;
var i=0;
var T=[1,2,3,2,1,2,3,4,5,6,0,-1,-2,1,2] ;
var sizeSeq=0;
while(i< T.length) {
    while(i<T.length && T[i] < T[i+1] ) {
        i++;
        sizeSeq++;
       
    }
    if(i < T.length) {
        if(sizeSeq ==0) {
            i++;

        }
        else {
            if(sizeSeq > Taille) {
                Taille = sizeSeq;
                fin=i;
                deb =fin - sizeSeq ; 
            }
            i++;
            sizeSeq=0;
        }
    }
}
// pernuter les elements de la sequence croissante d'indices deb et fin 
// deb =8    fin=14
console.log(deb)
console.log(fin)
while (deb < fin) {
    var X=T[deb];
    T[deb]=T[fin];
    T[fin]=X;
    deb++;
    fin--;

}
console.log(T);




// 6 2 3 4 5 6  apres la permutation : 6 5 4 3 2 1


/* apres la boucle : sizeSeq=0  =>   debut de la sequence croissante ou une sequence decroissante 
Sinon =>  la fin de la sequence croissante : comparer la taille + sauvegarder le debut et la fin de
 la sequence croissante
*/

/* 
[1,2,3,2,1,2,3,4,5,6,0,-1,-2,1,2]  => [1,2,3,2,6,5,4,3,2,1,0,-1,-2,1,2]
deb =4
fin =9
sizeSeq = 6

*/

  



