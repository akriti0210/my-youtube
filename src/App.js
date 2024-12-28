import { Provider } from 'react-redux';
import './App.css'
import Body from './components/Body';
import Head from './components/Head';
import appStore from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';

const appRouter = createBrowserRouter([{

  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: 'watch',
      element: <WatchPage />
    },
    {
      path: 'demo',
      element: <Demo />
    }
  ]
}])

function App() {

  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      {/* 
      Header
      Body
      Sidebar
        MenuItems
      MainContainer
        ButtonsList
        VideoContainer
          VideoCard
      */}
      </div>
    </Provider>
  );
}

export default App;
