import { A4TodoListPage } from './app.po';

describe('a4-todo-list App', () => {
  let page: A4TodoListPage;

  beforeEach(() => {
    page = new A4TodoListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
