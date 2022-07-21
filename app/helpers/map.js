import { helper } from '@ember/component/helper';
import typesColor from '../utils/typesColor';

function map([types]) {
  let color = typesColor;
  // console.log(types);
  // console.log(color);
  if (types.length == 1) {
    return `background-color: ${color[types[0].type.name]}`;
  } else {
    return `background-image: linear-gradient(135deg, ${
      color[types[0].type.name]
    } 50%, ${color[types[1].type.name]} 50%)`;
  }
  // return 'true';
}

export default helper(map);
