console.log('Hello Ts')
let a: number = 1
a = 2

let b: number = 2.3

let g: unknown = 123
let k: string = 'test'

//  k = g // 报错， unknown类型不能直接赋值给其他类型变量

 // unknown 类型赋值写法
 if (typeof g === 'string') {
   k = g
 }
 k = g as string
 k = <string> g

//  function fn1 () {
//    alert(this)
//  }

// 禁止不明确类型的this
function fn1 (this: any) {
  alert(this)
}

const fn2 = (a: number, b: number): number => {
  return a + b
}

console.log(1111, fn2(123, 456))