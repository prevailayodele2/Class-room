import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { store } from './../redux/store';

import '../public/css/style.css';

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <Layout />
      </main>
    </Provider>
  );
}
