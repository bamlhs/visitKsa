import axios from 'axios';

export const getPlaces = () => {

    return (dispatch) => {
        dispatch({type: 'GET_PLACES_PREPARE'})


        const url = 'https://rnc.herokuapp.com/api/places';
        axios.get(url)
        .then((resp) => {
            dispatch({type: 'GET_PLACES_SUCCCESS', payload: resp.data}) 
        })
        .catch((err) => {
            dispatch({type: 'GET_PLACES_FAILED'})
        }
        );


    } 
}


export const selectItem = (item) => {
    return (dispatch) => {
        dispatch({type: 'SELECT_ITEM', payload: item });

    }
}