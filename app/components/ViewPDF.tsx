"use client"
import React, { memo } from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import type { ToolbarProps, ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ViewPDF = ({ fileUrl }) => {

    const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
        ...slot,
        OpenFile: () => <></>,
        Download: () => <></>,
        DownloadMenuItem: () => <></>,
        EnterFullScreen: () => <></>,
        EnterFullScreenMenuItem: () => <></>,
        SwitchTheme: () => <></>,
        SwitchThemeMenuItem: () => <></>,
        Print: () => <></>,
        PrintMenuItem: () => <></>,
    });

    const renderToolbar = (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
        <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
    );
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        renderToolbar,
    });
    const { renderDefaultToolbar } = defaultLayoutPluginInstance.toolbarPluginInstance;

    return (
        <div className='w-full text-center'>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
                <div style={{  }} id="my-component">
                    <Viewer
                        withCredentials={true}
                        fileUrl={fileUrl}
                        plugins={[
                            defaultLayoutPluginInstance,
                        ]}
                    />
                </div>
            </Worker>
        </div>
    )
}

export default memo(ViewPDF) 