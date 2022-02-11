<script>
  import { onInterval } from "./utils";

  let count = 0;
  function addCount() {
    count += 1;
  }
  onInterval(addCount, 500);
  /**
   * 按着官方文档，我试着将onMount和onDestroy都移动到了外部函数调用中
   * 但是发现：外部函数中参数的变化不能同步显示在页面中，数据响应失效了
   * 然后试着将变量作为函数调用的函数返回值，而数据响应依然失效
   *
   * 最终的解决方案如代码所示，变量定义和函数定义都编写在组件中，将函数本身传递给外部函数调用
   */
  // 归根结底，这种自己编写的伪生命周期带来的问题是不能访问内部变量，需要通过传递函数来实现对应功能，相当于更换了一种思考方式，感觉对编程者而言并不友好！！
</script>

<p>count:{count}</p>
