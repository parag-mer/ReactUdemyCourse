import { useParams } from "react-router-dom";

export default function EventDetailPage()
{
    const params =useParams();
    
    return(
        <>
            <h1>Details of the Event {params.eventId}</h1>
        </>
    );
}