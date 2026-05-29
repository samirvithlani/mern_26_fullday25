import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register,handleSubmit} = useForm()
    //register is use for regsiter inputs
    //handlesubmit funciton is use for handle submit event and provide register data
    
    const submitHandler = (data)=>{
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text'{...register("name")}></input>
            </div>
            <div>
                <label>Age</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>GENDER</label>
                <br></br>
                MALE :<input type='radio' value="male" {...register("gender")} ></input>
                FEMALE :<input type='radio' value="female" {...register("gender")} ></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
