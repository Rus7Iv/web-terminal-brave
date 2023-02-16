import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";

type TOperatorProps = {
  phoneValue: string;
  onChange: (phone: string) => void;
  inputValue: number;
  phoneInputDirty: boolean;
  onSumInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Payment = ({
  phoneValue,
  onChange,
  inputValue,
  phoneInputDirty,
  onSumInputChange,
  onBlurHandler,
}: TOperatorProps) => {
  return (
    <div className="payment">
      <div className="operator-payment">
        <div>
          <PhoneInput
            inputProps={{ name: "phone" }}
            country={"ru"}
            value={phoneValue}
            onChange={onChange}
            onBlur={onBlurHandler}
          />

          {/* {(phoneValue.length !== 11 && phoneInputDirty) ? */}
          {/* <div style={{ color: "red" }}>Введите номер телефона</div> */}
          {/* :
           null
         } */}

        </div>
        <div className="sum">
          <label>Сумма</label>
          <input onChange={onSumInputChange} value={inputValue} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
