import Link from "next/link"

export default function Certifications(props) {
    const { certificateName, issuer, date, blockchainID, URL } = props
    return (
        <>
            <h3>Certificates</h3>
            <p>
                <strong>{certificateName}</strong>, Issued by {issuer}, {date} (<Link href={URL}>Blockchain ID: {blockchainID}</Link>)
            </p>
            <ul>
                {props.children}
            </ul>
        </>
    )
}