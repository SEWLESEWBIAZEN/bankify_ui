"use client"
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode, useEffect } from 'react'
import { logOut } from '../_lib/actions/auth';
import { useCentralStore } from '../CenteralStore';

type ChildrenProp = {
  children: ReactNode;
  claims: any;
  name: string;
  expiry: string;
}

const Provider = ({ children, claims, name, expiry }: ChildrenProp) => {
 
  useEffect(() => {
    if (expiry) {
      const expiryDate = new Date(expiry);
      if (expiryDate < new Date()) {
        logOut();
      }
    }
  }, [expiry]);

  const { setClaims, setFullName } = useCentralStore();
  useEffect(() => {
    if (claims) {
      setClaims(JSON?.parse(claims));
    }
    setFullName(name);
  }, [claims, name]);

  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider