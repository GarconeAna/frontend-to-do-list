import './App.scss';
import Header from './components/shared/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AnnotationAdd from './pages/AnnotationAdd/AnnotationAdd';
import AnnotationView from './pages/AnnotationView/AnnotationView';
import AnnotationEdit from './pages/AnnotationEdit/AnnotationEdit';

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/add" component={AnnotationAdd}/>
          <Route path="/view/:id" component={AnnotationView}/>
          <Route path="/edit/:id" component={AnnotationEdit}/>
        </Switch>
    </div>
  );
}

export default App;
