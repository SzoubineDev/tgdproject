<script setup>
import { Menu, Bell, User } from 'lucide-vue-next'

defineEmits(['toggle-sidebar'])
</script>

<template>
  <header class="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
    <!-- Mobile Menu Button -->
    <button @click="$emit('toggle-sidebar')" class="lg:hidden p-2 rounded-md hover:bg-gray-100">
      <Menu size="24" class="text-gray-600" />
    </button>

    <!-- Page Title / Breadcrumbs (Placeholder) -->
    <div class="flex-1">
      <h2 class="text-lg font-semibold text-gray-800">Dashboard</h2>
    </div>

    <!-- Right Side Actions -->
    <div class="flex items-center gap-4">
      <button class="p-2 rounded-full hover:bg-gray-100 relative">
        <Bell size="20" class="text-gray-600" />
        <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm"
        >
          JD
        </div>
        <span class="hidden sm:block text-sm font-medium text-gray-700">John Doe</span>
      </div>
    </div>
  </header>
</template>
