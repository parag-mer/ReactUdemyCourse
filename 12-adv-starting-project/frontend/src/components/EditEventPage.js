import { useRouteLoaderData } from "react-router-dom";
import { json, redirect } from "react-router-dom";
import EventForm from "./EventForm";
export default function EditEventPage()
{
    const data = useRouteLoaderData('event-detail');
    return <EventForm event = {data.event}/>;
}

export async function eventEditor({request , params})
{
    const data = await request.formData();
    const  id = params.eventId;

    const eventData = {
        title : data.get('title'),
        image : data.get('image'),
        date : data.get('date'),
        description : data.get('description')
    }
    
    const response = await fetch('http://localhost:8080/events/'+ id, {
        method : 'PATCH',
        headers : {'Content-Type' : 'application/json'} ,
        body : JSON.stringify(eventData)
    });

    if(!response.ok)
    {
        throw json({message : 'could not save event'} , {status : 500});
    }


    return redirect('/events');

}