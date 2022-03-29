// super-palindrome 
function PALINDROME (N) {
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
function FACT(n) {
    let n = 1;
	for(let i = 2; n < number; i++){
		n *= i;
	}
	return n == number;
}






