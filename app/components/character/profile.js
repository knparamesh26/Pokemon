import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CharacterProfileComponent extends Component {
  @tracked height = this.args.height / 10;
  @tracked weight = this.args.weight / 10;
}
