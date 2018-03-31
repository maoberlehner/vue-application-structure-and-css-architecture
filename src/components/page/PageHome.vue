<template>
  <div :class="$options.name">
    <div :class="`${$options.name}__hero`">
      <h1 :class="`${$options.name}__heroHeadline`">
        Welcome!
      </h1>

      <div :class="`${$options.name}__heroIntro`">
        <p>
          Lorem ipsum dolor sit amet, <router-link
            :to="{ name: `list` }"
            :class="`${$options.name}__link`">
          consetetur</router-link> adipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>

      <router-link
        :to="{ name: `article` }"
        :class="`${$options.name}__heroAction`">
        Click me!
      </router-link>
    </div>

    <ul :class="`${$options.name}__teaserList`">
      <li :class="`${$options.name}__teaserListItem`">
        <div :class="`${$options.name}__teaser`">
          <h3 :class="`${$options.name}__teaserHeadline`">
            Article
          </h3>

          <div :class="`${$options.name}__teaserText`">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.
            </p>
            <p>
              Diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est.
            </p>
          </div>

          <router-link
            :to="{ name: `article` }"
            :class="`${$options.name}__teaserAction`">
            Read more
          </router-link>
        </div>
      </li>
      <li :class="`${$options.name}__teaserListItem`">
        <div :class="`${$options.name}__teaser`">
          <h3 :class="`${$options.name}__teaserHeadline`">
            List
          </h3>

          <div :class="`${$options.name}__teaserText`">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.
            </p>
            <p>
              Diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est.
            </p>
          </div>

          <router-link
            :to="{ name: `list` }"
            :class="`${$options.name}__teaserAction`">
            Read more
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: `PageHome`,
};
</script>

<style lang="scss" scoped>
@import '../../scss/components/hero.mixin';
@import '../../scss/components/link.mixin';
@import '../../scss/components/teaser-list.mixin';
@import '../../scss/components/teaser.mixin';

.PageHome {
  $section-spacing: 3em;

  &__link {
    @include link();
  }

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

  &__heroAction {
    @include hero__action();
  }

  /**
   * TeaserList
   */
  &__teaserList {
    @include teaserList();

    margin-top: $section-spacing;
  }

  &__teaserListItem {
    @include teaserList__item();
  }

  /**
   * Teaser
   */
  &__teaser {
    @include teaser();
  }

  &__teaserHeadline {
    @include teaser__headline();
  }

  &__teaserText {
    @include teaser__text();
  }

  &__teaserAction {
    @include teaser__action();
  }
}
</style>
