import Link from "next/link"

export default function Certifications(props) {
    const { certificateName, issuer, date, blockchainID, URL } = props
    return (
        <>
            <h2>Certificates</h2>
            <p>
                <strong>{certificateName}</strong>, Issued by {issuer}, {date} (<Link href={URL}>Blockchain ID: {blockchainID}</Link>)
            </p>
            <ul>
                {props.children}
            </ul>
        </>
    )
}