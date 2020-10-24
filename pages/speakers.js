import React from 'react';
import Speakers from '../src/components/Speakers/Speakers';
import SpeakersSearchBar from '../src/components/SpeakersSearchBar/SpeakersSearchBar';
import Layout from '../src/components/Layout/Layout'
import SpeakerContext from '../src/components/Speakers/SpeakerContext';

const speakers = [
    { imageSrc: 'speaker-component-1124', name: 'Douglas Crockford' },
    { imageSrc: 'speaker-component-1530', name: 'Tamara Baker' },
    { imageSrc: 'speaker-component-10803', name: 'Eugene Chuvyrov' },
]

const SpeakersPage = () => {
    return (
        <Layout>
            <SpeakerContext.Provider value={speakers}>
                <Speakers />
            </SpeakerContext.Provider>
        </Layout>
    );
}

export default SpeakersPage;