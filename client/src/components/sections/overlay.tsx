import React, {useState} from 'react';
import {Button} from "@mui/material";
import {useLoaderContext} from "../../infra/loaderContext";
import PropTypes from "prop-types";

import './overlay.css';

const Overlay = (props: OverlayProps) => {
    const { itemsToLoad, loadedItems } = useLoaderContext();

    const [showOverlay, setShowOverlay] = useState<boolean>(true);

    return <>
        {
            showOverlay ? (
                <div className="overlay">
                    <div className="overlay-content">
                        <div className="subtitle">WE INVITE YOU TO CELEBRATE</div>
                        <div className="title">Claretta & Adrianus</div>
                        <div className="subtitle">17th JANUARY 2026</div>
                    </div>
                    <div className="loader-and-button">
                        {
                            loadedItems !== itemsToLoad ? (
                                <div className="loader">
                                    <div className="loading-bar"
                                         style={{width: `${100 * loadedItems / itemsToLoad}%`}}></div>
                                </div>
                            ) : (
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setShowOverlay(false);
                                        props.startMusic!();
                                    }}
                                >
                                    enter
                                </Button>
                            )
                        }
                    </div>
                </div>
            ) : null
        }
    </>;
}

type OverlayProps = {
    startMusic?: () => void;
}

Overlay.propTypes = {
    startMusic: PropTypes.func
}

export default Overlay;