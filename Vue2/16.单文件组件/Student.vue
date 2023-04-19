<template>
  <!-- 组件的结构 -->
  <div calss="demo">
    <h2>schoolname: {{studentName}}</h2>
    <h2>schoolname: {{age}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        studentName: 'zhang',
        age: 19
      };
    },
  }
</script>

<style>
 .demo{
  background-color: rgb(24, 23, 98);
 }
</style>