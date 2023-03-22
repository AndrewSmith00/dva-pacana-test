const state = {
    optionalItems: [
        {
            "id": 11,
            "name": "Jacket 1"
        },
        {
            "id": 12,
            "name": "Jacket 2"
        },
        {
            "id": 13,
            "name": "Jacket 3"
        },
        {
            "id": 14,
            "name": "Jacket 4"
        },
        {
            "id": 15,
            "name": "Hoodie 1"
        },
        {
            "id": 16,
            "name": "Hoodie 2"
        },
        {
            "id": 17,
            "name": "Hoodie 3"
        },
        {
            "id": 18,
            "name": "Hoodie 4"
        }
    ],
};

const getters = {
    GET_OPTIONAL_ITEMS: state => state.optionalItems,
};

const mutations = {
    SET_OPTIONAL_ITEMS(state, items) {
        state.optionalItems = JSON.parse(JSON.stringify(items));
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