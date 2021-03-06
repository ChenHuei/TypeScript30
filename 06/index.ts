// 回呼函式 Callback Functions: 函式不需要積極對參數註記 (by 泛型)

const array1 = [1, 2, 3]
const array2 = array1.map(item => item * 2)

// Tuples 元組

type Vehicle = [string, string, string, Date]

let BMW: Vehicle = ['BMW', 'motorcycle', 'silver', new Date()]
let Toyota = ['Toyota', 'recreational', 'white', new Date()]

// Array 裡面的元素之型別只要為此陣列規定的範疇內（比如說 (number | string)[]），除了沒有限定元素的數量外，順序也不限定
// 元組型別則是除了元素的個數必須固定外，格式必須完全吻合，因此裡面元素型別的順序也是固定

// 應用範圍：座標、讀取 CSV 檔案