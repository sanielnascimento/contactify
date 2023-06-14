export interface iTextBaseProps {
  children: string;
  tag: "h1" | "h2" | "h3" | "p" | "span";
  className: string;
  color:
  | "--color-brand"
  | "--color-brand-o"
  | "--color-primary"
  | "--color-red-008"
  | "--color-red-000"
  | "--color-red-100"
  | "--color-red-300"
  | "--color-red-200"
  | "--color-red-300"
  | "--color-red-400"
  | "--color-red-500"
  | "--color-red-600"
  | "--color-gray-000"
  | "--color-gray-100"
  | "--color-gray-200"
  | "--color-gray-300"
  | "--color-gray-400"
  | "--color-gray-500"
  | "--color-error"
  | "--color-sucess"
  | "--color-warning";
  text: "one" | "two" | "three" | "four" | "five" | "six" | "seven" | "seven-m" | "height" | "nine";
  lineHeight: string;
}
