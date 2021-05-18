/*
  TS 定义属性类型
    public： 公有属性
    private： 私有属性，只能在类内部访问，不能继承
    protected： 受保护的属性，只能在当前类及当前类的子类中访问
*/


class Person1 {
  // ts可以定义public / private
  // 公有属性 public
  public name: string

  // 私有属性 private, 只能在class内部访问，可以在class中添加方法获取私有属性
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

  // ts 提供 getter 方法, 可以用访问属性的方式，访问方法 xxx.age
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
console.log(ac)