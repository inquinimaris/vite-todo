<template>
    <li class="border border-green-300">
        <div>
            <h4>{{ taskTitle }}</h4>
            <p>{{ taskDescr }}</p>
        </div>
        <div class="flex flex-row gap-6">
            <button type="button" class="bg-red-600 text-slate-700 px-6 py-3">Delete</button>
            <button type="button" class="bg-blue-200 text-slate-700 px-6 py-3">Edit</button>
            <button type="button" class="bg-green-400 text-slate-700 px-6 py-3">Complete</button>
        </div>
    </li>
</template>

<script>
export default{
    props:['taskTitle', 'taskDescr'],
}
</script>