<script setup>
import { defineProps } from 'vue';

defineProps({
    headings: Array,
    data: Array,
})
</script>

<template>
    <div class=" m-24 p-10 relative overflow-x-auto shadow-md sm:rounded-lg mx-[150px] bg-white ">
        <h1 class="text-4xl">All Customers</h1>
        <div class="flex items-center">
            <span class="w-full text-green-600"> Active Members</span>
            <div class="flex justify-end gap-5 w-full -translate-y-5  ">
                <div class="flex  items-center   ">
                    <span class="translate-x-10"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </span>
                    <input type="text" name="" id="" class=" rounded-2xl bg-neutral-100 pl-12 p-3 w-72"
                        placeholder="Search">
                </div>
                <button class="flex items-center gap-2 bg-neutral-100 rounded-2xl px-5 ">
                    <span class="text-neutral-500">Short by: </span> <b> Neweat</b> <span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#3D3C42" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
        <table class="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-800">
            <thead class="text-xm  text-gray-400 uppercase">
                <tr>
                    <th v-for="head in headings" :key="head.key" class="p-2"> {{ head.title }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in data" :key="row.id" class="bg-white border-b  ">
                    <td v-for="head in headings" :key="head.key" class="py-8 p-2">
                        <div :class="row[head.key] == 'Active' ? 'active'
                                : row[head.key] == 'Inactive' ? 'inactive' : '' ">
                            {{ row[head.key] }}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>


</template>

<style scoped>
.active {
    width: 80px;
    height: 29px;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    border: 1px solid #00b087;
    background-color: #16c09861;
    color: #008767;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inactive {
    width: 80px;
    height: 29px;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    border: 1px solid #df0404;
    background-color: #ffc5c5;
    color: #df0404;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>