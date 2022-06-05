let a = 2;
let b = 9;
let c = 1;
let x1 = 0;
let x2 = 0;

let discriminant = b * b - 4 * a * c;

if (discriminant > 0 || discriminant < 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log(`D=${discriminant}, x1=${x1}, x2=${x2}`);
} else if (discriminant == 0) {
    x1 = -(b / (2 * a));
    x2 = x1;
    console.log(`D=${discriminant}, x=${x1}`);
}