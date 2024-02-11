<template>
  <the-header class="mb-12"></the-header>
  <main id="main" class="grow">
    <div class="container">
      <!-- list area start -->
      <div>
        <div v-if="tasks.length">
          <h3>Things to do:</h3>
          <ul class="flex flex-col gap-y-6 my-8">
              <the-task v-for="task in tasks" :key="task.id" :taskId="task.id" :taskTitle="task.title" :taskDescr="task.descr" :togglePopupProp="togglePopup"></the-task>
          </ul>
        </div>
        <div v-else>
          <h3>Nothing here yet</h3>
        </div>
      </div>
      <!-- list area end -->
      <div class="flex flex-row justify-center items-center gap-x-8">
        <button type="button" @click="togglePopup('create')" class="border border-green-400 px-6 py-3">New task</button>
      </div>
    </div>
  </main>
  <the-footer class="mt-12"></the-footer>
  <transition name="overlay">
  <div @click.self="togglePopup()" v-show="overlay" class="fixed top-0 left-0 w-full h-full bg-slate-800/40 grid place-items-center">
    <div v-show="popupCreate" class="flex flex-col gap-4 bg-slate-400 p-6 shadow-xl">
        <div class="flex flex-row justify-between gap-2">
          <label for="newTaskTitle">Title:</label>
          <input id="newTaskTitle" type="text" placeholder="Try to have fun" class="bg-slate-400 border-green-300 border">
        </div>
        <div class="flex flex-row justify-between gap-2">
          <label for="newTaskDescr">Description:</label>
          <input id="newTaskDescr" type="text" placeholder="Reasons? I dunno, no reasons" class="bg-slate-400 border-green-300 border">
        </div>
        <button type="button" @click="taskCreate">Add new task</button>
    </div>

    <div v-show="popupUpdate" class="flex flex-col gap-4 bg-slate-400 p-6 shadow-xl">
      <div class="flex flex-row justify-between gap-2">
          <label for="updateTaskTitle">New title:</label>
          <input id="updateTaskTitle" type="text" placeholder="Leave empty" class="bg-slate-400 border-green-300 border">
        </div>
        <div class="flex flex-row justify-between gap-2">
          <label for="updateTaskDescr">New description:</label>
          <input id="updateTaskDescr" type="text" placeholder="Leave empty" class="bg-slate-400 border-green-300 border">
        </div>
        <button type="button" @click="taskUpdate">Update</button>
    </div>

    <div v-show="popupDelete" class="flex flex-col gap-4 bg-slate-400 p-6 shadow-xl">
      <p>Delete task, for real?</p>
      <button type="button" @click="taskDelete">Delete</button>
    </div>

    <div v-show="popupComplete" class="flex flex-col gap-4 bg-slate-400 p-6 shadow-xl">
      <p>GJ~</p>
      <button type="button" @click="taskComplete">I know right?</button>
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
      popupCreate: false,
      popupUpdate: false,
      popupDelete: false,
      popupComplete: false,
    }
  },
  methods:{
    taskCreate(){
      this.tasks.push({
        id: Date.now(),
        title: document.getElementById('newTaskTitle').value,
        descr: document.getElementById('newTaskDescr').value
      });
      this.togglePopup();
    },
    taskUpdate(){
      console.info('kinda updated');
      this.togglePopup();
    },
    taskDelete(){
      console.info('kinda deleted');
      this.togglePopup();
    },
    taskComplete(){
      console.info('kinda completed');
      this.togglePopup();
    },
    togglePopup(popupType){
      this.overlay = !this.overlay;
      switch(popupType){
        case 'create':
          this.popupCreate = true;
          break;
        case 'update':
          this.popupUpdate = true;
          break;
        case 'delete':
          this.popupDelete = true;
          break;
        case 'complete':
          this.popupComplete = true;
          break;
        default:
          this.popupCreate = false;
          this.popupUpdate = false;
          this.popupDelete = false;
          this.popupComplete = false;
          break;
      }
    }
  }
}
</script>