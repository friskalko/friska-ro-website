import React from 'react';
import styles from './AboutPage.module.scss';
const AboutPage = () => {
    return (
        <div className={styles['about-container']}>
            <h1 className={styles['about-heading']}>About Us</h1>

            <div className={styles['about-content']}>
                <p className={styles['paragraph']}>
                    Established in 2004,
                    <strong> R-Tech Systems & Services</strong>
                    is the leading Manufacturer, Wholesaler, Trader and Service
                    Provider of Domestic RO Water Purifier, Commercial RO Water
                    Purifier, Demineralisation Water Plant, Air Flow Meter, RO
                    Plant Repairing Service and much more. In their development
                    process, we assure that only top notch basic material is
                    used by our professionals along with ultra-modern tools and
                    machinery.
                </p>
                <p className={styles['paragraph']}>
                    Working under the mentorship of
                    <strong> Mr. Ramendra Verma (Proprietor) </strong> we have
                    acquired a reputed stature in the industry.
                </p>
                <p className={styles['paragraph']}>
                    Water pollution has increased enormously in the past decade.
                    The increasing industrialization and plastic pollution are
                    the two to blame. With the increase of water pollution, it
                    is becoming harder and harder to get clean water at our
                    disposal easily. This is why scientists are working every
                    day to find the best water treatment solutions. We, R-Tech
                    Systems & Services, are a company aiming to create better
                    solutions for everyone. Under the brand name “G1 Aqua“, we
                    are working hard to bring forth innovative solutions for
                    clients across India.
                </p>
                <p className={styles['paragraph']}>
                    Focusing on water purification and treatment sector, we
                    produce a magnificent array of RO Plants, Water Treatment
                    Chemicals, RO Purification Systems, Domestic RO Water
                    Purifiers, Multistage Vertical Pumps, etc. We also offer our
                    patrons with premium FRP Vessels, Proton Dosing Pumps and
                    more. All of these are engineered by our expert team of
                    talented and qualified engineers as well as designers. They
                    concentrate all of their efforts towards engineering the
                    most flawless, user-friendly, environment friendly and
                    reliable solutions. This focus has made us a leading
                    manufacturer of the water treatment & purification domain.
                    Further, we also work as a diligent service provider under
                    the vigil of our mentor
                    <strong> Mr. Ramendra Prasad Verma (Proprietor).</strong> He
                    motivates us to render top class RO System And Water
                    Treatment Plant Installation Services.
                </p>
            </div>
            <h1 className={styles['about-heading']}>Why Us ?</h1>
            <div className={styles['about-content']}>
                <p className={styles['paragraph']}>
                    Since our incorporation in this industry, we have been
                    steady in providing superior quality array of products in
                    accordance with the requirements of our clients.
                </p>
                <p className={styles['paragraph']}>
                    <strong>Following are some of the factors:</strong>
                    <ul className={styles['factor-list']}>
                        <li>Strong focus on quality compliance</li>
                        <li>Easy mode of payment</li>
                        <li>Timely delivery</li>
                        <li>Innovative designs</li>
                    </ul>
                </p>
                <p className={styles['paragraph']}>
                    Our company has been a favorite of clients since the year of
                    our incorporation. We earned such a respected position in
                    the hearts of our clients by providing them a flawless array
                    of RO purification system, domestic RO water purifier and
                    water treatment systems. Not just our engineered products
                    but also our installation services have made us popular in
                    the market. Working with such dedication and aim to provide
                    high gratification to clients, we have garnered a huge
                    customer-base including reputed business ventures like
                    <strong>
                        {' '}
                        Central Institute for Subtropical Horticulture, Ganga
                        Kaveri Seeds Pvt. Ltd. & Databorough India Pvt. Ltd.{' '}
                    </strong>
                    All of them are our loyal customers. We work everyday with
                    continuous dedication to keep them satisfied with our
                    company.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
