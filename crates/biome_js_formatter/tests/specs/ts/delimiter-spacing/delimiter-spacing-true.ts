(foo: unknown) => {}
<Foo>(foo: unknown) => {}

type A = {
    (foo: unknown);
}
interface B {
    (foo: unknown);
}

class C {
    constructor(foo: unknown) {}
    method(@param foo) {}
}
class D {
    constructor(private foo: unknown) {}
}