<template>
  <Layout>
    <template #navbar>
      <div class="my-navbar">This is my custom navbar</div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  components: { Layout },
}
</script>

<style lang="css">
.my-navbar {
  text-align: center;
}
</style>