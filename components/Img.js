import { assetPrefix } from '~/constant/globalConfig';

export default ({ src, ...props }) => (
  <img src={`${assetPrefix}${src}`} {...props}/>
);
