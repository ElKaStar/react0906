import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import MainApp from "./app";

it ('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(<MainApp />, div)
    ReactDom.unmountComponentAtNode(div)
    }
)
