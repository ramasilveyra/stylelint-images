import { utils } from 'stylelint';
import { isNumber } from 'lodash';
import { namespace, generateListOfImagesURLsAndNodes, getImage } from '../../utils';

export const ruleName = namespace('prefer-data-uri');
export const messages = utils.ruleMessages(ruleName, {
  expected: imageURL => `Expected image "${imageURL}" to be as data-URI.`
});

export default function ruleDataURI(limitBytes) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, {
      actual: limitBytes,
      possible: [isNumber]
    });

    if (!validOptions) {
      return null;
    }

    const list = generateListOfImagesURLsAndNodes(root);

    return checkImagesSizes(list, result).then(results =>
      reportImagesWithSizeGreaterThan(results, result, limitBytes)
    );
  };
}

function checkImagesSizes(list) {
  const checkList = list.map(listItem => settlePromise(getImageAndSize(listItem)));

  return Promise.all(checkList);
}

function settlePromise(promise) {
  return promise.catch(listItemError => listItemError);
}

function getImageAndSize(listItem) {
  return getImage(listItem.url)
    .then(response => ({
      ...listItem,
      bytesSize: response.data.length
    }))
    .catch(() => {});
}

function reportImagesWithSizeGreaterThan(results, result, limitBytes) {
  results.filter(resultItem => !!resultItem).forEach(({
    node,
    url,
    bytesSize
  }) => {
    if (bytesSize < limitBytes) {
      utils.report({ message: messages.expected(url), node, result, ruleName });
    }
  });
}
