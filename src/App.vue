<template>
  <div id="app">
    <!-- 也可使用 exclude ，使页面重新加载 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
