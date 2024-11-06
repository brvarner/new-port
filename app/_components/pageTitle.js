export default function PageTitle({ title, classes }) {
  return (
    <h2
      className={`mt-5 text-5xl font-semibold text-center ${
        classes ? classes : null
      }`}
    >
      {title}
    </h2>
  );
}
