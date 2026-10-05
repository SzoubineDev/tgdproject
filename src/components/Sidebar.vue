<script setup>
import { LayoutDashboard, Calendar, Users, Settings, X } from 'lucide-vue-next'

defineProps({
  isOpen: Boolean,
})
defineEmits(['close'])
</script>

<template>
  <!-- Mobile Backdrop -->
  <div
    v-if="isOpen"
    @click="$emit('close')"
    class="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
  ></div>

  <!-- Sidebar Container -->
  <aside
    class="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- Logo Area -->
    <div class="flex items-center justify-between h-16 px-6 border-b border-gray-200">
      <h1 class="text-xl font-bold text-blue-600">UniClub</h1>
      <button @click="$emit('close')" class="lg:hidden text-gray-500 hover:text-gray-700">
        <X size="24" />
      </button>
    </div>

    <!-- Navigation Links -->
    <nav class="p-4 space-y-1">
      <router-link
        to="/dashboard"
        class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
      >
        <LayoutDashboard class="mr-3" size="20" />
        Dashboard
      </router-link>

      <router-link
        to="/events"
        class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
      >
        <Calendar class="mr-3" size="20" />
        Events
      </router-link>

      <router-link
        to="/members"
        class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
      >
        <Users class="mr-3" size="20" />
        Members
      </router-link>

      <router-link
        to="/settings"
        class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
      >
        <Settings class="mr-3" size="20" />
        Settings
      </router-link>
    </nav>
  </aside>
</template>
