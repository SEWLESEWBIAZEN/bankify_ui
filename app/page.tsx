
'use client'
import { redirect } from "next/navigation";
// import { useCentralStore } from "./CenteralStore";
export default function Page() {
  // const {redirectionUrl}=useCentralStore();
  // console.log(redirectionUrl)
  return (
    // redirectionUrl===null?
    redirect("/ok/dashboard")
    // :redirect(redirectionUrl)
  );
}
