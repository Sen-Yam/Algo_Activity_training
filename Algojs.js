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
/* var deb,fin;
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


 
[1,2,3,2,1,2,3,4,5,6,0,-1,-2,1,2]  => [1,2,3,2,6,5,4,3,2,1,0,-1,-2,1,2]
deb =4
fin =9
sizeSeq = 6

 */













/* // SESSION 3 :

// Algo arrays : function coffee(bills) {

	function coffee(bills) {
        let reg = {
          fifty: 0,
          hundred: 0,
          two_hundred: 0,
        };
      
        for (let i = 0; i < bills.length; i++) {
          if (bills[i] === 50) {
            reg.fifty++;
          }
      
          if (bills[i] > 50) {
            const dueBack = bills[i] - 50;
                  
            if (dueBack === 150) {
              if (reg.fifty < 1 || reg.hundred < 1) {
                return false;
              }
              reg.fifty--;
              reg.hundred--;
              reg[bills[i]]++;
            }
      
            if (dueBack === 50) {
              if (reg.fifty < 1) {
                return false;
              }
              reg.fifty--;
              reg[bills[i]]++;
            }
          }
        }
      
        return true;
      }
    console.log(coffee([50, 50, 100, 100, 200]));





 */

// Algo matrices (Pascal Triangle)



/* 
function Matrice(N) {
    for(var i=0 ; i<N  ; i++) {
        for(var j=0 ; j<N ; j++) {
            M[i][j]=0;
        }
    }
}

*/
/* var N=5; // size de la matrice M
var M=[ [0,0,0,0,0],   
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]]

// remplir la diaginale M[i][i]=1
for(var i=0 ; i<N ; i++) {
    M[i][i]=1;
    M[i][0]=1;   // remplir la 1ere colonne de la matrice par 1
}

// remplir les autres elements 
for(var i=2 ; i < N ; i++) {
    for (j=1 ; j<N ; j++) {
        M[i][j]=M[i-1][j-1] + M[i-1][j] ;
    }
}
// traitement  sur les arrays : M[i]
for( var i=0 ; i<N ; i++) {
   
     var X=N-i-1;
    while(X > 0) {
        M[i].pop();
        X--;
    } 
    console.log(M[i]);

}

 */

// Exo 1 :
 /* var M=[
        [1,2,3,4] , 
        [1,2,3,4],
        [1,2,3,4],      // T[1,1,2,1,2,3,1,2,3,4]
        [1,2,3,4]
    ]
var T=[];
var i=0; // indice de lignes
var j=0;  // indice de colonnes
while(i < M.length) {
    var K=i;  // lignes
    var L=j; // colonnes
    while(K >=0) {
        T.push(M[K][L]);
        K--;
        L++;
    }
    i++;

}
console.log(T); */




/* deroulement : 
Au debut : i=0 ; j=0 donc K=0 ; L=0;
T.push(M[0][0]);    K-- K=-1 ; L++ ; L=1 
i=1 ; +
K=1 ; L=0; T.push(M[1][0]) 
K--  K=0 ; L++  L=1 
T.push(M[0][1])





lorsque i=2 et le j=0 :
K=2   L=0
T.push(M[2][0])
K--;   K=1
L++ ;  L=1
K-- ; K=0
L++ ; L=2
T.push(M[0][2])
K-- K=-1   j'arrete le traitement de la 2eme boucle






 */
// Exo 2 :
 /* var M=[
    [1,2,3,4] ,   // [4,1,2,3]
    [5,6,7,8],  //[4,1,2,3]
    [9,10,11,12],    // [4,1,2,3] 
    [1,2,3,4]  // [4,1,2,3]
]
// 
var i=0;
while(i < M.length) {
    var j=M.length-1;  // manipuler les colonnes
    var X=M[i][j];
    while(j > 0) {
        // rotation :
        M[i][j]=M[i][j-1];
        j--;
    }
    M[i][j]=X;
    i++;

}
console.log(M); */

/*
apres la rotation : 
M=[
    [4,1,2,3] , 
    [4,1,2,3],
    [4,1,2,3],      
    [4,1,2,3]
]
deroulement :
i=0 : [1,2,3,4]  
X=4  j=3;   et on decremente le j   // [4,1,2,3]
T[i][0]=X=4


  */
// Exo 3 :
/* var M=[
    [1,2,3,4] , // i=0 ; j=N-1   N=M;length
    [1,2,3,4],  // i=1 ; j=N-2     // j=N-i-1   
    [1,6,3,4],     // i=2 ; j=N-3; 
    [1,2,3,4]       // i=3 ; j=N-4;
]
var N= M.length;
var Max= M[0][N-1];
var Imax= 0 ;
var Jmax = N-1;
var i=0;
while(i < N) {
    if(Max < M[i][N-i-1 ]) {
        Max=M[i][N-i-1 ];
        Imax = i;
        Jmax=N-i-1 ;
    }
    i++;
}   // 6   i=2   j=1
console.log(`la valeur maximale est ${Max} de la position : (${Imax} , ${Jmax})`);

 */

// Matrix 5*5  : 

var M=[ [1,  2,3,  4,5],
        [6,  7,8,  9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],    // 1 2 3 4 5 10 15 20 25 24 23 22 21 16 11 6 7 8 9 14 19 18 17 12 13
        [21,22,23,24,25]];


// Displaying the matrix in the spiral order : 



// The code :
var Left= 0;
    Right=M.length-1 ;
    Top= 0;
    Bottom= M.length-1;
while(Left != Right && Top != Bottom)  {
     // boucle pour afficher les elements de gauche a droite
    // i= Left   j il demarre du left jusqu'a Right

    for(var j=Left ; j<Right ; j++)   {
        console.log(M[Left][j])
    }
    // boucle pour affciher les elements from top to bottom
    // le nombre des lignes change , le nombre des colonnes est fix
    // j= Right    i=Top+1    le i s'incremente
    for(var i=Top ; i<Bottom ; i++) {
        console.log(M[i][j]);
    }
    // Boucle pour afficher les elements from Right to Left
    // le nombre de colonnes change  ,  le nombre de lignes est fix
    // i= Bottom    ; j=Right  a Left  le j se decremente
    for(var j=Right ; j>Left ; j-- ) {
        console.log(M[i][j]);
    }
    //  Boucle pour afficher les elements from bottom to Top
    //   le nombre des lignes change , le nombre des colonnes est fix
    // i=Bottom   a Top+1             j=Left
    for(var i=Bottom ; i>Top ; i--) {
        console.log(M[i][j]);
    }
    Left++;
    Right--;
    Top++;
    Bottom--;

}

console.log(M[Left][Left]);
   