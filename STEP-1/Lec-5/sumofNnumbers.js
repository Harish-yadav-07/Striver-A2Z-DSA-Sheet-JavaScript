function sumofFirstNnumbers(i , sum) {
    if (i < 1) {
        console.log(sum);
        return;
    }
    sumofFirstNnumbers(i - 1, sum + i);
}

sumofFirstNnumbers(10, 0)