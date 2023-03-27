import { DateTime } from './node_modules/luxon/src/luxon.js';
import { library } from './modules/library.js';
import { navigation } from './modules/nav.js';

const displayCurrent = () => {
    const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
    document.getElementById('current-date').textContent = now;
  };
  
  displayCurrent();
  
  library();
  navigation();