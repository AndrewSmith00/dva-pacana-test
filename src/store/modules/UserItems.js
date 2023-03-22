const state = {
    userItems: [
        {
            "id": 1,
            "name": "Shoes 1"
        },
        {
            "id": 2,
            "name": "Shoes 2"
        },
        {
            "id": 3,
            "name": "Shoes 3"
        },
        {
            "id": 4,
            "name": "Shoes 4"
        },
        {
            "id": 5,
            "name": "T-shirt 1"
        },
        {
            "id": 6,
            "name": "T-shirt 2"
        },
        {
            "id": 7,
            "name": "T-shirt 3"
        },
        {
            "id": 8,
            "name": "T-shirt 4"
        }
    ]
};

const getters = {
    GET_USER_ITEMS: state => state.userItems,
};

const mutations = {
    SET_USER_ITEMS(state, items) {
        state.userItems = JSON.parse(JSON.stringify(items))
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