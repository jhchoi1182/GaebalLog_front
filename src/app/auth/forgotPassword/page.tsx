"use client";

import React from "react";

import useInput from "@/hooks/useInput";
import { BG_COLOR, TEXT_COLOR } from "@/constants/global/colors";
import InputWithLabel from "@/components/designSystem/InputWithLabel";
import Button from "@/components/designSystem/Button";
import useValidation from "@/hooks/useValidation";

const ForgotPassword = () => {
  const emailInput = useInput();
  const verificationCode = useInput();
  const passwordInput = useInput();
  const passwordConfirmInput = useInput();
  const { isPassed: isEmailValid } = useValidation(
    emailInput.value + "",
    "email",
  );
  const { isPassed: isPasswordValid } = useValidation(
    passwordInput.value + "",
    "password",
  );

  const styles = {
    wrapper: `flex justify-center items-center w-[800px] h-[800px] ${BG_COLOR.general02}`,
    form: `flex flex-col gap-5`,
    title: `text-[32px] text-center font-hack`,
    checkDuplicateButton: `mt-auto ml-6 mb-1`,
    emailValidationMsg: `-mt-[10px] select-none ${
      isEmailValid || emailInput.value === ""
        ? "text-transparent"
        : TEXT_COLOR.error
    }`,
    countdownMsg: `-mt-[10px] select-none`,
    pwdValidationMsg: `-mt-[10px] mb-2 select-none ${
      isPasswordValid || passwordInput.value === ""
        ? TEXT_COLOR.general07rev
        : TEXT_COLOR.error
    }`,
    pwdConfirmValidationMsg: `-mt-[10px] select-none ${
      passwordInput.value === passwordConfirmInput.value
        ? "text-transparent"
        : TEXT_COLOR.error
    }`,
    checkBoxDiv: `flex items-center -mt-[5px]`,
    checkBox: `flex items-center justify-center w-5 h-5 border-2 border-[#967AC3] bg-transparent text-[#967AC3] cursor-pointer`,
    createButton: `text-center mt-1`,
  };
  const sendMail = () => {};

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Forgot your password?</h1>
        <div className="flex">
          <div className="w-[534px]">
            <InputWithLabel
              label="E-mail"
              type="email"
              value={emailInput.value + ""}
              onChange={emailInput.onChange}
            />
          </div>
          <div className={styles.checkDuplicateButton}>
            <Button
              data-testid="sendEmail"
              type="button"
              size="tab"
              color="white"
              onClick={sendMail}
            >
              인증번호 발송
            </Button>
          </div>
        </div>
        <p className={styles.emailValidationMsg}>
          입력한 이메일은 잘못 된 형식입니다.
        </p>
        <InputWithLabel
          className="w-[534px]"
          label="인증번호"
          type="text"
          value={verificationCode.value + ""}
          onChange={verificationCode.onChange}
        />
        <p className={styles.countdownMsg}>남은 시간: 5분 00초</p>
        <InputWithLabel
          className="w-[534px]"
          label="비밀번호 재설정"
          type="password"
          value={passwordInput.value + ""}
          onChange={passwordInput.onChange}
        />
        <p className={styles.pwdValidationMsg}>
          비밀번호는 8~20 자의 영문 소문자 , 숫자 , 특문 사용
        </p>
        <InputWithLabel
          className="w-[534px]"
          label="비밀번호 재확인"
          type="password"
          value={passwordConfirmInput.value + ""}
          onChange={passwordConfirmInput.onChange}
        />
        <p className={styles.pwdConfirmValidationMsg}>
          비밀번호와 일치시켜주세요.
        </p>
        <div className={styles.createButton}>
          <Button
            className="w-[465px] mt-[0px]"
            size="bigLogin"
            color="white"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
