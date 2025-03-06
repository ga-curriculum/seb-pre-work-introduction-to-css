describe('The header styling', function () {
  it('should have a header element with a dark gray background and white text', function () {
    const header = document.querySelector('header');

    if (!header) {
      fail(
        'No <header> element found. Make sure you have added a <header> to your HTML.'
      );
    } else {
      const computedStyle = window.getComputedStyle(header);

      expect(computedStyle.backgroundColor).toBe(
        'rgb(34, 34, 34)',
        'The header background color should be #222222 (rgb(34, 34, 34)).'
      );

      expect(computedStyle.color).toBe(
        'rgb(255, 255, 255)',
        'The header text color should be #ffffff (rgb(255, 255, 255)).'
      );
    }
  });
});
