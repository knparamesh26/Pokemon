import { helper } from '@ember/component/helper';

function capitalize([string]) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default helper(capitalize);
