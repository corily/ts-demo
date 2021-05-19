### ts 编译成 js

 ```shell
 tsc test.ts
 # 自动编译
 tsc test.ts -w  

 # tsconfig.json 文件： ts变压器的配置文件
 # 编译所有ts文件
 tsc 
 tsc -w
 ```

 ### 基本类型

 |  类型       |   例子       |   描述     |
 |-------|-------|-------|
 |  number  | 1, -3, 1.4  |  任意数字，支持2/8/10/16进制  |
 |  string  | 'hello'  |  任意字符串  |
 |  boolean  | true, false  |  true or false  |
 |  字面量  | 其本身  |  限制变量的值就是改字面量的值  |
 |  any  | *  |  任意类型，可赋值给其他类型变量  |
 |  unknown  | *  |  类型安全的any，不可赋值给其他类型变量  |
 |  void  | 空值(undefined)  |  没有值 or undefined  |
 |  never  | 没有值  |  不能是任何值  |
 |  object  | {a: 123}  |  js对象  |
 |  array  | [1,2,3]  |  js数字  |
 |  tuple  | [1,2,3]  |  元组，ts新增类型，固定长度数组  |
 |  enum  | enum{A,B}  |  枚举，ts新增类型  |
 |  undefined  | u:undefined  |  undefined  |
 |  null  | n:null  |  null  |

 #### 类型声明

ts中用小写字母开头的类型代表字面量, 大写的是用来表示通过new实例化的数据.

语法：

```javascript
 let 变量: 类型
 let 变量: 类型 = 值

 function fn(参数: 类型, 参数: 类型): 类型 {
   // ...
 }

 // 函数声明
 let fn = (a: number, b: string) => number

 // 对象声明
 let obj: {name: string, age?: number, [propName: string]: any}

 // 数组
 let arr: string[]
 let arr2: Array<number>
```

例子：

```javascript

 let a = 123 // ts里，隐形转换为 Number 类型

 let b: 10 // 使用字面量进行类型声明，限制变量的值就是改字面量的值，类似 const 常量，
 b = 10
 b = 11 // 此时报错


// 联合类型
 let c: boolean | string

 let d: 'male' | 'female' // 值只能是 male or female


 // 字面量
 const e: number = 123
 // 非字面量
 const f: Number = new Number(123)


 let g: unknown = 123
 let h: string = 'test'

 h = g // 报错， unknown类型不能直接赋值给其他类型变量

 // unknown 类型赋值写法
 if (typeof g === 'string') {
   h = g
 }
 h = g as string
 h = <string> g

 // void
 function fn (num: number): void {

 }

 // never
 function fn2 (num: number) : never {
   throw new Error('err msg')
 }



 let i: object // 这种声明，只有是引用类型都可以
 i = {}
 i = function () {}

 // 指定对象包括的属性及其类型, ? 表示 该属性可选
 [propName:string]: any 表示对象可以有任意类型的属性，propName可以是任意值
 let j: {name: string, age?: number, [propName:string]: any} 
 j = {name: 'vovo', age: 12}


 // 定义function的参数类型及返回类型
 let fn3: (a: number, b: string) => number

 function fn1 () {
   alert(this)
 }

 // 禁止不明确类型的this
 function fn1 (this: any) {
   alert(this)
 }
 
 const fn2 = (a: number, b: number): number => {
   return a + b
 }



 // 数组声明
 let arr1: string[] // 字符串数组
 arr1 = ['a', 'b']

 let arr2: Array<number> // 数值数组
 arr2 = [1, 2, 3]


 // 元组tuple：固定长度及元素类型的数组
 let tuple1: [string, number] = ['test', 123]

 // 枚举：enum
 enum Gender {
   Male = 0,
   Female = 1
 }
 let enum1: {name: string, gender: Gender}
 enum1 = {
   name: 'vovo',
   gender: Gender.Male
 }
 console.log(enum1.gender === Gender.Male)


 // & : 表示同时
 let obj = {name: string} & {age: number}
 obj = {name: 'vv', age: 12}



 // 类型的别名
 type myType = 1 | 2 | 3 | 4
 let asA: myType
 let asB: myType

 ```


 #### 函数重载

 ```javascript
 // 函数重载声明
 function add(x: string, y: string): string
 function add(x: number, y: number): number
 
 // 函数声明
 function add(x: string | number, y: string | number): string | number {
   if(typeof x === 'string' && y === 'string') 
     return x + y
   else if (typeof x === 'number' && y === 'number')
     return x + y
 }
 
 add('aa', 'bb')
 add(10, 20)
 add('aa', 20) // 如果没有函数重载声明，则ts不会提示错误
 ```


 ### Class类

 面向对象（OOP）的三大特性：封装、继承、多态


 ```javascript
/*
  abstract: 抽象类，一般此类只用于继承（生来就是当爸爸的），不能创建实例对象（new）
    抽象方法
*/
abstract class Animal {

  constructor (name: string) {
    this.name = name
  }

  // 实例属性
  name: string

  // 静态属性
  static height: string
  static readonly phone: number
  readonly weight: string

  // 实例方法
  say (msg: string) : string {
    return msg
  }

  // 抽象方法：没有方法体，只能在抽象类里定义，子类必须重写抽象方法
  abstract go (arrs: string) : void

  // 静态方法
  static speak (msg: string) : string {
    return msg
  }

}

class Person extends Animal {
  age: number

  constructor(name: string, age: number) {
    // super 当前类的父类
    super(name)
    this.age = age
  }

  // 重写抽象方法
  go (val: string) {
    console.log('go go go~~ ', val)
  }

}

// new Animal('animalll~~~~~')

new Person('ppperson', 15)

Person.speak('niceeeeeee')
```

