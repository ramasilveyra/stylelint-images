import { utils } from 'stylelint';
import { namespace, generateListOfImagesURLsAndNodes, getImage } from '../../utils';

export const ruleName = namespace('broken');
export const messages = utils.ruleMessages(ruleName, {
  unexpected: imageURL => `Unexpected broken image "${imageURL}"`
});

export default function brokenRule(enabled) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, {
      actual: enabled,
      possible: [true, false]
    });

    if (!validOptions) {
      return null;
    }

    const list = generateListOfImagesURLsAndNodes(root);

    return checkIfImagesExists(list, result)
      .then(results => reportBrokenImages(results, result));
  };
}

function checkIfImagesExists(list) {
  const checkList = list.map(listItem =>
    settlePromise(checkIfImageExists(listItem))
  );

  return Promise.all(checkList);
}

function settlePromise(promise) {
  return promise.catch(listItemError => listItemError);
}

function checkIfImageExists(listItem) {
  return getImage(listItem.url)
    .catch((error) => {
      error.nodeAndURL = listItem;

      return Promise.reject(error);
    });
}

function reportBrokenImages(results, result) {
  results
    .filter(resultItem => resultItem instanceof Error)
    .forEach((resultError) => {
      const { node, url } = resultError.nodeAndURL;
      utils.report({ message: messages.unexpected(url), node, result, ruleName });
    });
}
