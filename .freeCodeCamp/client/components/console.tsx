export const Console = ({ cons }: { cons: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: cons }}></div>;
};
