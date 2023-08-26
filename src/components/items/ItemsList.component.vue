<template>
<div>
    <h3>items</h3>
    <ul>
        <li v-for="item in items" :key="item.id" @click="onItemCelect(item)">
            {{ item.name }}
        </li>
    </ul>
</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {ItemInterface } from '@/models/items/Item.interface'

export default defineComponent({
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