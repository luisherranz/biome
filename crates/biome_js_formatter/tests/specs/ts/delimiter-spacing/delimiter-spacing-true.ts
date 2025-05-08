(foo: unknown) => { }
<Foo>(foo: unknown) => { }

type A = {
    (foo: unknown);
}
interface B {
    (foo: unknown);
}

class C {
    constructor(foo: unknown) { }
    method(@param foo) { }
    set foo(foo: unknown) { }
}
class D {
    constructor(private foo: unknown) { }
}

class F {
    constructor(
        @d1({
            x: string
        }) private a: string,
    ) { }
}

foo(() => {
    foo
},
    [] as never[]
);
foo(() => {
    foo
},
    bar as boolean
);
foo(() => {
    foo
},
    [] as object[][]
);

foo(() => {
    foo
},
    [] as Foo<number>[][]
);
foo(() => {
    foo
},
    bar as MyCustomType[],
);