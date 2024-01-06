export type FormData = {
    form: string
    created_by: {
      name: string
      profile: string
    }
    fields: FormField[]
  }
  
  export type FormField = {
    id?: string
    field?: string
    type: string
    name: string
    label: string
    value?: string
    placeholder?: string
    disabled?: boolean
    options?: { 
        value: string
        label: string 
        name?: string
    }[]
    styles?: {
      width: string
      backgroundColor: string
      color: string
    }
  }