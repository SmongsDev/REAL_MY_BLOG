import React, { useState, useRef } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Page from "@/components/content-layouts/Page";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Login: React.FC = (props) => {
  return (
    <div className="bg-primary">
        <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-6xl xl:px-0 min-h-screen'>
            <Header title={'Login'} />
            <LoginForm />
        </div>
        <Footer />
    </div>
  )
};

export default Login;