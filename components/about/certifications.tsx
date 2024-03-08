import Link from "next/link";
import { ReactNode } from "react";

export default function Certifications(props: {
  certificateName: string;
  issuer: string;
  date: string;
  blockchainID: string;
  URL: string;
  children?: ReactNode;
}) {
  const { certificateName, issuer, date, blockchainID, URL } = props;
  return (
    <>
      <h2>Certificates</h2>
      <p>
        <strong>{certificateName}</strong>, Issued by {issuer}, {date} (
        <Link href={URL}>Blockchain ID: {blockchainID}</Link>)
      </p>
      <ul>{props.children}</ul>
    </>
  );
}
