import Link from "next/link";
import React from "react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const BrandLogo = ({ size = "md", className = "" }: BrandLogoProps) => {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className={`inline-flex items-center font-normal text-primary-orange text-[40.81px] leading-[40.81px] ${className}`}
      style={{ fontFamily: '"Island Moments", cursive' }}
    >
      Chuks Kitchen
    </Link>
  );
};

export default BrandLogo;