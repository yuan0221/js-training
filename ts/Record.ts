// Record 的实现
type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}
type Foo = MyRecord<'a', string>
const foo: Foo = { a: '1' }


// 合并两个类型
interface I1 {
  a: string
}
interface I2 {
  b: string
}
type Baz = MyRecord<keyof I1 | keyof I2, number>
const uu: Baz = {
  a: 1,
  b: 2
}


// Type -> data
type Size = 'small' | 'medium' | 'large';
const size:Record<Size, number> = {
  small: 8,
  medium: 16,
  large: 24
}


// data -> Type
const size2 = {
  small: 8,
  medium: 16,
  large: 24
}
type Size2 = keyof typeof size2



export {}