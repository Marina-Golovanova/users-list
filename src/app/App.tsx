import { MainLayout } from '../shared/layouts/main-layout';
import { UsersReport } from '../shared/pages/users-report';

import './style/style.scss';

export const App: React.FC = () => {
  return (
    <MainLayout>
      <UsersReport />
    </MainLayout>
  );
};

export default App;
