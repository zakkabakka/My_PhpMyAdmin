import { MyPhpmyadminPage } from './app.po';

describe('my-phpmyadmin App', function() {
  let page: MyPhpmyadminPage;

  beforeEach(() => {
    page = new MyPhpmyadminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
