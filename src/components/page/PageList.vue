<template>
  <div :class="$options.name">
    <div :class="`${$options.name}__hero`">
      <h1 :class="`${$options.name}__heroHeadline`">
        List
      </h1>

      <div :class="`${$options.name}__heroIntro`">
        <p>
          This is an example for a list of content (e.g products).
          consetetur sadipscing elitr, sed diam nonumy irmod tempor
          invidunt ut labore et dolore magna
        </p>
      </div>
    </div>

    <ul :class="`${$options.name}__contentList`">
      <li :class="`${$options.name}__contentListItem`">
        <div :class="`${$options.name}__contentListWrap`">
          <div :class="`${$options.name}__contentListFigure`">
            <img
              src="http://via.placeholder.com/76x76"
              alt="Placeholder image">
          </div>
          <div :class="`${$options.name}__contentListDescription`">
            <h3 :class="`${$options.name}__contentListHeadline`">Lorem Ipsum</h3>
            <div :class="`${$options.name}__contentListText`">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor inviduntt.
              </p>
            </div>
          </div>
          <div :class="`${$options.name}__contentListActions`">
            <button :class="`${$options.name}__contentListAction`">Buy me!</button>
          </div>
        </div>
      </li>
      <li :class="`${$options.name}__contentListItem`">
        <div :class="`${$options.name}__contentListWrap`">
          <div :class="`${$options.name}__contentListFigure`">
            <img
              src="http://via.placeholder.com/76x76"
              alt="Placeholder image">
          </div>
          <div :class="`${$options.name}__contentListDescription`">
            <h3 :class="`${$options.name}__contentListHeadline`">Lorem Ipsum</h3>
            <div :class="`${$options.name}__contentListText`">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor inviduntt.
              </p>
            </div>
          </div>
          <div :class="`${$options.name}__contentListActions`">
            <button :class="`${$options.name}__contentListAction`">Buy me!</button>
          </div>
        </div>
      </li>
      <li :class="`${$options.name}__contentListItem`">
        <div :class="`${$options.name}__contentListWrap`">
          <div :class="`${$options.name}__contentListFigure`">
            <img
              src="http://via.placeholder.com/76x76"
              alt="Placeholder image">
          </div>
          <div :class="`${$options.name}__contentListDescription`">
            <h3 :class="`${$options.name}__contentListHeadline`">Lorem Ipsum</h3>
            <div :class="`${$options.name}__contentListText`">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor inviduntt.
              </p>
            </div>
          </div>
          <div :class="`${$options.name}__contentListActions`">
            <button :class="`${$options.name}__contentListAction`">Buy me!</button>
          </div>
        </div>
      </li>
      <li :class="`${$options.name}__contentListItem`">
        <div :class="`${$options.name}__contentListWrap`">
          <div :class="`${$options.name}__contentListFigure`">
            <img
              src="http://via.placeholder.com/76x76"
              alt="Placeholder image">
          </div>
          <div :class="`${$options.name}__contentListDescription`">
            <h3 :class="`${$options.name}__contentListHeadline`">Lorem Ipsum</h3>
            <div :class="`${$options.name}__contentListText`">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor inviduntt.
              </p>
            </div>
          </div>
          <div :class="`${$options.name}__contentListActions`">
            <button :class="`${$options.name}__contentListAction`">Buy me!</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: `PageList`,
};
</script>

<style lang="scss" scoped>
@import '../../scss/components/content-list.mixin';
@import '../../scss/components/hero.mixin';

.PageList {
  $section-spacing: 3em;

  /**
   * Hero
   */
  &__hero {
    @include hero();
  }

  &__heroHeadline {
    @include hero__headline();
  }

  &__heroIntro {
    @include hero__intro();
  }

  /**
   * ContentList
   */
  &__contentList {
    @include contentList();

    margin-top: $section-spacing;
  }

  &__contentListItem {
    @include contentList__item();
  }

  &__contentListWrap {
    @include contentList__wrap();
  }

  &__contentListFigure {
    @include contentList__figure();
  }

  &__contentListDescription {
    @include contentList__description();
  }

  &__contentListHeadline {
    @include contentList__headline();
  }

  &__contentListText {
    @include contentList__text();
  }

  &__contentListActions {
    @include contentList__actions();
  }

  &__contentListAction {
    @include contentList__action();
  }
}
</style>
