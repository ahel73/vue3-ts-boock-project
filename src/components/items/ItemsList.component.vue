<template>
<div>
    <h3>items</h3>
    <ul>
        <ItemComponent v-for="item in items" 
            :key="item.id"
            :model="item"
            @select="onItemCelect"
        />
    </ul>
</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ItemInterface } from '@/models/items/Item.interface'
import ItemComponent from './children/Item.component.vue'

export default defineComponent({
    components: {
        ItemComponent
    },
    props: {
        items: {
            type: Array as PropType<ItemInterface[]>
        }
    },
    setup() {
        const onItemCelect = (item: ItemInterface) => {
            item.selected = !item.selected;
            console.log('onItemSelect', item.id, item.selected)
        }

        return {
            onItemCelect
        }
    },
    
})
</script>
<style lang="scss">
    ul {
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
    }
</style>