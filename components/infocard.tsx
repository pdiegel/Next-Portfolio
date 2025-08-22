import FromBelowEntryDiv from "@/components/fromBelowEntryDiv";
import styles from "@/styles/About.module.css";

export default function InfoCard(props: { children: React.ReactNode }) {
	return (
		<FromBelowEntryDiv className={styles.card}>
			{props.children}
		</FromBelowEntryDiv>
	);
}
