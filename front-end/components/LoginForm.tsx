import React, { useState, useRef } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [formStatus, setFormStatus] = useState<string>();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  // const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  // const passwordRegEx = /^[A-Za-z0-9]{2,20}$/

  // const emailCheck = (username) => {
  //   if(emailRegEx.test(username)){
  //     return true;
  //   }
  //   else {
  //     setFormStatus('이메일 형식을 확인해주세요');
  //     return false;
  //   }
  // }
  // const passwordCheck = (password) => {
  //   if(password.match(passwordRegEx) === null) { //형식에 맞지 않을 경우 아래 콘솔 출력
  //     setFormStatus('비밀번호 형식을 확인해주세요');
  //     return false;
  //   }else{ // 맞을 경우 출력
  //     console.log('비밀번호 형식이 맞아요');
  //     return true;
  //   }
  // }
  //https://velog.io/@isabel_noh/React-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9D%B4%EB%A9%94%EC%9D%BC-%EB%B0%8F-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%A0%95%EA%B7%9C%EC%8B%9D
  async function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    // if (!emailCheck(enteredEmail) || !passwordCheck(enteredPassword)){
    //   console.log("다시")
    // }    
    const result = await signIn("email-login", {
      email: enteredEmail,
      password: enteredPassword,
      redirect: false,
    });
    if (!result?.error) {
      setFormStatus(`Log in Success!`);
      router.replace("/");
    } else {
      setFormStatus(`Error Occured : ${result.error}`);
    }
  }

  const { data: session, status } = useSession();
  // useEffect(() => {
  //   if (session?.error === "RefreshAccessTokenError") {
  //     signIn(); // Force sign in to hopefully resolve error
  //   }
  // }, [session]);
  const router = useRouter();
  if (status === "authenticated") {
    router.replace("/");
    return (
      <div>
        <h1>Log in</h1>
        <div>You are already logged in.</div>
        <div>Now redirect to main page.</div>
      </div>
    );
  }

  return (
    <div className="container px-5 py-10 mx-auto w-2/3">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-4xl text-gray-700 font-semibold">
          Log In
        </h1>
      </div>
      <form
        onSubmit={submitHandler}
        className="bg-white dark:bg-slate-800 shadow-md dark:shadow-blue-500/50 rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-slate-300 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-slate-300 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            required
            ref={passwordInputRef}
          />
          <p className="text-red-500 text-xs italic">
            {formStatus}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;