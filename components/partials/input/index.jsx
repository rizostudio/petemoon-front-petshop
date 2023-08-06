import clsx from "clsx";
// import { DatePicker } from "jalali-react-datepicker";
// import { DateValue, DateInput } from "mantine-datepicker-jalali";
// import PersianDatePicker from "@skhazaei/persian-date-picker";

// import "dayjs/locale/fa";
import moment from "jalali-moment";
export default function FloatLabelInput({
  name,
  value,
  placeholder,
  type,
  onChange,
  required,
  py,
  h,
  dir = "rtl",
  disabled,
  list,
  defaultValue,
  patern,
  children,
}) {
  if (type === "date") {
    console.log(value);
  }

  return (
    <div className={`relative w-full ${h}`} dir={dir}>
      {type === "select" ? (
        <select
          type={type}
          id={name}
          className={clsx(
            `block text-sm logselect md:text-xl px-3 h-full ${py} w-full text-[#333333] rounded-lg border border-[#9B9BA1] appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer`,
            {
              "bg-white": !disabled,
              "bg-secondary": disabled,
            }
          )}
          placeholder=" "
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
          list={list}
        >
          {children}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          className={clsx(
            `block text-sm md:text-xl px-3 h-full ${py} w-full text-[#333333] rounded-lg border border-[#9B9BA1] appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer`,
            {
              "bg-white": !disabled,
              "bg-secondary": disabled,
            }
          )}
          placeholder={" "}
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
          list={list}
          pattern={patern}
        />
      )}

      <label
        htmlFor={name}
        className={clsx(
          "absolute scale-75 bg-[#fff] peer-focus:scale-[85%] peer-placeholder-shown:scale-100 peer-focus:text-[#9B9BA1] text-sm md:text-lg peer-focus:text-sm peer-focus:md:text-lg peer-placeholder-shown:text-sm peer-placeholder-shown:md:text-lg text-[#9B9BA1] duration-300 transform -translate-y-2 top-2 lg:top-1 z-10 peer-focus:bg-white px-1 peer-placeholder-shown:px-1 peer-focus:pr-2 peer-focus:text-primary peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 lg:peer-focus:top-0.5 peer-focus:-translate-y-2 right-2 peer-focus:right-2 peer-placeholder-shown:right-2 text-right origin-top-right",
          {
            "bg-white": !disabled,
            "bg-secondary": disabled,
          }
        )}
      >
        {placeholder}
      </label>
      {/* <label
        htmlFor={name}
        className="absolute bg-[#fff] text-sm md:text-lg peer-focus:text-sm peer-focus:md:text-lg peer-placeholder-shown:text-sm peer-placeholder-shown:md:text-lg opacity-0 text-[#9B9BA1] -translate-y-2 top-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 transition-opacity delay-300 peer-focus:opacity-0 peer-placeholder-shown:opacity-100 peer-placeholder-shown:delay-300 peer-focus:delay-[0ms] px-1 z-10 text-right right-2 peer-focus:right-2 peer-placeholder-shown:right-2 origin-top-right"
      >
        {dir === "ltr" && required && "*"}
        {placeholder}
        {dir === "rtl" && required && "*"}
      </label> */}
    </div>
  );
}
