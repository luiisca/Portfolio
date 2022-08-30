import { format, parse, setGlobalDateI18n } from "fecha";

setGlobalDateI18n({
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
});

export const formatDate = (dateString: string) => {
  const date = parse(dateString, "isoDateTime") as Date;
  return format(date, "shortDate");
};

export default function Date({ dateString }: { dateString: string }) {
  return <time dateTime={dateString}>{formatDate(dateString)}</time>;
}
