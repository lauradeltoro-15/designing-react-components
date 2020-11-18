import React, { useContext, useState } from 'react';
import SpeakersSearchBar from '../SpeakersSearchBar/SpeakersSearchBar';
// import SpeakerRenderProps from './SpeakersRenderProps';
// import SpeakerContext from './SpeakerContext';
import Speaker from '../Speaker/Speaker'


const Speakers = () => {


    const speakersArray = [
        {
            imageSrc: 'speaker-component-1124',
            name: 'Douglas Crockford',
            id: 1124,
            firstName: 'Douglas',
            lastName: 'Crockford',
            sat: true,
            sun: false,
            isFavorite: false,
            bio:
                'Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.',
        },
        {
            imageSrc: 'speaker-component-1530',
            name: 'Tamara Baker',
            id: 1530,
            firstName: 'Tamara',
            lastName: 'Baker',
            sat: false,
            sun: true,
            isFavorite: true,
            bio:
                'Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at Molekule Inc., Cantaloupe Systems, E-Color, and Untangle Inc.',
        },
        {
            imageSrc: 'speaker-component-10803',
            name: 'Eugene Chuvyrov',
            id: 10803,
            firstName: 'Eugene',
            lastName: 'Chuvyrov',
            sat: true,
            sun: false,
            isFavorite: false,
            bio:
                'Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.',
        },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [speakers, setSpeakers] = useState(speakersArray);

    const toggleSpeakerFavourite = speakerToUpdate => {
        return {
            ...speakerToUpdate,
            isFavorite: !speakerToUpdate.isFavorite
        }
    }

    const onFavouriteToggleHandler = speakerToUpdate => {
        const speakerWithFavouriteToggled = toggleSpeakerFavourite(speakerToUpdate);
        const speakersStateCopy = [...speakers];
        const speakerIndex = speakers.map(speaker => speaker.id).indexOf(speakerToUpdate.id);
        speakersStateCopy.splice(speakerIndex, 1, speakerWithFavouriteToggled);

        setSpeakers(speakersStateCopy);
    }
    return (
        <div>
            <SpeakersSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
            </div>
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