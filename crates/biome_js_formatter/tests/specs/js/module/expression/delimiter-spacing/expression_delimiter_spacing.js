() => (1, 2);
() => (1, /* this */ 2, 3);
() => true ? 1 : 2;
foo(p, () => {
    return true;
}, []);
foo.bar(this.baz, (p) => p());