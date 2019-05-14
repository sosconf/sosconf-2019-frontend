import React, { Component } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function ProgressHOC (WrappedComponent) {
    return class extends Component {
        componentWillMount() {
            NProgress.start();
        }

        componentDidMount() {
            setTimeout(() => {
                NProgress.done();
            }, 200)
        }

        constructor(props) {
            super(props);
        }
    
        render() {
            return (
                <WrappedComponent />
            )
        }
    }
}
