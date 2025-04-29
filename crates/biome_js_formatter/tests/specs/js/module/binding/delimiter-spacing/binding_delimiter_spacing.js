function foo() {}
function foo(foo) {}
function foo({ foo }) {}
function foo([foo]) {}
function foo({ loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong }) {}
async function foo(foo) {}
function* foo(foo) {}
async function* foo(foo) {}

() => {}
(foo) => {}
({ foo }) => {}
([foo]) => {}
({ looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong }) => {}
async (foo) => {}

class Foo {
    foo() {}
    foo(foo) {}
    foo({ foo }) {}
    foo([foo]) {}
    foo({ loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong }) {}
    async foo(foo) {}
    async *foo(foo) {}
    *foo(foo) {}
}