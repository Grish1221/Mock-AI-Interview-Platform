import React from 'react'
import { Controller, FieldValues, Control, Path} from 'react-hook-form'
import { FormControl, FormItem, FormLabel, FormMessage} from './ui/form'
import { Input } from './ui/input'

interface FormFieldProps<T extends FieldValues>{
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder? : string;
  type? : 'email' | 'password' | 'text' | 'file'
  isSignIn? : boolean
}

const FormField = <T extends FieldValues>({control, name, label, placeholder, isSignIn=false, type='text'}: FormFieldProps<T>) => (
    <Controller 
          control={control}
          name={name} 
          render={({ field }) => (
            <FormItem>
              
              <FormLabel className='label'>{label}</FormLabel>
              
              <FormControl>
                <Input className = "input" 
                        placeholder={placeholder}
                        type={type} 
                        {...field} 
                        autoComplete={
                          type==='password' ? isSignIn? 'current-password' : 'new-password' : 'on'
                        }
                />
              </FormControl>
              
            
              
              <FormMessage />
            
            </FormItem>
          )}
    
          
          />    
        )

export default FormField