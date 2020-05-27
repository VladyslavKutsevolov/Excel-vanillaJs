// eslint-disable-next-line import/no-unresolved
import { $ } from '@core/domHelper';
import Observer from '../../core/Observer';

export default class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
    this.observer = new Observer();
  }

  getRoot() {
    const $root = $.create('div', 'excel');
    const componentOption = {
      observer: this.observer
    };
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el, componentOption);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    this.components.forEach(component => component.init());
  }

  destroy() {
    this.components.forEach(component => component.destroy());
  }
}
