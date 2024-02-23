import Header from "@/components/header";
import Price from "@/components/price";
import React from "react";

type Props = {};

export default function PricePage({}: Props) {
  return (
    <div className="container">
      <Header />
      <Price />
    </div>
  );
}
