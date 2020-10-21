import React from 'react';
import Header from '../src/components/Header/Header';
import Menu from '../src/components/Menu/Menu';
import Speakers from '../src/components/Speakers/Speakers';
import SpeakersSearchBar from '../src/components/SpeakersSearchBar/SpeakersSearchBar';
import Footer from '../src/components/Footer/Footer';

import SpeakerContext from '../src/components/Speakers/SpeakerContext';

const speakers = [
    { imageSrc: 'speaker-component-1124', name: 'Douglas Crockford' },
    { imageSrc: 'speaker-component-1530', name: 'Tamara Baker' },
    { imageSrc: 'speaker-component-10803', name: 'Eugene Chuvyrov' },
]

const SpeakersPage = () => {
    return (
        <div>
            <h1>Speakers page</h1>
            <Header />
            <Menu />
            <SpeakerContext.Provider value={speakers}>
                <SpeakersSearchBar />
                <Speakers />
            </SpeakerContext.Provider>
            <Footer />
        </div>
    );
}

export default SpeakersPage;