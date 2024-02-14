type Foo = MyExclude<1 | 2, 1>

type MyExclude<T, U> = T extends U ? never : T

const foo:Foo = 2

export {}