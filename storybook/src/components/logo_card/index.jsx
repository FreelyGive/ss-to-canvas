import { cn, Image } from 'drupal-canvas';

const borderMap = {
  'None': '',
  'Add border': 'border',
};

const spaceMap = {
  'None': '',
  'Add space below': 'mb-8',
};

const LogoCard = ({
  image,
  altTag,
  link,
  backgroundColor,
  border = 'Add border',
  borderColor,
  spaceBelow = 'Add space below',
}) => {
  const cardContent = (
    <div
      className={cn(
        'flex items-center justify-center p-6',
        borderMap[border],
        spaceMap[spaceBelow],
      )}
      style={{
        backgroundColor: backgroundColor || undefined,
        borderColor: border === 'Add border' && borderColor ? borderColor : undefined,
      }}
    >
      {image && (
        <Image
          src={image.src}
          alt={altTag || image.alt || ''}
          width={image.width || 200}
          height={image.height || 80}
          className="h-auto w-full max-w-[200px] object-contain"
        />
      )}
    </div>
  );

  if (link?.url) {
    return (
      <a href={link.url} target={link.target || '_self'} className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default LogoCard;
