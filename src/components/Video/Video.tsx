import React, {useEffect, useRef} from 'react';
import {Spin} from 'antd';

export const Video = ({link = null}) => {
    if (link) {
        console.log(link)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const videoRef = useRef();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        let socket = null;

        const connectWebSocket = () => {
            socket = new WebSocket(`ws://ayin1.k-lab.su//link?rtsp_url=${link}`);

            socket.binaryType = 'arraybuffer';

            socket.onmessage = (event) => {
                const blob = new Blob([event.data], {type: 'image/jpeg'});
                const imageUrl = URL.createObjectURL(blob);
                // Update the image element with the new frame
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                videoRef.current.src = imageUrl;
            };

            socket.onopen = () => {
                console.log('WebSocket connected');
            };

            socket.onclose = () => {
                console.log('WebSocket disconnected');
                // Reconnect after a delay (e.g., 3 seconds)
                setTimeout(connectWebSocket, 3000);
            };
        };

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            connectWebSocket();

            return () => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                if (socket) {
                    socket.close();
                }
            };
        }, []);

        return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            <img style={{width: '100%', height: '100%'}} ref={videoRef}/>
        );
    } else {
        return (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Spin/>
            </div>
        );
    }
};
