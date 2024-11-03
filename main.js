//Task 2: Fetch Tickets Using Async/Await and Handle Errors

const ticketList = document.getElementById('displayingTickets');

async function displayUnresolvedTickets(id)
{
    const ticketResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!ticketResponse.ok)
    {
        throw new Error('Error: Failed to fetch data');
    }
    const ticketId = await ticketResponse.json();
    console.log('Ticket ID: ', ticketId);
}