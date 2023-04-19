<template>
  <!-- 组件的结构 -->
  <div calss="demo">
    <h2>schoolname: {{schoolName}}</h2>
    <h2>schoolname: {{schooladdress}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        schoolName: 'jiangcai',
        schooladdress: 'nanchang'
      };
    },
  }
</script>

<style>
 .demo{
  background-color: aquamarine;
 }
</style>