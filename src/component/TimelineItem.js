import React from 'react';

const TimelineItem =({data}) =>(
    // <><div className="date-item">
    //     <time> {data.date} </time>
    <div className="timeline-item">

            <div className="timeline-item-content">
                <span className='tag' style={{ background: data.id }}> </span>
                <h1 className="timeline-item-content">{data.date}</h1>

                <h3>{data.title}</h3>
                <p>_____________________</p>
                <p> {data.description} </p>
                <span className="circle "></span>
                <span className="circle1 "></span>
                <div className="circle">
                    <h1>{data.Image}</h1></div>
            </div>

        </div>
);
export default TimelineItem;