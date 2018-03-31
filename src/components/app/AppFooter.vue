<template>
  <footer :class="$options.name">
    <div :class="`${$options.name}__wrapper`">
      &copy; Markus Oberlehner -
      <router-link
        :to="{ name: `home` }"
        :class="`${$options.name}__link`">
        Home
      </router-link>
      |
      <router-link
        :to="{ name: `article` }"
        :class="`${$options.name}__link`">
        Article
      </router-link>
      |
      <router-link
        :to="{ name: `list` }"
        :class="`${$options.name}__link`">
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

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';
@import '../../scss/components/link.mixin';

.AppFooter {
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: $color-secondary;
  text-align: center;

  &__wrapper {
    @include wrapper();
  }

  &__link {
    @include link();
  }
}
</style>
