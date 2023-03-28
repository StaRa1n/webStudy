# 三栏布局的实现方式

[label](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/5/16cfefeb90d9ec0b~tplv-t2oaga2asx-zoom-in-crop-mark%3A3024%3A0%3A0%3A0.awebp)

[label](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/5/16cfefeb90d9ec0b~tplv-t2oaga2asx-zoom-in-crop-mark%3A3024%3A0%3A0%3A0.awebp)

# 相同之处
（1）布局类似，都是实现特定需求的三列布局。
（2）都使用了float浮动向左脱离文档流,让左中右三列浮动，通过父外边距形成三列布局。
# 不同之处
（1）实现方法的不同：
圣杯布局是通过float搭建布局+margin使三列布局到一行上+relative相对定位调整位置。
双飞翼布局是通过float+margin，没有使用相对定位。
（2）怎么处理两列的位置：
圣杯布局是给外部容器加padding，通过相对定位把两边定位出来。
双飞翼布局是靠在中间这层外面套一层div加padding将内容挤出来中间。