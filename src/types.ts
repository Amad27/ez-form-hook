export type tMap<T> = { [key: string]: T }

export type objectKeys = tMap<any>;

export type UniformSchema = {
  onSubmit?: Function,
  inputs: tMap<UniformInput>;
}

export type VisibleIfArgs = {
  value: objectKeys
  rowValues: objectKeys
  values: objectKeys
  formIndex: number | string
}

export type nestedErrorsManager = (errorState: boolean) => void

export type FunctionalComponentArguments = {
  updateFormValues: (value: any) => void
  nestedErrorsManager: nestedErrorsManager
  onBlur: Function
  inputKey: string
  initialValues: any
  value: any
  formIndex: number
}

export type CallbackArguments = {
  value: any;
  rowValues: any;
  values: any;
  formIndex: number | string
}

export type VisibleIf = ({ value, rowValues, values, formIndex }: CallbackArguments) => boolean;

export type ValidateField = ({ value, rowValues, values, formIndex, }: CallbackArguments) => void;

export interface SelectOptions {
  label: string;
  value: any;
  //TODO: add in option types
  [key: string]: any
}

export type UniformInput = {
  [key: string]: any;

  visibleIf?: VisibleIf;
  validate?: ValidateField;
  customComponent?: any; //TODO: type correctly
  type?: string;
  options?: SelectOptions[];
  groupClassName?: string;
  label?: string;
  initialValue?: string;
  placeholder?: string;
  tracked?: boolean;
  prependHtml?: any; //TODO: type correctly
  appendHtml?: any; //TODO: type correctly
  required?: boolean | Function;
  functionalComponent?: ({ updateFormValues, inputKey, initialValues, formIndex, value }: FunctionalComponentArguments) => void;
  viewModeClass?: string;
  viewModeComponent?: Function;
  featureFlag?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    value: any,
    values: object
  ) => void;
  onBlur?: (
    e: React.ChangeEvent<HTMLInputElement>,
    value: any,
    values: object
  ) => void;
  onSubmit?: (value: any, values: object) => void;
}

export type UniformHookProps = {
  schema: UniformSchema
  onSubmit?: (vals: objectKeys) => any
  onChange?: ({ value, rowValues, values, formIndex }: CallbackArguments) => any
  onBlur?: ({ value, rowValues, values, formIndex }: CallbackArguments) => any
  initialValues?: objectKeys
  validateInitialValues?: boolean
  validateOnChange?: boolean
  viewModeToggled?: boolean
  disabled?: boolean
  submitButton?: JSX.Element
  multiForm?: boolean
  viewModeFallbackText?: string
  featureFlags?: objectKeys
  nestedErrorsManager?: nestedErrorsManager
}