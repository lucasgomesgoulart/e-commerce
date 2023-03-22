import Layout from './Components/Layout'
import { AuthProvider } from './Context/AuthProvider';

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