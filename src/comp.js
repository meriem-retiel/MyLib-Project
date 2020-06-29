import React from 'react';
import {Form ,Formik,Field, useField} from 'formik';
import {Card,CardContent,Typography, TextField,MenuItem, Checkbox, FormControlLabel,CheckboxProps} from "@material-ui/core"

const initialValues : RegleInfo ={
    intitule :'',
    niveau:undefined,
    priorite:undefined,
    active: false,
    freqTemps: undefined,
    freqKm: undefined,
    freqUc: undefined,
    vehiculeId : [],
    PR_id:[],
    files:[],

};



export default function Comp() {
  

  return (
    <Card>
    <CardContent>
        <Typography variante='h4'>Nouvelle regle</Typography>
        <Formik initialValues={initialValues} onSubmit={()=> {}} >
            {({values})=>(
                <Form>
                    <Field name='intitule' as={TextField} label="Intitulé de la règle" />
                    <Field name='niveau' label="Niveau" as={TextField} select>
                       <MenuItem value={1}>1</MenuItem> 
                       <MenuItem value={2}>2</MenuItem> 
                       <MenuItem value={3}>3</MenuItem> 
                       <MenuItem value={4}>4</MenuItem>
                       <MenuItem value={5}>5</MenuItem>

                    </Field>
                    <Field name='priorite' label="Priorité" as={TextField} select>
                       <MenuItem value={'faible'}>Faible</MenuItem> 
                       <MenuItem value={'moyenne'}>Moyenne</MenuItem> 
                       <MenuItem value={'elevé'}>Elevé</MenuItem> 
                    </Field>
                    <MyCheckbox name='active' value={true} label ='Activé'/>
                   
                    <pre>{JSON.stringify(values, null, 4)} </pre>
                </Form>
            )}
        </Formik>
    </CardContent>
</Card>
  );
}

export interface MycheckboxProps extends CheckboxProps {
    name: string;
    value : boolean|string;
    label?:string;
    checked:Boolean
}
export function MyCheckbox(props:MycheckboxProps) {
    const[field]=useField({
        name:props.name,
        type:'checkbox',
        value:props.value

    })
    return <FormControlLabel control={<Checkbox {...props} {...field}/>} checked="true"  label={props.label}/>;
}