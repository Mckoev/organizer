import { months } from '../../helpers/dateValue';
import { IPanelCalendar } from '../../types/interfaices';

function PanelCalendar({ list, date, className, removeEl }: IPanelCalendar) {
    const listItems = list
        ? list.map((el, index) => (
              <li key={index}>
                  <div className='time'>
                      {el.timeStart} - {el.timeFinish}
                  </div>
                  <div className='title'>{el.task}</div>
                  <div className='remove' onClick={() => removeEl(el.id)}>
                      <img src={require('../../img/remove.png')} alt='remove' />
                  </div>
              </li>
          ))
        : null;

    return (
        <div className={className}>
            <div className='header'>
                <div className='title'>
                    {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
                </div>
            </div>
            <ul>{listItems}</ul>
        </div>
    );
}

export default PanelCalendar;
