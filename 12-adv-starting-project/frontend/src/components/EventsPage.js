import EventsList from '../components/EventsList';
import { json, useLoaderData } from 'react-router-dom';

function EventsPage() {
    const events = useLoaderData();

    if(events.isError)
    {
        return <p>{events.message}</p>;
    }

return (
    <>
        <EventsList events={events} />
    </>
  );
}

export async function loader()
{
    const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        return json(
            {
                message : 'could not fetch events.'
            },
            {
                status : 500
            }
        )
      } else {
        const resData = await response.json();
        return resData.events;
      }
}

export default EventsPage;