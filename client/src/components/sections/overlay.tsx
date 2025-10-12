import React from 'react';
import {Button} from "@mui/material";
import {useLoaderContext} from "../../infra/loaderContext";
import PropTypes from "prop-types";

const Overlay = (props: OverlayProps) => {
    const { itemsToLoad, loadedItems } = useLoaderContext();

    const {showOverlay, setShowOverlay, startMusic} = props;

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
                                        startMusic!();
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
    showOverlay: boolean;
    setShowOverlay: (value: (((prevState: boolean) => boolean) | boolean)) => void;
    startMusic?: () => void;
}

Overlay.propTypes = {
    showOverlay: PropTypes.bool,
    setShowOverlay: PropTypes.func.isRequired,
    startMusic: PropTypes.func
}

export default Overlay;