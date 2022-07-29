export const Tag = ({
  text,
  margin = '10px'
}: {
  text: string;
  margin?: string;
}) => {
  return (
    <span className='tag' style={{ margin }}>
      {text}
    </span>
  );
};
