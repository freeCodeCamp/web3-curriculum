interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => {
  return (
    <section
      id='description'
      dangerouslySetInnerHTML={{ __html: description }}
    ></section>
  );
};

export default Description;
