import testRule from 'stylelint-test-rule-tape';
import broken, { ruleName, messages } from '../index';

const imageValid = 'https://cdn.auth0.com/styleguide/components/1.0.5/media/breadcrumb/img/home-icon-light.svg';
const imageBroken = 'https://cdn.auth0.com/this-image-doesnt-exist.svg';

testRule(broken, {
  ruleName,

  config: true,

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
        background: url('${imageBroken}');
      }`,
      message: messages.unexpected(imageBroken),
      line: 2,
      column: 9
    },
    {
      code: `.foo1 {
        background-image: url("${imageBroken}");
      }`,
      message: messages.unexpected(imageBroken),
      line: 2,
      column: 9
    },
    {
      code: `.foo1 {
        background-image: url("${imageValid}"), url("${imageBroken}");
      }`,
      message: messages.unexpected(imageBroken),
      line: 2,
      column: 9
    },
    {
      code: `.foo1 {
        content: url("${imageBroken}");
      }`,
      message: messages.unexpected(imageBroken),
      line: 2,
      column: 9
    }
  ]
});
