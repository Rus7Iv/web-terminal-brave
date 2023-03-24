import React from "react";
import CurrencyInput from "react-currency-input-field";
import PhoneInput from "react-phone-input-2";

type OperatorProps = {
  phoneValue: string;
  onChange: (phone: string) => void;
  phoneInputDirty: boolean;
  onBlurHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const OperatorForm = ({
  phoneValue,
  onChange,
  phoneInputDirty,
  onBlurHandler,
}: OperatorProps) => {
  return (
    <>
      <label>
        <span className="react-tel-input">Phone</span>
        <PhoneInput
          inputClass="input-box"
          inputProps={{ name: "phone" }}
          country={"ru"}
          value={phoneValue}
          onChange={onChange}
          onBlur={onBlurHandler}
          specialLabel=""
        />
      </label>
      {phoneValue.length !== 11 && phoneInputDirty ? (
        <div style={{ color: "red", fontSize: "15px" }}>
          Enter your phone number
        </div>
      ) : null}
      <label>
        <span className="react-tel-input">Amount</span>
        <CurrencyInput
          className="input-box"
          id="input-example"
          name="input-name"
          placeholder="From 1 to 1000"
          decimalsLimit={2}
          defaultValue={1}
          intlConfig={{ locale: "ru-RU", currency: "RUB" }}
          maxLength={3}
          onBlur={onBlurHandler}
        />
      </label>
    </>
  );
};

export default OperatorForm;
