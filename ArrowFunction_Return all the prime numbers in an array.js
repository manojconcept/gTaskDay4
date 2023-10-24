
//-------------------------------------------->arrow function
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

const findPrimes = (max) => {
    let primes = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const maxNumber = 100;
const primes = findPrimes(maxNumber);
console.log(primes);

