export function displayDateTime (dateTime) {
    // The given string
    const dateString = dateTime;

    // Create a new Date object with the given string
    const date = new Date(dateString);

    // Format the date to display in a human-readable format
    const formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    // Output the formatted date string
    console.log(formattedDate);
    return formattedDate;
}