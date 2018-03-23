class Nav {
  constructor() {
    this.$body = $('body');
    this.$navButton = $('.nav__hamburger--button');
    this.$sliderButton = $('.nav__slider--button');

    this.init();
  }

  init() {
    this.$sliderButton.click(this.toggleNav.bind(this));
    this.$navButton.click(this.toggleNav.bind(this));

    this.hamburgerColor();
  }

  toggleNav() {
    this.$body.toggleClass('js-slider-open');
  }

  hamburgerColor() {
    var $hamburgerIcon = $('.nav__hamburger--icon');
    var heroHeight = $('.hero').innerHeight();
    var projectSection = $('.project-section').innerHeight();

    const $projectSectionArr = $('.project-section');

    $hamburgerIcon.addClass('js-icon-white');

    $(document).scroll(function() {
      var scrollPos = window.scrollY;

      for (var i = 0; i < $projectSectionArr.length; i++) {
        var $projectSection = $projectSectionArr.eq(i);
        var offset = $projectSection.offset().top;
        var sectionHeight = $projectSection.innerHeight();
        if (scrollPos > (offset - 37) && scrollPos < offset + sectionHeight) {
          if ($projectSection.hasClass('dark')) {
            $hamburgerIcon.addClass('js-icon-white');
          } else {
            $hamburgerIcon.removeClass('js-icon-white');
          }
        }
      }
    });
  }
}

export default Nav;
