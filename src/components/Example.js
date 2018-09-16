import React from 'react';
import { Alert } from 'reactstrap';

class Example extends React.Component {
    render() {
        return (
            <div>
                <Alert color="White">
                    Google menawarkan:
                    &nbsp;
                    <a href="https://www.w3schools.com/html/">English</a>  &nbsp;
                    <a href="https://www.w3schools.com/html/">Basa Bali</a>
                </Alert>
                {/* <Alert color="White" style={{ textAlign: 'left' }}> */}
                    {/* Indonesia */}
                {/* </Alert> */}
            </div>
        );
    }
}

export default Example;