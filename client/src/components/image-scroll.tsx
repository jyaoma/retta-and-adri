import React from 'react';

import './image-scroll.css';

type ImageScrollProps = {
    images: string[],
    alt: string;
    className?: string;
    incrementLoadedItems: () => void;
}

const ImageScroll = (props: ImageScrollProps) => (
    <div className="image-scroll">
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
);

export default ImageScroll;