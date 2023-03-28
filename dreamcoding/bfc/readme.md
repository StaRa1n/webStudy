# 创建BFC的方法
1.float: left/right
2.overflow: auto/hidden/scroll/overlay
3.display: inline-block/
4.网格布局: grid/inline-grid
5.表格: table/table-cell
6.弹性布局: flex/inline-flex
7.position: absolute/fixed

# BFC的特点
1.BFC维护一个常规文档流
2.BFC容器计算高度时，会将浮动元素高度也计算在内
3.解决**子容器和父容器**magin重叠
4.解决由float引起的高度塌陷