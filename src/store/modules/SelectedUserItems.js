const state = {
    selectedUserItems: [],
};

const getters = {
    GET_SELECTED_USER_ITEMS: state => state.selectedUserItems
}

const mutations = {
    SET_ITEM_TO_SELECTED(state, item) {
        let itemIndex = state.selectedUserItems.findIndex(userItem => userItem.id == item.id);
        if (itemIndex == -1) {
            if (state.selectedUserItems.length < 6) {
                state.selectedUserItems.push(item);
            }
        } else {
            state.selectedUserItems.splice(itemIndex, 1);
        }
    }
};

const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions,
};