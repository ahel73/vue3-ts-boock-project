<template>
<div class="home">
    <ItemsListComonent 
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />
</div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import ItemsListComonent from '@/components/items/ItemsList.component.vue'
import { ItemInterface } from '@/models/items/Item.interface'
import store from '@/store'

export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComonent
  },
  setup() {
    const items = computed(() => { return store.state.items; });
    const loading = computed(() => { return store.state.loading });

    const onSelectItem = (item: ItemInterface) => {
      store.dispatch('selectItem', {
        id: item.id,
        selected: !item.selected
      })
    }

    onMounted(() => {
      store.dispatch('loadItems')
    })

    return {items, loading, onSelectItem}
  }
})
</script>

