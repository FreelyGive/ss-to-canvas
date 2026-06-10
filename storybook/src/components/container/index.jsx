import { cn } from 'drupal-canvas';

const imageOverlayMap = {
  None: '',
  Dark: 'bg-black/60',
  Light: 'bg-white/20',
};

const borderMap = {
  None: '',
  'Add border': 'border',
};

const paddingTopMap = {
  None: '',
  'Inherit from above': '',
  'Small (32px)':  'pt-8',
  'Small (24px)':  'pt-6',
  'Medium (64px)': 'pt-16',
  'Medium (48px)': 'pt-12',
  'Medium (32px)': 'pt-8',
  'Large (96px)':  'pt-24',
  'Large (72px)':  'pt-18',
  'Large (48px)':  'pt-12',
};

const paddingBottomMap = {
  None: '',
  'Inherit from above': '',
  'Small (32px)':  'pb-8',
  'Small (24px)':  'pb-6',
  'Medium (64px)': 'pb-16',
  'Medium (48px)': 'pb-12',
  'Medium (32px)': 'pb-8',
  'Large (96px)':  'pb-24',
  'Large (72px)':  'pb-18',
  'Large (48px)':  'pb-12',
};

const heightBehaviorMap = {
  'Fit to content (or minimum height set)': '',
  'Fill space available': 'flex-1',
};

const verticalAlignmentMap = {
  Top: 'justify-start',
  Middle: 'justify-center',
  Bottom: 'justify-end',
};

const addSpaceBelowMap = {
  None: '',
  'Add space below': 'mb-4',
};

const Container = ({
  backgroundColor = '',
  backgroundImage = null,
  imageOverlay = 'None',
  border = 'None',
  borderColor = '',
  paddingTopDesktop = 'None',
  paddingBottomDesktop = 'None',
  paddingTopTablet = 'Inherit from above',
  paddingBottomTablet = 'Inherit from above',
  paddingTopPhoneLg = 'Inherit from above',
  paddingBottomPhoneLg = 'Inherit from above',
  paddingTopPhoneSm = 'Inherit from above',
  paddingBottomPhoneSm = 'Inherit from above',
  heightBehavior = 'Fit to content (or minimum height set)',
  minHeightDesktop = 0,
  minHeightTablet = 0,
  minHeightPhone = 0,
  verticalAlignment = 'Top',
  addSpaceBelow = 'None',
  content,
}) => {
  return (
    <div
      className={cn(
        'relative w-full flex flex-col',
        borderMap[border],
        heightBehaviorMap[heightBehavior],
        addSpaceBelowMap[addSpaceBelow],
      )}
      style={{
        backgroundColor: backgroundColor || undefined,
        backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : undefined,
        backgroundSize: backgroundImage ? 'cover' : undefined,
        backgroundPosition: backgroundImage ? 'center' : undefined,
        borderColor: border === 'Add border' && borderColor ? borderColor : undefined,
        minHeight: minHeightDesktop ? `${minHeightDesktop}px` : undefined,
      }}
    >
      {backgroundImage && imageOverlay !== 'None' && (
        <div className={cn('absolute inset-0', imageOverlayMap[imageOverlay])} />
      )}
      <div
        className={cn(
          'relative z-10 flex flex-col w-full',
          paddingTopMap[paddingTopDesktop],
          paddingBottomMap[paddingBottomDesktop],
          verticalAlignmentMap[verticalAlignment],
        )}
      >
        {content || (
          <div className="min-h-[80px] w-full rounded border-2 border-dashed border-[#006699]/20 p-4 text-center text-sm text-[#5a554e]">
            Container — drop content here
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
