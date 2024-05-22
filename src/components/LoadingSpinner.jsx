import React from "react";
import { ThreeDots } from "react-loader-spinner";

const LoadingSpinner = () => (
  <div className="flex justify-center mt-4">
    <ThreeDots color="#f14e95" height={80} width={80} />
  </div>
);

export default LoadingSpinner;
