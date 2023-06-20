
import './Clipboard.css'

import Header from '../Header/Header';
import CreateTask from '../CreateTask/CreateTask';
import TasksList from '../TasksList/TasksList';

import Provider from '../../context/Provider'

function Clipboard() {

  return (
    <Provider>
      <section className="clipboard">
        <Header/>
        <CreateTask/>
        <TasksList/>
      </section>
    </Provider>
  )
}

export default Clipboard;
