import React from 'react';
import Slide from "../slide";

import './location.css';

const Location = () => (
    <Slide className="location" isTwoPane>
        <div className="two-pane-left location-left">
            <div className="pane-header">Celebrate With Us At</div>
            <div>Chapel of St. Mary Immaculate Catholic Church</div>
            <div>Jl. Satu Maret No.27 1, RT.2/RW.13,</div>
            <div>Pegadungan, Kalideres, Jakarta Barat</div>
        </div>
        <div className="two-pane-right location-right">
            <iframe
                title="Chapel of St. Mary Immaculate Catholic Church"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0197703356594!2d106.7036985801483!3d-6.128041583099425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02bc96b7c8c5%3A0x775f42a2451ffbd1!2sSaint%20Mary%20Immaculate%20Catholic%20Church%2C%20Kalideres!5e0!3m2!1sen!2sus!4v1756669711286!5m2!1sen!2sus"
                height="100%" width="100%" style={{border: 0}}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </Slide>
);

export default Location;