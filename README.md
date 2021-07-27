# Fetch

This project is a single-page-application that will generate random dog pictures, provided by this [Dog API](https://dog.ceo/dog-api/documentation/)

Fetch will allow users to do the following:
- View all available dog breeds via the homepage
- Filter through the dog breeds via a searchbar
- Click a specific dog breed and view four random pictures of dogs of that breed
    - Navigate back to the list page without a page refresh

## Start-up instructions (development)
This React app can be started simply by typing `npm start` into the terminal. The app should be available momentarily in the browser at `http://localhost:3000/`

## Potential Features for Improvement
- When the dog breeds are filtered, the card sizing is not always appropriate for the result (ie. the breed listing will overflow from the card). Flex-grid column widths or the parent width may need changing.
- Caching: Everytime the homepage is reloaded with all the dog breeds, a GET request is made. To optimize app performance, local storage, sessions, or another form of storage can be used to retain the list of dogs. This feature could also be helpful for offline viewing.
- Filtering limitations: Currently, the filtering function implemented in the search bar only searches for substrings found within the breed names. That is, it doesn't search through the sub-breed names. For a more comprehensive search, another conditional can be added to the `handleFilter` function in `Home.js`. Alternatively, additional filter choices can be offered to the user to filter specifically for a breed vs sub-breed or both.