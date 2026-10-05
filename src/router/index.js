import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

// We will create these dummy views in the next step
import DashboardView from '@/views/DashboardView.vue'
import EventsView from '@/views/EventsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // This route uses our DashboardLayout
      path: '/',
      component: DashboardLayout,
      children: [
        {
          path: '', // Default child route (matches '/')
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: 'events',
          name: 'events',
          component: EventsView,
        },
        // Add more dashboard routes here later (members, settings, etc.)
      ],
    },
    // Later we will add public routes outside of this layout (like /login)
  ],
})

export default router
