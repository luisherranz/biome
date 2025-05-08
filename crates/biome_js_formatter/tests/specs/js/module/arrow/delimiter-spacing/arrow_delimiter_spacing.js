it('should have the default duration when using the onClose arguments', () => {
  expect(true);
});

it('mocks regexp instances', () => {
  expect(
    // () => moduleMocker.generateFromMetadata(moduleMocker.getMetadata(/a/)),
  ).not.toThrow();
});

expect(() => asyncRequest({ url: "/test-endpoint" }));

foo(({ a, b }) => { });

foo(
  (
    a = 1 +
      f({
        a,

        b
      })
  ) => { }
);

foo(
  (
    a = f({
      a,

      b
    })
  ) => { }
);

Seq(typeDef.interface.groups).forEach(group =>
  Seq(group.members).forEach((member, memberName) =>
    markdownDoc(
      member.doc,
      {
        typePath: typePath.concat(memberName.slice(1)),
        signatures: member.signatures
      }
    )
  )
)

const promiseFromCallback = fn =>
  new Promise((resolve, reject) =>
    fn((err, result) => {
      if (err) return reject(err);
      return resolve(result);
    })
  );

const testResults = results.testResults.map(testResult =>
  formatResult(testResult, formatter, reporter)
);

import('./someComponent').then(({ default: TheComponent }) => (props) => (
  props
));