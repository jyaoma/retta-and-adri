import React, {useEffect, useState} from 'react';
import './carousel.css';

type CarouselProps = {
    images: string[],
    alt: string;
    className?: string;
    setLoadedItems: (fun: (x: number) => number) => void;
}

const Carousel = (props: CarouselProps) => {
    const numberOfImages = props.images.length;

    const [timer, setTimer] = useState(0);
    const [transitionIndex, setTransitionIndex] = useState(numberOfImages - 1);
    const [visibleImageIndex, setVisibleImageIndex] = useState(numberOfImages - 1);
    const [isTransitionVisible, setIsTransitionVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            // console.log(timer);
            if (isTransitionVisible) {
                setIsTransitionVisible(false);
            } else {
                if (timer <= 4) {
                    setTimer(x => x + 1);
                    if (timer === 4) {
                        setTransitionIndex(x => x - 1);
                    }
                } else if (timer >= 5) {
                    if (visibleImageIndex > 0) {
                        setVisibleImageIndex(x => x - 1)
                        setTimer(0);
                    } else {
                        setTransitionIndex(numberOfImages - 1);
                        setVisibleImageIndex(numberOfImages - 1);
                        setIsTransitionVisible(true);
                        setTimer(0);
                    }
                }
            }
        }, 1000);
    }, [timer, isTransitionVisible]);

    return <div className={`carousel ${props.className || ''}`}>
        {props.images.map((image, i) => {
            const isTransitioning = transitionIndex < visibleImageIndex && transitionIndex === i - 1;
            const isInvisible = visibleImageIndex < i;
            let className = '';
            if (isTransitionVisible && i !== 0) {
                className = 'transition-visible';
            } else if (isTransitioning && i !== 0) {
                className = 'transition-invisible';
            } else if (isInvisible) {
                className = 'invisible';
            }
            return (
                <img
                    key={image}
                    src={image}
                    alt={props.alt}
                    className={className}
                    onLoad={() => props.setLoadedItems(x => x + 1)}
                />
            )
        })}
    </div>
}

export default Carousel;