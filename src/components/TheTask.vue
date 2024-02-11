<template>
    <transition name="task" appear>
        <li class="border border-green-300 p-4">
            <div class="flex flex-col gap-y-4">
                <h4 class="font-semibold text-xl">{{ taskTitle ? taskTitle : 'Untitled'}}</h4>
                <p>{{ taskDescr ? taskDescr : 'No description' }}</p>
                <p class="opacity-50 text-xs uppercase">Task id: {{ taskId }}</p>
            </div>
            <div class="flex flex-row justify-center items-center gap-6 max-w-lg mx-auto">
                <button type="button" @click="togglePopup('delete')" class="bg-red-600 text-slate-700 px-6 py-3">Delete</button>
                <button type="button" @click="togglePopup('update')" class="bg-blue-200 text-slate-700 px-6 py-3">Update</button>
                <button type="button" @click="togglePopup('complete')" class="bg-green-400 text-slate-700 px-6 py-3">Complete</button>
            </div>
        </li>
    </transition>
</template>

<script>
export default{
    props:['taskId', 'taskTitle', 'taskDescr', 'togglePopupProp'],
    methods:{
        togglePopup(popupType){
            this.togglePopupProp(popupType);
        }
    }
}
</script>