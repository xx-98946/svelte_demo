<script>
  class Duration {
    constructor({ minutes, seconds }) {
      this.minutes = minutes;
      this.seconds = seconds;
    }

    /**
     * 将用秒表示的时间转换为分秒，同时秒会进行四舍五入
     * @param {number} seconds
     */
    static format(seconds) {
      return new Duration({
        minutes: Math.floor(seconds / 60).toString(), // 除法返回的是小数，所以需要向下取整
        seconds: (Math.round(seconds) % 60).toString().padStart(2, 0),
      });
    }

    toString() {
      return `${this.minutes}:${this.seconds}`;
    }
  }
  // 以下是可以绑定的属性
  let currentTime = 0; // 当前播放进度，默认为 undefined
  let duration; // 视频的总播放时长
  let muted; // 是否处于静音状态
  let paused; // 是否处于暂停状态  未播放之前该字段不为 true
  // $: 语法不支持解构赋值

  /* 常用的事件和绑定属性 
  on:mousemove
  on:timeupdate
	on:touchmove|preventDefault
	on:mousedown
	on:mouseup
	bind:currentTime
	bind:duration
	bind:paused> */
</script>

<p>多媒体组件</p>

<video
  src="/video.mp4"
  width="500"
  controls
  bind:currentTime
  bind:duration
  bind:paused
  bind:muted
>
  <!-- video组件要求有字幕 -->
  <track kind="captions" />
</video>
<!-- 工具栏 -->
<div class="tools-bar">
  <div class="tool-duration">
    <span>{Duration.format(currentTime).toString()}</span>
    <span> / </span>
    <span>{Duration.format(duration).toString()}</span>
  </div>
  <div>
    {#if muted}
      静音
    {/if}
  </div>
  <div>
    {paused ? "已暂停" : "播放中"}
  </div>
</div>

<style>
  .tool-duration {
    display: flex;
    align-items: center;
  }
</style>
