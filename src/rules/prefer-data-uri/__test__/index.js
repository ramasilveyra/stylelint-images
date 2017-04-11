import testRule from 'stylelint-test-rule-tape';
import broken, { ruleName, messages } from '../index';

const imageValid = 'https://ramasilveyra.github.io/stylelint-images/media/image-1.png';
const imageDataURI = 'https://ramasilveyra.github.io/stylelint-images/media/image-2.png';

testRule(broken, {
  ruleName,

  config: 3000,

  accept: [
    {
      code: `.foo1 {
        background: url("${imageValid}");
      }`
    },
    {
      code: `.foo1 {
        background-image: url("${imageValid}");
      }`
    },
    {
      code: `.foo1 {
        content: url("${imageValid}");
      }`
    },
    {
      code: `.foo2 {
        background: url('${imageValid}');
      }`
    }
  ],
  reject: [
    {
      code: `.foo1 {
        background: url('${imageDataURI}');
      }`,
      message: messages.expected(imageDataURI),
      line: 2,
      column: 9
    },
    {
      code: `.foo1 {
        background-image: url("${imageDataURI}");
      }`,
      message: messages.expected(imageDataURI),
      line: 2,
      column: 9
    },
    {
      code: `.foo1 {
        background-image: url("${imageValid}"), url("${imageDataURI}");
      }`,
      message: messages.expected(imageDataURI),
      line: 2,
      column: 9
    },
    {
      code: `.foo1 {
        content: url("${imageDataURI}");
      }`,
      message: messages.expected(imageDataURI),
      line: 2,
      column: 9
    }
  ]
});
