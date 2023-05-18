import React from 'react';
import '..//style/index.css';
import Banner from '..//components/banner/banner.jsx'
import Gallery from '..//components/gallery/gallery.jsx';

function Home() {
    return (
        <div>
            <Banner />
            <Gallery />
        </div>
    )
}

export default Home