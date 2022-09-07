import { months } from 'helpers/dateValue';
import { IPanelCalendar } from 'types/interfaices';
import removeIcon from 'img/remove.png';

function PanelCalendar({ list, date, className, removeEl }: IPanelCalendar) {
    const listItems = list
        ? list.map((el) => (
              <li key={el.id}>
                  <div className='time'>
                      {el.timeStart} - {el.timeFinish}
                  </div>
                  <div className='title'>{el.task}</div>
                  <button type='button' className='remove' onClick={() => removeEl(el.id)}>
                      <img src={removeIcon} alt='remove' />
                  </button>
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
