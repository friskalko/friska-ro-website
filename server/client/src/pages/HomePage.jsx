import React from 'react';
import InfoCard from '../components/InfoCard';
const HomePage = () => {
    return (
        <div className="outer">
            <section className="App">
                <InfoCard name="GST No." content="09ACMPV2325B2ZL" />
                <InfoCard
                    name="Nature of Business"
                    content="Exporter & Manufacturer"
                />
                <InfoCard name="Year of Establishment" content="2004" />
                <InfoCard
                    name="Legal Status of Firm"
                    content="Individual - Proprietor"
                />
            </section>
        </div>
    );
};

export default HomePage;
