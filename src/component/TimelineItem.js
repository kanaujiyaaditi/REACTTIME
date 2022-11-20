import React from 'react';

const TimelineItem =({data}) =>(
    // <><div className="date-item">
    //     <time> {data.date} </time>
    <div className="timeline-item">

            <div className="timeline-item-content">
                <span className='tag' style={{ background: data.id }}> </span>
                <h1 className="date">{data.date}</h1>

                <h3>{data.title}</h3>
                <p>___________________</p>
                <p> {data.description} </p>
                <span className="circle "></span>
                <span className="circle1 "></span>
                <div className="circle">
                    <span>{data.link}</span></div>
            </div>

        </div>
);
export default TimelineItem;