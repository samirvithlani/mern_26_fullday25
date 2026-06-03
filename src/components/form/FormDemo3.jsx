import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const refcodeList =["insta","facebook","google"]
    const submitHandler = (data)=>{
        console.log(data);
    }
    const validationSchema = {
        refcodeValidator:{
            required:{
                value:true,
                message:"ref code is required"
            },
            validate:(params)=>{
                //console.log("params",params)
                //return params =="insta" || "ref code is not valid*"
                return refcodeList.includes(params) || "invalid ref code *"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>REF CODE</label>
                <input type='text' {...register("refcode",validationSchema.refcodeValidator)}></input>
                {errors.refcode?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
