<template>
  <div class="layout">
    <Header />
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

    export default {
        components: {
            Header
        }
    }
</script>

<style>
  .layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
  }

  .layout .info_page {
    color: #ebebeb;
  }
    
  .content {
    flex-grow: 1;
  }
    
  @media (min-width: 768px) {
    .layout {
      display: block;
    }
    .content {
      flex-grow: none;
      width: 70vw;
      margin-left: 30vw;
    }
  }
</style>
