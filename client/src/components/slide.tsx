import React, {ReactNode} from 'react';
import PropTypes from 'prop-types';

const Slide = (props: SlideProps) => {
    return (
        <div className={`slide ${props.className} ${props.isTwoPane ? 'two-pane' : 'one-pane'}`}>
            {props.children}
        </div>
    );
};

type SlideProps = {
    children: ReactNode | ReactNode[];
    isTwoPane?: boolean;
    className?: string;
}

Slide.propTypes = {
    children: PropTypes.node,
    isTwoPane: PropTypes.bool,
    className: PropTypes.string
};

export default Slide;
