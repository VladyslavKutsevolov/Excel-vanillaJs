/* eslint-disable max-classes-per-file */
import { Router } from './Router';
import { Page } from '../Page/Page';

class DashBoardPage extends Page {
  getRoot() {
    const root = document.createElement('div');
    root.innerHTML = '';
    return root;
  }
}

class ExcelPage extends Page {}

describe('Router', () => {
  let router;
  let $root;

  beforeEach(() => {
    $root = document.createElement('div');
    router = new Router($root, {
      dashboard: DashBoardPage,
      excel: ExcelPage
    });
  });
  test('should be defined', () => {
    expect(router).toBeDefined();
  });

  // test('should render dashboard page', () => {
  //   router.changePageHandler();
  //   expect($root.innerHTML).toBe('<div></div>');
  // });
});
