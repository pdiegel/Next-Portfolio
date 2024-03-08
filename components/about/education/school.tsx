import styles from "@/styles/About.module.css";

export default function School(props: {
  description: string;
  name: string;
  location: string;
  startDate: string;
  endDate?: string;
  children?: React.ReactNode;
}) {
  const { description, name, location, startDate, endDate } = props;
  return (
    <div className={styles.school}>
      <h3>{description}</h3>
      <p>
        <strong>{name}</strong> • {location} • {startDate}{" "}
        {endDate && `- ${endDate}`}
      </p>
      {props.children}
    </div>
  );
}
