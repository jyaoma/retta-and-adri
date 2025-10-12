import React from 'react';
import {IconButton} from "@mui/material";
import CopyIcon from '@mui/icons-material/ContentCopy';

import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Slide from "../slide";

const GiftInfo = () => {
    const loaderDispatch = useLoaderDispatchContext();

    const copyToClipboard = (textToCopy: string) => {
        // Use the 'out of viewport hidden text area' trick
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;

        // Move textarea out of the viewport so it's not visible
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";

        document.body.prepend(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
    }

    return (
        <Slide className="gift-info" isTwoPane>
            <div className="two-pane-left gift-info-left">
                <div className="pane-header">Wedding Gift</div>
                <div>For friends and family who want to share a token of love to the bride and groom, kindly
                    find the account details below:
                </div>
                <div>&nbsp;</div>
                <div>Bank Name: BCA</div>
                <div>Gabriella Claretta Dwiputri</div>
                <div>
                    5445056747
                    <IconButton size="small" onClick={() => copyToClipboard('5445056747')}>
                        <CopyIcon/>
                    </IconButton>
                </div>
                <div>&nbsp;</div>
                <div>Bank Name: BCA</div>
                <div>Adrianus Kurniawan</div>
                <div>
                    5770849863
                    <IconButton size="small" onClick={() => copyToClipboard('5770849863')}>
                        <CopyIcon/>
                    </IconButton>
                </div>
            </div>
            <img
                src={require('../../images/retta4.jpg')}
                alt="Gift info"
                className="two-pane-right gift-info-right"
                onLoad={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
        </Slide>
    )
};

export default GiftInfo;
