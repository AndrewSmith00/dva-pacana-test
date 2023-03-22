<template>
    <div class="optional-items items">
        <div class="optional-items__selected block ">
            {{ selectedOptionalItem.name }}
        </div>
        <div class="optional-items__main-list block">
            <div class="block block_small block_inline" v-for="(item, index) in optionalItems" v-bind:key="index" @click="addToSelected(item)">
                {{ item.name }}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            optionalItems: null,
            selectedOptionalItem: {},
        }
    },
    methods: {
        getOptionalItems() {
            this.optionalItems = this.$store.getters.GET_OPTIONAL_ITEMS;
        },
        getSelectedOptionalItem() {
            this.selectedOptionalItem = this.$store.getters.GET_SELECTED_OPTIONAL_ITEM;
        },
        addToSelected(item) {
            this.$store.commit('SET_SELECTED_OPTIONAL_ITEM', item);
            this.getSelectedOptionalItem();
        }
    },
    mounted() {
        this.getOptionalItems()
        this.getSelectedOptionalItem();
    }
}
</script>

<style lang="scss">
.optional-items__selected {
    align-self: flex-end;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.optional-items__main-list {
    min-height: 500px;
}
</style>