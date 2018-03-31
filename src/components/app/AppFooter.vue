<template>
  <footer :class="$options.name">
    <div :class="`${$options.name}__wrapper`">
      &copy; Markus Oberlehner -
      <router-link
        :to="{ name: `home` }"
        class="link">
        Home
      </router-link>
      |
      <router-link
        :to="{ name: `article` }"
        class="link">
        Article
      </router-link>
      |
      <router-link
        :to="{ name: `list` }"
        class="link">
        List
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: `AppFooter`,
};
</script>

<style lang="scss">
@import '{ .link } from ../../scss/components/link';
</style>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppFooter {
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: $color-secondary;
  text-align: center;

  &__wrapper {
    @include wrapper();
  }
}
</style>
