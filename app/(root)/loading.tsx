"use client";
import React from "react";
import {  TrophySpin } from "react-loading-indicators";

const Loading = ({ style }: { style?: string }) => {
  return (
    <div className={`flex justify-center items-center ${style ?? "h-screen"}`}>
      <TrophySpin color="#009688" size="large" text="" textColor="#5e2020" />
    </div>
  );
};

export default Loading;