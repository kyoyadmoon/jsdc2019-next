import { assetPrefix } from '~/constant/globalConfig';
console.log('assetPrefix', assetPrefix);
export default ({ src, ...props }) => (
  <img src={`${assetPrefix}${src}`} {...props}/>
);
