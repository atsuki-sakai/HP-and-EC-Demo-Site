import React from "react";
import Link from "next/link";

interface Props {
  text?: string;
  href?: string;
}

const SimpleButton = ({ href, text }: Props) => {
  return <Link href={href ?? "/"}>{text ?? "simple button"}</Link>;
};

export default SimpleButton;
