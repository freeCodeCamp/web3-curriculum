export const Hints = ({ hints }: { hints: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: hints }}></div>;
};
