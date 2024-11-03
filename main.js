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

//Task 3: Display Tickets Dynamically on the Page

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
try {
    fetch(apiUrl)
    .then(response => response.json())
    .then(tickets => 

    {
        tickets.forEach(ticket =>
        {
            const listItem = document.createElement('li');
            listItem.textContent = 'Ticket ID: ${ticket.id}, Customer Name: ${ticket.userId}, Issue: ${ticket.title}, Details: ${ticket.body}';
            ticketList.appendChild(listItem);
        }
        );
    }
    )}

catch (error) 
{
    console.error('Error: Something went Wrong');
}

// Task 4: Use finally to Ensure Cleanup

finally
{
    console.log('Cleaning Up');
}

}