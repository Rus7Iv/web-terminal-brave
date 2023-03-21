import React from "react";
import PhoneInput from "react-phone-input-2";

type OperatorProps = {
  phoneValue: string;
  onChange: (phone: string) => void;
  inputValue: number;
  phoneInputDirty: boolean;
  onSumInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const OperatorForm = ({
  phoneValue,
  onChange,
  inputValue,
  phoneInputDirty,
  onSumInputChange,
  onBlurHandler,
}: OperatorProps) => {
  return (
    <>
      <PhoneInput
        inputClass="input-box"
        inputProps={{ name: "phone" }}
        country={"ru"}
        value={phoneValue}
        onChange={onChange}
        onBlur={onBlurHandler}
        specialLabel="Phone"
      />
      {phoneValue.length !== 11 && phoneInputDirty ? (
        <div style={{ color: "red", fontSize: "small" }}>
          Enter your phone number
        </div>
      ) : null}
      <p className="react-tel-input">Amount</p>
      <input
        onChange={onSumInputChange}
        value={inputValue}
        className="input-box"
      />
    </>
  );
};

export default OperatorForm;
