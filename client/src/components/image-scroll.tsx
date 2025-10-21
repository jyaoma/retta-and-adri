import React, {useState} from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './image-scroll.css';

type ImageScrollProps = {
    images: string[],
    alt: string;
    className?: string;
    incrementLoadedItems: () => void;
}

const ImageScroll = (props: ImageScrollProps) => {
    const [isTouched, setIsTouched] = useState(false);

    return (
        <>
            <div className="image-scroll" onScroll={() => setIsTouched(true)}>
                <div className="image-scroll-inner">
                    {props.images.map((image) => (
                        <img
                            key={image}
                            src={image}
                            alt={props.alt}
                            className={props.className}
                            onLoad={props.incrementLoadedItems}
                        />
                    ))}
                </div>
            </div>
            <div className={`image-scroll-arrow-container ${isTouched ? 'hidden' : ''}`}>
                <ChevronRightIcon />
            </div>
        </>
    );
};

export default ImageScroll;