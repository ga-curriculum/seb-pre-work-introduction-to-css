describe('The body styling', function () {
  it('should have a light gray background color, dark gray text, and centered text alignment', function () {
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);

    expect(computedStyle.backgroundColor).toBe(
      'rgb(244, 244, 244)',
      'The body background color should be #f4f4f4 (rgb(244, 244, 244)).'
    );

    expect(computedStyle.color).toBe(
      'rgb(51, 51, 51)',
      'The body text color should be #333333 (rgb(51, 51, 51)).'
    );

    expect(computedStyle.textAlign).toBe(
      'center',
      'The body text alignment should be center.'
    );
  });
});

describe('The nav styling', function () {
  it('should have a dark gray background color', function () {
    const nav = document.querySelector('nav');

    if (!nav) {
      fail(
        'No <nav> element found. Make sure you have added a <nav> to your HTML.'
      );
    } else {
      const computedStyle = window.getComputedStyle(nav);

      expect(computedStyle.backgroundColor).toBe(
        'rgb(68, 68, 68)',
        'The nav background color should be #444444 (rgb(68, 68, 68)).'
      );
    }
  });
});

describe('The footer styling', function () {
  it('should have a very dark gray background color', function () {
    const footer = document.querySelector('footer');

    if (!footer) {
      fail(
        'No <footer> element found. Make sure you have added a <footer> to your HTML.'
      );
    } else {
      const computedStyle = window.getComputedStyle(footer);

      expect(computedStyle.backgroundColor).toBe(
        'rgb(34, 34, 34)',
        'The footer background color should be #222222 (rgb(34, 34, 34)).'
      );
    }
  });
});
