import styles from "@/styles/About.module.css";
import FromBelowEntryDiv from "@/components/fromBelowEntryDiv";

export default function InfoCard(props: { children: React.ReactNode }) {
  return (
    <FromBelowEntryDiv className={styles.card}>
      {props.children}
    </FromBelowEntryDiv>
  );
}
