import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// スプレッド構文
const arr1 = [1, 2, 3];
console.log(arr1);
console.log(...arr1);

// mapやfillterえお使った配列の処理
const nameArr = ["タナカ", "yamada", "jan"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr);
// }

const num = 1300;
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

console.log(formattedNum);

const cheackSum = (num1, num2) => {
  return num1 + num2 >= 100 ? num1 + num2 : "っ雑魚だね";
};

console.log(cheackSum(12, 0));
