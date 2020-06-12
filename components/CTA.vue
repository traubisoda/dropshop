<template>
  <button class="cta">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.cta {
  height: 50px;
  @apply flex items-center my-5 justify-center bg-dark border border-dark w-full text-white text-sm font-medium uppercase;
  position: relative;
  overflow: hidden;
  transition: color 0.1s;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: theme('colors.dark');
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: theme('colors.white');
    transition: all 0.2s;
    transition-delay: 0.15s;
    z-index: -1;
  }
  &:hover {
    color: theme('colors.dark');
    &:before {
      width: 100%;
    }
  }
}
</style>
