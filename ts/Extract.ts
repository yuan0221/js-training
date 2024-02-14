type Foo = MyExtract<1 | 2, 1>

type MyExtract<T, U> = T extends U ? T : never

const foo:Foo = 1

export {}