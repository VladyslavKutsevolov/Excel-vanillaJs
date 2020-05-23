/* eslint-disable import/no-unresolved */
import ExcelComponent from '@core/ExcelComponent';

export default class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    });
  }

  toHTML() {
    return `<div class="button">
                    <span class="material-icons">
                        format_align_left
                    </span>
                </div>
                <div class="button">
                    <span class="material-icons">
                        format_align_justify
                    </span>
                </div>
                <div class="button">
                    <span class="material-icons">
                        format_align_right
                    </span>
                </div>
                <div class="button">
                    <span class="material-icons">
                        format_bold
                    </span>
                </div>
                <div class="button">
                    <span class="material-icons">
                        format_italic
                    </span>
                </div>
                <div class="button">
                    <span class="material-icons">
                        format_underlined
                    </span>
                </div>`;
  }

  onClick(event) {
    console.log('event', event.target);
  }
}