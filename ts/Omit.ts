type Foo = {
  a: number;
  b: number;
}

type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>

const foo:MyOmit<Foo, 'a'> = {
  b: 2
}

export {}