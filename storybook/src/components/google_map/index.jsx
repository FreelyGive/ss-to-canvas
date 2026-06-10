import { cn } from 'drupal-canvas';

const aspectMap = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
  '2:1': 'aspect-[2/1]',
  '3:1': 'aspect-[3/1]',
};

const spaceMap = {
  'None': '',
  'Add space below map': 'mb-4',
};

const zoomLabelMap = {};
for (let i = 1; i <= 22; i++) {
  if (i === 1) zoomLabelMap[`1 (zoomed out)`] = i;
  else if (i === 22) zoomLabelMap[`22 (zoomed in)`] = i;
  else zoomLabelMap[String(i)] = i;
}

const GoogleMap = ({
  zoomLevel = '12',
  markers = [],
  mapStyle = 'Standard',
  aspectRatio = '16:9',
  addSpaceBelow = 'None',
}) => {
  const zoomNum = parseInt(zoomLevel, 10) || 12;

  const firstMarker = markers && markers.length > 0 ? markers[0] : null;
  const lat = firstMarker?.lat || 55.8619;
  const lng = firstMarker?.lng || -4.2503;
  const delta = Math.max(0.005, 0.5 / zoomNum);

  const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - delta},${lat - delta * 0.7},${lng + delta},${lat + delta * 0.7}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div className={cn('w-full overflow-hidden rounded-2xl', aspectMap[aspectRatio] || 'aspect-video', spaceMap[addSpaceBelow])}>
      <iframe
        title="Map"
        src={embedSrc}
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMap;
