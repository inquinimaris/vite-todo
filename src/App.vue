<template>
  <the-header class="mb-12"></the-header>
  <main id="main" class="grow">
    <div class="container">
      <!-- list area start -->
      <div>
        <div v-if="tasks.length">
          <h3>Things to do:</h3>
          <ul>
            <the-task v-for="task in tasks" :key="task.id" :taskTitle="task.title" :taskDescr="task.descr"></the-task>
          </ul>
        </div>
        <div v-else>
          <h3>Nothing here yet</h3>
        </div>
      </div>
      <!-- list area end -->
      <div class="flex flex-row justify-center items-center gap-x-8">
        <button type="button" @click="toggleTaskCreatePopup()" class="border border-green-400 px-6 py-3">New task</button>
      </div>
    </div>
  </main>
  <the-footer class="mt-12"></the-footer>
  <transition name="overlay">
  <div @click.self="toggleTaskCreatePopup()" v-show="overlay" class="absolute top-0 left-0 w-full h-full bg-slate-800/40 grid place-items-center">
    <div class="flex flex-col gap-4 bg-slate-400 p-6 shadow-xl">
        <div class="flex flex-row justify-between gap-2">
          <label for="newTaskTitle">Title:</label>
          <input id="newTaskTitle" type="text" placeholder="Try to have fun" class="bg-slate-400 border-green-300 border">
        </div>
        <div class="flex flex-row justify-between gap-2">
          <label for="newTaskDescr">Description:</label>
          <input id="newTaskDescr" type="text" placeholder="Reasons? I dunno, no reasons" class="bg-slate-400 border-green-300 border">
        </div>
        <button @click="taskCreate">Add new task</button>
    </div>
  </div>
  </transition>
</template>

<script>
export default{
  data(){
    return{
      tasks:[],
      overlay: false,
    }
  },
  methods:{
    taskCreate(){
      this.tasks.push({
        id: Date.now(),
        title: document.getElementById('newTaskTitle').value,
        descr: document.getElementById('newTaskDescr').value
      });
      this.toggleTaskCreatePopup();
    },
    taskUpdate(){

    },
    taskDelete(){

    },
    taskComplete(){

    },
    toggleTaskCreatePopup(){
      this.overlay = !this.overlay;
    }
  }
}
</script>