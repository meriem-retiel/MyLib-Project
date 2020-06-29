import React, { Component } from 'react'
import './step1.css'
import SmallChips from './chips'
import Checkbox from '@material-ui/core/Checkbox';
import './principal.css'
import { ReactComponent as ReactLogo } from './Group_143.svg'
import './step1.css'


/* 
const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
 */

export class step2 extends Component {

    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };


    state = {
        checked: true
    };



    handleChange(event) {
        this.setState({ checked: event.target.value });
    };

    render() {
        const { checked } = this.state;
        return (
            <div className="wrapper">

                <div className="form-wrapper">
                    <ReactLogo className="logo" />
                    <h2>Bienvenue sur MALIB!</h2>

                    <form>
                        <p style={{
                            textAlign: 'center',
                            marginBottom: '55px', 
                            fontFamily:'Roboto slab'
                        }}
                        >Vos réponses aux questions suivantes nous aideront
                             à trouver des idées qui vous correspondent !</p>

                        <p style={{
                            marginRight: '100px',
                            fontWeight: 'bold',
                            marginBottom: '20px'


                        }}>Vous etes ?</p>

                        <p style={{ marginBottom: '20px' }} >Femme</p>
                        <Checkbox style={{
                            marginBottom: '20px',
                            marginRight: '10px'
                        }}
                            checked={checked}
                            onChange={this.handleChange.bind(this)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <p style={{ marginBottom: '20px' }}  >Homme</p>

                        <Checkbox style={{ marginBottom: '20px' }}
                            defaultChecked
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />



                        <p style={{
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}>Dites nous ce qui vous interesse !</p>
                        <div style={{ marginBottom: "30px" }}>
                            <SmallChips />
                        </div>

                        <button className="step2_buttom"
                            onClick={this.back}
                        >Revenir</button>
                        <button className="step2_buttom"
                            onClick={this.continue}
                        >Confirmer</button>

                    </form>


                </div>
            </div>
        )
    }
}

export default step2;
