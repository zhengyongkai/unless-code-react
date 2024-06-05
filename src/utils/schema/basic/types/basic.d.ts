export interface FieldsType {
  type: string;
  module?: string;
  props: {
    type?: string;
    width?: string;
    height?: string;
    src?: string;
    className?: string;
    children?: string | Array<any>;
    placeholder?: string;
    to?: string;
  };
}
