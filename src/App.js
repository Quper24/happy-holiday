import Footer from './modules/Footer/Footer';
import Header from './modules/Header/Header';
import Card from './modules/Card/Card';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}

const App = () => {
  return (
    <div style={wrapper}>
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
