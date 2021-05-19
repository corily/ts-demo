/* 
  在定义函数 或 类时，类型不明确就可以使用泛型
    泛型可以同时指定多个
*/

function func1 <T> (a: T) : T {
  console.log(a)
  return a
}

// 调用具有泛型的函数
func1(66) // 不指定泛型时，ts可以自动对类型进行推断
func1<string>('05-泛型.ts') // 指定泛型


function func2 <T, K> (a: T, b:K) : T {
  console.log(a, b)
  return a
}

func2<string, number>('aaa', 88)


interface Inter1 {
  length: number
}

// 泛型T必须符合接口Inter1
function func3<T extends Inter1> (a: T) : number {
  console.log(a)
  return a.length
}

console.log( func3('1222') )



class Ac2<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}

const ac2 = new Ac2<string>('nameeeee')

function func4<T extends Inter1> (a: T) : number {
  console.log(a)
  return a.length
}

console.log( func4('1222') )