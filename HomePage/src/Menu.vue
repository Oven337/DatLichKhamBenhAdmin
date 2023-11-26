<script setup>
import { ref } from "vue";

const itemMenu = ref([
    {
        title: 'Quản lý nhân viên',
        employeeManager: [
          { 
            subItem: 'Thông tin bác sĩ',
          }, 
          {
            subItem: 'Staff'
          }
      ]
    }, 
    {
        title: 'Quản lý customer'
    },
    {
        title: 'Quản lý đánh giá dịch vụ'
    }, 
    {
        title: 'Chăm sóc khách hàng'
    }, 
    {
        title: 'Thống kê doanh thu'
    }
]);
</script>

<template>
<div class="flex flex-column gap-5 border-right-2 border-transparent w-23rem">
    <div class="flex justify-content-center border-bottom-2 border-blue-500 py-4">
      <span class="text-2xl p-1 text-blue-400 font-bold">PHÒNG KHÁM</span>
    </div>

    <div class="flex flex-column gap-5 pl-3">
      <div class="flex flex-column gap-3">
        <div class="flex justify-content-between mr-3 align-items-end">
            <div class="flex gap-3 align-items-center font-semibold">
                <i class="pi pi-home"></i>
                <span class="cursor-pointer">{{ itemMenu[0].title }}</span>
            </div>
            <i class="pi pi-angle-right"></i>
        </div>
        <div class="flex flex-column gap-3 ml-5">
            <span class="cursor-pointer w-fit-content">{{ itemMenu[0].employeeManager[0].subItem }}</span>
            <span class="cursor-pointer w-fit-content">{{ itemMenu[0].employeeManager[1].subItem }}</span>
        </div>
      </div>

      <div class="flex justify-content-between mr-3 align-items-end">
        <div class="flex gap-3 align-items-center font-semibold">
          <i class="pi pi-home"></i>
          <span class="cursor-pointer">{{ itemMenu[1].title }}</span>
        </div>
        <i class="pi pi-angle-right"></i>
      </div>

      <div class="flex justify-content-between mr-3 align-items-end">
        <div class="flex gap-3 align-items-center font-semibold">
          <i class="pi pi-home"></i>
          <span class="cursor-pointer">{{ itemMenu[2].title }}</span>
        </div>
        <i class="pi pi-angle-right"></i>
      </div>

      <div class="flex justify-content-between mr-3 align-items-end">
        <div class="flex gap-3 align-items-center font-semibold">
          <i class="pi pi-home"></i>
          <span class="cursor-pointer">{{ itemMenu[3].title }}</span>
        </div>
        <i class="pi pi-angle-right"></i>
      </div>

      <div class="flex justify-content-between mr-3 align-items-end">
        <div class="flex gap-3 align-items-center font-semibold">
          <i class="pi pi-home"></i>
          <span class="cursor-pointer">{{ itemMenu[4].title }}</span>
        </div>
        <i class="pi pi-angle-right"></i>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.border-custom{
  border: 1px solid;
  border-color: linear-gradient(rgb(100, 230, 226), #9198e5);
}
</style>