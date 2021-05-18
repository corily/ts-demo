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
console.log(obj)



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
console.log(obj2)


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