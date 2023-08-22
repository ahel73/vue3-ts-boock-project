<template>
<div class="home">
    <ItemsListComonent :items="items" />
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ItemsListComonent from '@/components/items/ItemsList.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'

export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComonent
  },
  setup() {
    const items: ItemInterface[] = [
      { id: 1, name: 'item 1', selected: false },
      { id: 2, name: 'item 2', selected: false },
      { id: 3, name: 'item 3', selected: false },
    ]

    return {items}
  }
})
</script>

