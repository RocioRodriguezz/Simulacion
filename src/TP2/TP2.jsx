import React from 'react'
import { Button,TextField, FormControl, Select, MenuItem, Divider } from '@mui/material'
import { Formik, Form } from 'formik'
import './TP2.css'

const TP2 = () => {
  const handleClick = (values) => {
    if(values.distribucion == "poisson"){
      console.log(values.distribucion)
      console.log(values.cantidad)
    }
    else if(values.distribucion == "uniforme"){
      console.log(values.distribucion)
      console.log(values.cantidad)
    }
    else if(values.distribucion == "exponencial"){
      console.log(values.distribucion)
      console.log(values.cantidad)
    }
    else{
      console.log(values.distribucion)
      console.log(values.cantidad)
    }
  }
  const initialValues = {
    distribucion: "",
    cantidad: 0
  }

  return (
    <div className='div' sx={{width: '100%'}} >
      <div className='header'>
        <h3>Simulacion TP 2</h3>
      </div>
      <Divider variant="middle" />
      <Formik onSubmit={handleClick} initialValues={initialValues}>
            {({ setFieldValue, values, handleChange }) => (
              <Form>
      <div className='div-principal' sx={{width: '100%'}} >
        <label >Tipo Distribucion: </label>
        <FormControl fullWidth>
        <Select sx={{marginRight:'30px', marginLeft:'10PX'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(event) => {
            let value = event.target.value;
            setFieldValue("distribucion", value);
          }}
          label="Age"
        >
          <MenuItem value={'poisson'}>Poisson</MenuItem>
          <MenuItem value={'uniforme'}>Uniforme</MenuItem>
          <MenuItem value={'exponencial'}>Exponencial</MenuItem>
          <MenuItem value={'normal'}>Normal</MenuItem>

        </Select>
        </FormControl>
        <TextField sx={{marginRight:'30px'}} id="cantidad" label="Cantidad" variant="outlined" name="cantidad" onChange={handleChange}/>
        <Button variant="contained" type='submit'>Generar</Button>
      </div>
      </Form>
            )}
          </Formik>
    </div>
  )
}

export default TP2

