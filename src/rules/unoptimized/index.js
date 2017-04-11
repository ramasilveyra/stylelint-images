import { utils } from 'stylelint';
import { namespace, generateListOfImagesURLsAndNodes, getImage } from '../../utils';

export const ruleName = namespace('unoptimized');
export const messages = utils.ruleMessages(ruleName, {
  unexpected: imageURL => `Unexpected broken image "${imageURL}"`
});

export default function unoptimizedRule(enabled) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, {
      actual: enabled,
      possible: [true, false]
    });

    if (!validOptions) {
      return null;
    }

    const list = generateListOfImagesURLsAndNodes(root);

    return checkIfImagesAreUnoptimized(list, result)
      .then(results => reportUnoptimizedImages(results, result));
  };
}
