const state = {
    selectedOptionalItem: {},
};

const getters = {
    GET_SELECTED_OPTIONAL_ITEM: state => state.selectedOptionalItem,
};

const mutations = {
    SET_SELECTED_OPTIONAL_ITEM(state, item) {
        if (item.id == state.selectedOptionalItem.id) {
            state.selectedOptionalItem = {};
        } else {
            state.selectedOptionalItem = item;
        }
    },
};

const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions,
};