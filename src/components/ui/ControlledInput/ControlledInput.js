import { TextField } from "@mui/material"
import * as React from "react"
import { forwardRef } from "react"
import { Controller } from "react-hook-form"

const ControlledInput = forwardRef((
    { form, name, defaultValue, ...inputProps },
    ref
  ) => {
    // const wasError = form.
    return (
      <Controller
        control={form.control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            name={name}
            form={form}
            {...inputProps}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value || ""}
            ref={ref}
            error={!!form.formState.errors[name]?.message}
            helperText={form.formState.errors[name]?.message}
          />
        )}
      />
    )
  }
)

export default ControlledInput
