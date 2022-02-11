<script>
  import Project from "./Project.svelte";
  import Comment from "./Comment.svelte";
	
</script>

<h1>项目</h1>

<ul>
  <li>
    <Project title="增加Typescript 支持 " tasksCompleted={25} totalTasks={57}>
      <div slot="comments">
        <Comment name="Ecma Script" postedAt={new Date("2020-08-17T14:12:23")}>
          <p>这些接口已通过测试。</p>
        </Comment>
      </div>
    </Project>
  </li>
  <li>
    <Project title="更新文档" tasksCompleted={18} totalTasks={21} />
  </li>
</ul>

<style>
  h1 {
    font-weight: 300;
    margin: 0 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem;
    display: flex;
  }

  @media (max-width: 600px) {
    ul {
      flex-direction: column;
    }
  }

  li {
    padding: 0.5rem;
    flex: 1 1 50%;
    min-width: 200px;
  }
</style>
