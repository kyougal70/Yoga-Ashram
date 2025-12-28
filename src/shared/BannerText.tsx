import React from "react";

type BannerTextProps = { children: string | React.ReactNode };

function BannerText({ children }: BannerTextProps) {
  return (
    <h1 className="mb-6 basis-3/5 font-montserrat text-3xl font-bold text-gray-100">
      {children}
    </h1>
  );
}

export default BannerText;
