import { useMemo } from "react";

interface ListProps {
  query: string;
}

const List: React.FC<ListProps> = ({ query }) => {
  const items = useMemo(() => {
    return query.length > 0
      ? Array.from({ length: 10000 }, () => `You wrote: ${query}`)
      : [];
  }, [query]);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default List;
