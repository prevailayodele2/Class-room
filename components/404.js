import { Button, Result } from 'antd';

const Error = ({status, title, subTitle}) => (
  <Result
    status
    title
    subTitle
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default Error