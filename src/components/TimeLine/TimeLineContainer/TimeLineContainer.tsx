import data, { ExperienceType } from "../../../data/experiences";
import TimeLineItem from "../TimeLineItem/TimeLineItem";
import './styles.css';

function TimeLine(){
    return data ? 
        <div className="timeline-container">
            {data.map((item: ExperienceType) => (
                <TimeLineItem data={item}/>
            ))}
        </div>
    : <></>
}

export default TimeLine;