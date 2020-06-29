import React, { Component } from 'react'
import { ReactComponent as ReactLogo } from './Group_143.svg'


export class Step3 extends Component {



    render() {
        return (
            <div className="wrapper">

                <div className="form-wrapper">
                    <ReactLogo className="logo" />
                    <h3 style={{fontFamily :'Roboto Slab',
                    textAlign:'center'
                    }}
                    >Merci pour votre inscription !</h3>
                </div>
            </div>
        )
    }
}

export default Step3
