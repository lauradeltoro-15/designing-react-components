import REQUEST from '../actions/request'

export const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error'
}


const requestReducer = (prevState, action) => {
    switch (action.type) {
        case REQUEST.GET_ALL_SUCCESS:
            return {
                ...prevState,
                status: REQUEST_STATUS.SUCCESS,
                records: action.records
            };
        case REQUEST.GET_ALL_FAILURE:
            return {
                ...prevState,
                status: REQUEST_STATUS.ERROR,
                error: action.error
            };
        case REQUEST.PUT_SUCCESS:
            const { records } = prevState;
            const { record } = action; 
            const recordCopy = [...records];
            const recordIndex = recordCopy.map(record => record.id).indexOf(record.id);
            recordCopy.splice(recordIndex, 1, record);
            return {
                ...prevState,
                records: recordCopy
            };
        case REQUEST.PUT_FAILURE:
            return {
                ...prevState,
                error: action.error
            };
        default:
            return state;
    }
};

export default requestReducer;