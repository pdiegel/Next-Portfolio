export default function Job(props: {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  children: React.ReactNode;
}) {
  const { jobTitle, company, location, startDate, endDate } = props;
  return (
    <>
      <h3>{jobTitle}</h3>
      <p>
        <strong>{company}</strong> • {location} • {startDate} - {endDate}
      </p>
      <ul>{props.children}</ul>
    </>
  );
}
