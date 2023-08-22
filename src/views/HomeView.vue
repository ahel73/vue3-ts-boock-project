<template>
<div class="home">
    <ItemsListComonent :items="items" />
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ItemsListComonent from '@/components/items/ItemsList.component.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComonent
  },
  setup() {
    const items: any[] = [
      { id: 1, name: 'item 1' },
      {id: 2, name: 'item 2'},
    ]

    return {items}
  }
})
</script>

