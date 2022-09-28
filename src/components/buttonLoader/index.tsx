import { Image } from '../../stories/Image';

import LoaderLottieFile from '../../stories/assets/lotties/loader2.json';

const ButtonLoader = () => (
  <div>
    <Image src={LoaderLottieFile} width={60} height={32} loop />
  </div>
);

export default ButtonLoader;
