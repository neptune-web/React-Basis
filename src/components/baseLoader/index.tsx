import { Image } from 'stories/Image';

import LoaderLottieFile from 'stories/assets/lotties/loader.json';

interface BaseLoaderProps {
  height?: number;
  width?: number;
}

const BaseLoader = ({ height = 40, width = 100 }: BaseLoaderProps) => (
  <div>
    <Image src={LoaderLottieFile} width={width} height={height} loop />
  </div>
);

export default BaseLoader;
