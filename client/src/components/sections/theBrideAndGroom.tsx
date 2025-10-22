import React from 'react';
import Slide from '../slide';
import { TheBrideContent } from "./theBride";
import { TheGroomContent } from "./theGroom";

const TheBrideAndGroom = () => (
    <Slide className="the-bride-and-groom" isTwoPane>
        <div className="two-pane-left the-bride">
            <TheBrideContent />
        </div>
        <div className="two-pane-right the-groom">
            <TheGroomContent />
        </div>
    </Slide>
);

export default TheBrideAndGroom;