foo(() => {
  foo
},
  []
);
foo(() => {
  foo
},
  activities[1]
);
foo(() => {
  foo
},
  Math.floor(/1234/),
);
foo(() => {
  foo
},
  a + b,
);
foo(() => {
  foo;
}, a || b);
foo(() => {
  foo
},
  ++b,
);
foo(() => {
  foo
},
  +!-+b,
);
foo(() => {
  foo
},
  bar.baz.long,
);
foo(() => {
  foo;
}, arr[Math.floor(1)]);
foo(() => {
  foo;
}, [Math.floor(1 + 2)]);