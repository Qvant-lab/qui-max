import { Ref } from 'vue';
import { FieldErrorList } from 'async-validator';

import { QFormItemContext, QFormItemPropRules } from '@/qComponents/QFormItem';

export type QFormPropModel = Nullable<Record<string, unknown>>;
export type QFormPropRules = Nullable<Record<string, QFormItemPropRules>>;

export interface QFormProps {
  model: QFormPropModel;
  rules: QFormPropRules;
  disabled: Nullable<boolean>;
  hideRequiredAsterisk: Nullable<boolean>;
  showErrorMessage: Nullable<boolean>;
  validateOnRuleChange: Nullable<boolean>;
}

export interface ValidateFnResult {
  isValid: boolean;
  invalidFields: FieldErrorList;
}

export interface QFormProvider {
  disabled: boolean;
  validate: (
    passedProps?: string[] | string
  ) => Promise<Nullable<ValidateFnResult>>;
  resetFields: (passedProps?: string[] | string) => void;
  clearValidate: (passedProps?: string[] | string) => void;
  model: QFormPropModel;
  fields: Ref<QFormItemContext[]>;
  rules: QFormPropRules;
  showErrorMessage: boolean;
  hideRequiredAsterisk: boolean;
}
