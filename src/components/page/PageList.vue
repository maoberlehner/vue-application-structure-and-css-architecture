<template>
  <div :class="$options.name">
    <div class="hero">
      <h1 class="hero__headline">
        List
      </h1>

      <div class="hero__intro">
        <p>
          This is an example for a list of content (e.g products).
          consetetur sadipscing elitr, sed diam nonumy irmod tempor
          invidunt ut labore et dolore magna
        </p>
      </div>
    </div>

    <ul :class="`contentList ${$options.name}__contentList`">
      <li class="contentList__item">
        <div class="contentList__wrap">
          <div class="contentList__figure">
            <img
              src="http://via.placeholder.com/76x76"
              alt="Placeholder image">
          </div>
          <div class="contentList__description">
            <h3 class="contentList__headline">Lorem Ipsum</h3>
            <div class="contentList__text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor inviduntt.
              </p>
            </div>
          </div>
          <div class="contentList__actions">
            <button class="contentList__action">Buy me!</button>
          </div>
        </div>
      </li>
      <li class="contentList__item">
        <div class="contentList__wrap">
          <div class="contentList__figure">
            <img
              src="http://via.placeholder.com/76x76"
              alt="Placeholder image">
          </div>
          <div class="contentList__description">
            <h3 class="contentList__headline">Lorem Ipsum</h3>
            <div class="contentList__text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor inviduntt.
              </p>
            </div>
          </div>
          <div class="contentList__actions">
            <button class="contentList__action">Buy me!</button>
          </div>
        </div>
      </li>
      <li class="contentList__item">
        <div class="contentList__wrap">
          <div class="contentList__figure">
            <img
              src="http://via.placeholder.com/76x76"
              alt="Placeholder image">
          </div>
          <div class="contentList__description">
            <h3 class="contentList__headline">Lorem Ipsum</h3>
            <div class="contentList__text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor inviduntt.
              </p>
            </div>
          </div>
          <div class="contentList__actions">
            <button class="contentList__action">Buy me!</button>
          </div>
        </div>
      </li>
      <li class="contentList__item">
        <div class="contentList__wrap">
          <div class="contentList__figure">
            <img
              src="http://via.placeholder.com/76x76"
              alt="Placeholder image">
          </div>
          <div class="contentList__description">
            <h3 class="contentList__headline">Lorem Ipsum</h3>
            <div class="contentList__text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor inviduntt.
              </p>
            </div>
          </div>
          <div class="contentList__actions">
            <button class="contentList__action">Buy me!</button>
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

<style lang="scss">
@import '{
  .contentList,
  .contentList__item,
  .contentList__wrap,
  .contentList__figure,
  .contentList__description,
  .contentList__headline,
  .contentList__text,
  .contentList__actions,
  .contentList__action,
} from ../../scss/components/content-list';
@import '{
  .hero,
  .hero__headline,
  .hero__intro,
} from ../../scss/components/hero';
</style>

<style lang="scss" scoped>
.PageList {
  $section-spacing: 3em;

  &__contentList {
    margin-top: $section-spacing;
  }
}
</style>
