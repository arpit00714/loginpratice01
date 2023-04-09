import './App.css'
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Layout >
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={
          <AuthPage />} />
        <Route path='/profile' element={<UserProfile />} />

      </Routes>
    </Layout>
  );
}

export default App;