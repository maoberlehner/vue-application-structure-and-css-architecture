<template>
  <div :class="$options.name">
    <div class="hero">
      <h1 class="hero__headline">
        Welcome!
      </h1>

      <div class="hero__intro">
        <p>
          Lorem ipsum dolor sit amet, <router-link :to="{ name: `list` }" class="link">
          consetetur</router-link> adipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>

      <router-link
        :to="{ name: `article` }"
        class="hero__action">
        Click me!
      </router-link>
    </div>

    <ul :class="`teaserList ${$options.name}__teaserList`">
      <li class="teaserList__item">
        <div class="teaser">
          <h3 class="teaser__headline">
            Article
          </h3>

          <div class="teaser__text">
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
            class="teaser__action">
            Read more
          </router-link>
        </div>
      </li>
      <li class="teaserList__item">
        <div class="teaser">
          <h3 class="teaser__headline">
            List
          </h3>

          <div class="teaser__text">
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
            class="teaser__action">
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

<style lang="scss">
@import '{
  .hero,
  .hero__headline,
  .hero__intro,
  .hero__action,
} from ../../scss/components/hero';
@import '{ .link } from ../../scss/components/link';
@import '{
  .teaser,
  .teaser__headline,
  .teaser__text,
  .teaser__action
} from ../../scss/components/teaser';
@import '{ .teaserList, .teaserList__item } from ../../scss/components/teaser-list';
</style>

<style lang="scss" scoped>
.PageHome {
  $section-spacing: 3em;

  &__teaserList {
    margin-top: $section-spacing;
  }
}
</style>
