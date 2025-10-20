import React, { useState, useEffect } from 'react';

type OrientationHelperProps = {
    children: React.ReactNode | React.ReactNode[];
}

type InternalOrientationHelperProps = {
    children: React.ReactNode | React.ReactNode[];
    orientation: string
};

const OrientationHelper = (props: InternalOrientationHelperProps) => {
    const [orientation, setOrientation] = useState(window.innerWidth > window.innerHeight ? "landscape" : "portrait");

    useEffect(() => {
        const handleResize = () => {
            setOrientation(window.innerWidth > window.innerHeight ? "landscape" : "portrait");
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (orientation !== props.orientation) return null;

    return <>{props.children}</>;
};

export const PortraitOnly = (props: OrientationHelperProps) => (
    <OrientationHelper orientation="portrait">
        {props.children}
    </OrientationHelper>
);

export const LandscapeOnly = (props: OrientationHelperProps) => (
    <OrientationHelper orientation="landscape">
        {props.children}
    </OrientationHelper>
);