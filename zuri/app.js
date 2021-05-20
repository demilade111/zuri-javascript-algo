
function checkYuGiOh(n) {
    const myArr = [];
    if (isNaN(n)) {
      return `invalid parameter: ${n}`;
    }
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
        myArr.push("yu-gi-oh");
      } else if (i % 2 == 0 && i % 3 == 0) {
        myArr.push("yu-gi");
      } else if (i % 2 == 0 && i % 5 == 0) {
        myArr.push("yu-oh");
      } else if (i % 3 == 0 && i % 5 == 0) {
        myArr.push("gi-oh");
      } else if (i % 2 == 0) {
        myArr.push("yu");
      } else if (i % 3 == 0) {
        myArr.push("gi");
      } else if (i % 5 == 0) {
        myArr.push("oh");
      } else {
        myArr.push(i);
      }
    }
    return myArr;
  }
  
console.log(check("output"));