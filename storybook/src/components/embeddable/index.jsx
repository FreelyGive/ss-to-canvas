const Embeddable = ({ embedSnippet }) => {
  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{ __html: embedSnippet || '<p>Embed snippet</p>' }}
    />
  );
};

export default Embeddable;
