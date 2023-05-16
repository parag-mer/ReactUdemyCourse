import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "./EventItem";
export default function EventDetailPage()
{
    const data = useRouteLoaderData('event-detail');
    
    return(
        <EventItem event={data.event}/>
    );
}

export async function eventDetailLoader({request , params})
{
    const  id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);

    if(!response.ok)
    {
        throw json({message : 'could not fetch details for selected event.'} , {status : 500});
    }
    else
    {
        return response;
    }
    
}

export async function deleteEventAction({params , request})
{
  const eventId = params.eventId;
  
  const response = await fetch('http://localhost:8080/events/' + eventId , {
    method : request.method, 
  });

  if(!response.ok)
  {
    throw json({message : 'could not delete the event'} , {status : 500});
  }

  return redirect('/events');
}



