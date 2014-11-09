describe('templateFactory', function () {

  beforeEach(module('fork.ui.router.util'));

  it('exists', inject(function ($templateFactory) {
    expect($templateFactory).toBeDefined();
  }));
});
