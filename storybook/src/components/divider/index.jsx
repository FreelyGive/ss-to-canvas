const Divider = ({
  thickness = 1,
  spaceAbove = 0,
  spaceBelow = 0,
  color = '#e5e7eb',
}) => {
  return (
    <hr
      style={{
        borderTopWidth: `${thickness}px`,
        borderTopColor: color,
        borderTopStyle: 'solid',
        marginTop: `${spaceAbove}px`,
        marginBottom: `${spaceBelow}px`,
      }}
      className="w-full border-0"
    />
  );
};

export default Divider;
