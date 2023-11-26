<script setup>
import { ref } from "vue";

const order = ref([
    {
        name: 'Đã Khám',
        value: 77
    }, 
    {
        name: 'Lịch đã đặt',
        value: 156
    }, 
    {
        name: 'Gói Khám',
        value: 23
    }, 
    {
        name: 'Khách Hàng',
        value: 123
    }, 
    {
        name: 'Đã Hủy',
        value: 3
    }
]);
</script>

<template>
    <div class="mt-6 flex justify-content-between gap-3">
      <div class="bg-white flex w-15rem h-6rem gap-2 align-items-center border-round-md cursor-pointer">
        <div class="py-2 px-3">
          <i class="pi pi-flag"></i>
        </div>
        <div class="flex justify-content-between align-items-center w-full mr-3">
          <div class="flex flex-column gap-2 text-xl font-bold">
            <span>{{ order[0].name }}</span>
            <span>{{ order[0].value }}</span>
          </div>
          <i class="pi pi-arrow-circle-right text-2xl"></i>
        </div>
      </div>

      <div class="bg-white flex w-15rem h-6rem gap-2 align-items-center border-round-md cursor-pointer">
        <div class="py-2 px-3">
          <i class="pi pi-flag"></i>
        </div>
        <div class="flex justify-content-between align-items-center w-full mr-3">
          <div class="flex flex-column gap-2 text-xl font-bold">
            <span>{{ order[1].name }}</span>
            <span>{{ order[1].value }}</span>
          </div>
          <i class="pi pi-arrow-circle-right text-2xl"></i>
        </div>
      </div>

      <div class="bg-white flex w-15rem h-6rem gap-2 align-items-center border-round-md cursor-pointer">
        <div class="py-2 px-3">
          <i class="pi pi-flag"></i>
        </div>
        <div class="flex justify-content-between align-items-center w-full mr-3">
          <div class="flex flex-column gap-2 text-xl font-bold">
            <span>{{ order[2].name }}</span>
            <span>{{ order[2].value }}</span>
          </div>
          <i class="pi pi-arrow-circle-right text-2xl"></i>
        </div>
      </div>

      <div class="bg-white flex w-15rem h-6rem gap-2 align-items-center border-round-md cursor-pointer">
        <div class="py-2 px-3">
          <i class="pi pi-flag"></i>
        </div>
        <div class="flex justify-content-between align-items-center w-full mr-3">
          <div class="flex flex-column gap-2 text-xl font-bold">
            <span>{{ order[3].name }}</span>
            <span>{{ order[3].value }}</span>
          </div>
          <i class="pi pi-arrow-circle-right text-2xl"></i>
        </div>
      </div>

      <div class="bg-white flex w-15rem h-6rem gap-2 align-items-center border-round-md cursor-pointer">
        <div class="py-2 px-3">
          <i class="pi pi-flag"></i>
        </div>
        <div class="flex justify-content-between align-items-center w-full mr-3">
          <div class="flex flex-column gap-2 text-xl font-bold">
            <span>{{ order[4].name }}</span>
            <span>{{ order[4].value }}</span>
          </div>
          <i class="pi pi-arrow-circle-right text-2xl"></i>
        </div>
      </div>
    </div>
</template>

<style scoped></style>