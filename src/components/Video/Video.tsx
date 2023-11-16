import React, {useEffect, useRef} from 'react';
import {Spin} from 'antd';

export const Video = ({link = null}) => {
    if (link) {
        console.log(link)
        const videoRef = useRef();
        let socket = null;

        const connectWebSocket = () => {
            socket = new WebSocket(`ws://192.168.1.165:8000/link?rtsp_url=${link}`);

            socket.binaryType = 'arraybuffer';

            socket.onmessage = (event) => {
                const blob = new Blob([event.data], {type: 'image/jpeg'});
                const imageUrl = URL.createObjectURL(blob);
                // Update the image element with the new frame
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

        useEffect(() => {
            connectWebSocket();

            return () => {
                if (socket) {
                    socket.close();
                }
            };
        }, []);

        return (
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
