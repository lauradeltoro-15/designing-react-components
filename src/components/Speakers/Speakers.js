import React, { /*useContext,*/ useState, useReducer, useEffect } from 'react';
import SpeakersSearchBar from '../SpeakersSearchBar/SpeakersSearchBar';
// import SpeakerRenderProps from './SpeakersRenderProps';
// import SpeakerContext from './SpeakerContext';
import Speaker from '../Speaker/Speaker'
import axios from 'axios';
import REQUEST_ACTIONS from '../../actions/request';
import requestReducer, { REQUEST_STATUS } from '../../reducers/request';

const Speakers = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const [{ records: speakers, status, error }, dispatch] = useReducer(requestReducer, {
        records: [],
        status: REQUEST_STATUS.LOADING,
        error: null
    });

    const loadingSucceded = status === REQUEST_STATUS.SUCCESS;
    const isLoading = status === REQUEST_STATUS.LOADING;
    const loadingFailed = status === REQUEST_STATUS.ERROR;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/speakers');
                dispatch({ records: response.data, type: REQUEST_ACTIONS.GET_ALL_SUCCESS });
            } catch (e) {
                dispatch({ error: e, type: REQUEST_ACTIONS.GET_ALL_FAILURE });
            }
        }
        fetchData();
    }, [])

    const toggleSpeakerFavourite = speakerToUpdate => {
        return {
            ...speakerToUpdate,
            isFavorite: !speakerToUpdate.isFavorite
        }
    }

    const onFavouriteToggleHandler = async speakerToUpdate => {
        const speakerWithFavouriteToggled = toggleSpeakerFavourite(speakerToUpdate);
        try {
            await axios.put(`http://localhost:4000/speakers/${speakerToUpdate.id}`, speakerWithFavouriteToggled);
            dispatch({ record: speakerWithFavouriteToggled, type: REQUEST_ACTIONS.PUT_SUCCESS });
        } catch (e) {
            dispatch({ error: e, type: REQUEST_ACTIONS.PUT_FAILURE });
        }
    }

    return (
        <div>
            <SpeakersSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {isLoading && <div>Loading...</div>}
            {loadingSucceded &&
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
                    {speakers
                        .filter((rec) => {
                            const targetString = `${rec.firstName} ${rec.lastName}`.toLowerCase();
                            return searchQuery.length === 0
                                ? true
                                : targetString.includes(searchQuery.toLowerCase());
                        })
                        .map((speaker) => (
                            <Speaker key={speaker.id} {...speaker} onFavouriteToggle={() => onFavouriteToggleHandler(speaker)} />
                        ))}
                </div>}
            {loadingFailed &&
                <div>{`Ooopsss... Something went wrong: ${error}`}</div>
            }
        </div>
    );
};
export default Speakers;






// ----- Option 1: Context -----
// const Speakers = () => {
//     const speakers = useContext(SpeakerContext);
//     return (
//         <div>
//             {speakers.map((speaker, id) => <p key={id}>{speaker.name}</p>)}
//         </div>
//     )
// }

// export default Speakers;

// ----- Option 2: HOC -----
// import { withData } from './withData'

// const Speakers = ({ speakers }) => {

//     return (
//         <div>
//             {speakers.map(speaker => <p>{speaker.name}</p>)}
//         </div>
//     );
// }

// export default withData(2)(Speakers);

// ----- Option 3: Render props -----
// const Speakers = () => {
//     return (
//         <SpeakerRenderProps>
//             {({ speakers }) => speakers.map(speaker => <p>{speaker.name}</p>)}
//         </SpeakerRenderProps>
//     )
// }

// export default Speakers;