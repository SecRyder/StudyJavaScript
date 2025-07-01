// Cac ham toan hoc thong dung
// 1. Ham Math.sqrt()
let a = Math.sqrt(4);
console.log(a);

// 2. Ham Math.pow()
let b = Math.pow(2, 3);
console.log(b);

// 3. Ham Math.abs()
let c = Math.abs(-10);
console.log(c);

// 4. Ham Math.ceil() va Math.floor()
let d = Math.ceil(5.01);
console.log(d);

let e = Math.floor(5.01);
console.log(e);

// 5. Ham Math.round()
let f = Math.round(7.5);
console.log(f);

// 6. Ham toFixed() => Lam tron va tra ve kieu chuoi
let g = 3.145643;
let gRound = g.toFixed(2);
console.log(gRound);
console.log(typeof gRound);

// 7. Ham Math.min() va Math.max()
let num1 = 8, num2 = 9, num3 = 10;
let minValue = Math.min(num1, num2, num3);
console.log(`Gia tri min: ${minValue}`);
let maxValue = Math.max(num1, num2, num3);
console.log(`Gia tri max: ${maxValue}`);

// 8. Number
let str = '123';
console.log(typeof str);
let num = Number(str);
console.log(num);
console.log(typeof num);

// 9. Ham isNaN: co the chuyen doi qua so khong: neu khong tra ra True, neu co tra ve false
console.log(isNaN(str));

// 10. Ham Number.isNaN: tra ve true neu value hoac bieu thuc truyen vao co gia tri NaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("abc" / "bcd"));  // true
console.log(Number.isNaN(0 / 0)); // true
