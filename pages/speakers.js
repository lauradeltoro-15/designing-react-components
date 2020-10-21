import Header from '../src/components/Header/Header';
import Menu from '../src/components/Menu/Menu';
import Speakers from '../src/components/Speakers/Speakers';
import SpeakersSearchBar from '../src/components/SpeakersSearchBar/SpeakersSearchBar';
import Footer from '../src/components/Footer/Footer';

const SpeakersPage = () => {
    return (
        <div>
            <h1>Speakers page</h1>
            <Header />
            <Menu />
            <SpeakersSearchBar />
            <Speakers />
            <Footer />
        </div>
    );
}

export default SpeakersPage;