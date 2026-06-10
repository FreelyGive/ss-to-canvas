// Gap in RowForColumns is gap-6 = 1.5rem. Column widths subtract their share
// of that gap so two 50% columns sit side by side without wrapping.
const GAP = '1.5rem';

const widthMap = {
  '12  (full width)': 1,
  '11':               11/12,
  '10':               10/12,
  '9  (3/4)':         9/12,
  '8  (2/3)':         8/12,
  '7':                7/12,
  '6  (1/2)':         6/12,
  '5':                5/12,
  '4  (1/3)':         4/12,
  '3  (1/4)':         3/12,
  '2 (1/6)':          2/12,
  '1':                1/12,
  '1.5  (1/5)':       1/5,
  'None (hidden)':    0,
};

const Column = ({
  xlWidth = '6  (1/2)',
  lgWidth,
  mdWidth,
  smWidth,
  xlCustomClass = '',
  lgCustomClass = '',
  mdCustomClass = '',
  smCustomClass = '',
  content,
}) => {
  const fraction = widthMap[xlWidth] ?? 0.5;
  const pct = `${(fraction * 100).toFixed(4)}%`;
  // Subtract the column's proportional share of the row gap
  const basis = fraction === 1
    ? '100%'
    : `calc(${pct} - ${GAP} * (1 - ${fraction.toFixed(4)}))`;

  return (
    <div style={{ flex: `0 0 ${basis}`, minWidth: 0 }}>
      {content || (
        <div className="min-h-[60px] rounded border-2 border-dashed border-[#006699]/20 p-4 text-center text-sm text-[#5a554e]">
          Column ({xlWidth})
        </div>
      )}
    </div>
  );
};

export default Column;
