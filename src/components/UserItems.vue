<template>
    <div class="user-items items">
        <div class="user-items__selected block">
            <div class="block block_small block_inline" v-for="(item, index) in selectedUserItems" v-bind:key="index">
                {{ item.name }}
            </div>
        </div>
        <div class="user-items__main-list block">
            <div class="block block_small block_inline" v-for="(item, index) in userItems" v-bind:key="index" @click="addToSelected(item)">
                {{ item.name }}
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    data() {
        return {
            userItems: null,
            selectedUserItems: null,
        }
    },
    methods: {
        getUserItems() {
            this.userItems = this.$store.getters.GET_USER_ITEMS;
        },
        getSelectedUserItems() {
            this.selectedUserItems = this.$store.getters.GET_SELECTED_USER_ITEMS;
        },
        addToSelected(item) {
            this.$store.commit('SET_ITEM_TO_SELECTED', item);
            this.getSelectedUserItems();
        },
    },
    mounted() {
        this.getUserItems();
        this.getSelectedUserItems();
    }
}
</script>

<style lang="scss">
.user-items__selected {
    min-height: 200px;
}

.user-items__main-list {
    min-height: 500px;
}
</style>