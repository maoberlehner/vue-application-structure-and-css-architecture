<template>
  <div :class="$options.name">
    <h1 class="headline--1">Article</h1>

    <div :class="`intro ${$options.name}__intro`">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren.
      </p>
    </div>

    <div :class="`text ${$options.name}__text`">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet.
      </p>

      <h2>Dolor sit</h2>

      <p>
        No sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.
      </p>

      <h2>Lorem sit</h2>

      <p>
        Yo ue takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: `PageArticle`,
};
</script>

<style lang="scss">
@import '{ .headline--1 } from ../../scss/components/headline';
@import '{ .intro } from ../../scss/components/intro';
@import '{ .text } from ../../scss/components/text';
</style>

<style lang="scss" scoped>
.PageArticle {
  &__intro {
    margin-top: 1.5em;
  }

  &__text {
    margin-top: 1.5em;
  }
}
</style>
