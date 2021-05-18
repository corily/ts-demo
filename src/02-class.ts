/*
  abstract: 抽象类，一般此类只用于继承（生来就是当爸爸的），不能创建实例对象（new）
    抽象方法
*/
abstract class Animal {

  constructor (name: string) {
    console.log(111, this)
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
    console.log(msg)
    return msg
  }

}

class Person extends Animal {
  age: number

  constructor(name: string, age: number) {
    // super 当前类的父类
    super(name)
    console.log(222, age)
    this.age = age
  }

  // 重写抽象方法
  go (arrs: string) {
    console.log('go go go~~ ', arrs)
  }

}

// const a1 = new Animal('animalll~~~~~')
// console.log('animal: ', a1)

const p1 = new Person('ppperson', 15)
console.log('person: ', p1)

Person.speak('niceeeeeee')
console.log(Person.prototype.constructor === Person) // true