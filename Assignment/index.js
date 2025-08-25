let s = 45;
let d = 50;
let c = 120;
let e = 70;

console.log (typeof s);
let linebreak = "<br />";
f = s + 10;
document.write(f + linebreak);
s += 10;
document.write(s + linebreak);

sub = c -= 20;
document.write(sub + linebreak);

mul = d *= 2;
document.write(mul + linebreak);

div = e /= 2;
document.write(div + linebreak);

mod = c %= 3;
document.write(mod + linebreak);

if (s > d) {
  document.write("s is greater than d" + linebreak);
} else {
  document.write("s is less than d" + linebreak);
}


(s > d) 
  ? document.write("s is greater than d" + linebreak) :  
  document.write("s is not greater than d" + linebreak);
