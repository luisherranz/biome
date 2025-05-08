<Foo
    foo={foo(p, {
        foo,
        bar,
        baz
    })}
    bar={(p) => {
        foo((p) => ({
            ...p,
        }));
    }}
/>;