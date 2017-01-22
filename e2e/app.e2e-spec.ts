import { GroceryAppPage } from './app.po';

describe('grocery-app App', function() {
  let page: GroceryAppPage;

  beforeEach(() => {
    page = new GroceryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
