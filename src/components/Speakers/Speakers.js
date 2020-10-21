import React, { useContext } from 'react';
import SpeakerRenderProps from './SpeakersRenderProps';
import SpeakerContext from './SpeakerContext';

// ----- Option 1: Context -----
const Speakers = () => {
    const speakers = useContext(SpeakerContext);
    return (
        <div>
            {speakers.map(speaker => <p>{speaker.name}</p>)}
        </div>
    )
}

export default Speakers;

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