import Layout from './Components/Layout'
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <div className="App">
      <>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </>
    </div>
  );
}

export default App;