TS中，类的修饰符，用于限定成员或类型的性质

```javascript
/*
    public： 公有属性

    private： 私有属性，只能在类内部访问，不能继承，可以在class中添加方法获取私有属性

    protected： 受保护的属性，只能在当前类及当前类的子类中访问
*/


class Person1 {
  public name: string

  private _age: number

  constructor(name: string, age: number) {
    this.name = name
    this._age = age
  }

  // 一般修改私有属性用法
  getAge () {
    return this.age
  }

  setAge (value: number) {
    if (value >= 0) this._age = value
  }

  // ts 存取器（getter & setter） 可以用访问属性的方式，访问方法 xxx.age
  get age() {
    return this._age
  }

  set age (value: number) {
    if (value >= 0) this._age = value
  }
}

const p2 = new Person1('privateeee', 132)
console.log(122, p2)
console.log(p2.name)
// p2.setAge(15)
// console.log(p2.getAge())

// 使用 getter 定义的
p2.age = 144
console.log(p2.age)




// 使用constructor声明属性
class Ac {
  // 传参时，直接声明属性
  constructor(public name: string, private _age: number, protected gender: string) {
    this.name = name
    this._age = _age
    this.gender = gender
  }
  
  get age () {
    return this._age
  }

  set age (value: number) {
    this._age = value
  }
}

const ac = new Ac('cons', 16, '男')
```


### Interface接口


```javascript
// 描述一个对象的结构： 类、接口

// 描述一个对象的类型
type myType = {
  name: string,
  age: number,
  [propName: string]: any
}

const obj: myType = {
  name: 'ooo',
  age: 12,
  gerder: 1
}



/**
 * 接口： interface
 * 用来定义一个类结构(class)，也可以当成类型声明去使用（type）
 * 
 * class 和 interface 区别：
 *    interface类似抽象类，属性不能有实际值(抽象属性)，方法不能有方法体(抽象方法)
 * 
 * type 和 interface 区别：
 *    type: 不能重复定义同一个type
 *    interface： 可以重复定义同一个interface，多个相同的interface，进行merge
 */

interface myInterface {
  name: string,
  age: number
}

interface myInterface {
  gender: number,
}

const obj2: myInterface = {
  name: 'interrrr',
  age: 11,
  gender: 1,
}


/*
  使用类实现一个接口（使类满足接口的要求）
*/

interface myInter {
  name: string
  say(): void
}

class MyClass implements myInter {
  constructor(name: string) {
    this.name = name
  }

  name: string

  say () {
    console.log('implements  inter say~~')
  }
}
```


### 泛型

```javascript
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

// 泛型T必须符合接口Inter1, T 类型必须有length属性
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
```


### 文件声明 declare

一般用于使用第三方库时，显示提示信息。声明文件放置到单独的文件 xxx.d.ts 里，ts会自动解析 d.ts 文件

```javascript
import jQuery from 'jquery'

// 声明
declare const jQuery: (selector: string) => any
// 推荐使用第三方声明文件，如jquery声明文件，使用 @types/jquery 包
// https://www.typescriptlang.org/dt/search

// 使用
jQuery('xxx')
```
