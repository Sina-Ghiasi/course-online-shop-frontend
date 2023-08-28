const Input = ({ label, name, placeholder, formik, type = "text" }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          {...formik.getFieldProps(name)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
        />
      </label>

      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-700 text-sm text-right">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default Input;
