import * as React from 'react'

import { createDevTools } from 'redux-devtools'

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

var SliderMonitor = require('redux-slider-monitor')

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
        changeMonitorKey='ctrl-m'
        defaultPosition='left'>
        <LogMonitor theme='tomorrow' />
        <SliderMonitor />
    </DockMonitor>    
)

export {DevTools}
