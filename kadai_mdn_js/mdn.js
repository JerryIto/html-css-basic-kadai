//Date関数を呼び出し、オブジェクト化
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth()+1;
const day = today.getDate();

//`でバッククォート
const kadai = `${year}年${month}月${day}日`;

console.log(kadai);
