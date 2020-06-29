import React, { Component } from 'react'
import { ReactComponent as ReactLogo } from './Group_143.svg'
import './principal.css'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'



export class Principal extends Component {

    state = {
        step: 1,
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };


    render() {
        const { step } = this.state;

        switch (step) {
            case 1:
                return (
                    <Step1
                        nextStep={this.nextStep}
                    />
                );

            case 2:
                return (
                    <Step2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );
            case 3:
                return (
                    <Step3/>

                );
        }








    }
}

export default Principal
