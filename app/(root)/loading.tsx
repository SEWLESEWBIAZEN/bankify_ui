"use client";
import React from "react";
import {  FourSquare } from "react-loading-indicators";

const Loading = ({ style }: { style?: string }) => {
  return (
    <div className={`flex justify-center items-center ${style ?? "h-screen"}`}>
      <FourSquare color="#44403c" size="small" text="" textColor="#5e2020" />
    </div>
  );
};

export default Loading;