# VanillaForums Coding Test

As per the requirements, this app allows the user to search the public repositories of any Github user, and display the results in a Grid. Results can be sorted alphabetically (default) or by # of Stars.

## Running the Project

This app was made using create-react-app. In order to run it locally, you should run `npm run start` after installing the corresponding node_modules.

## Caveats

While most requirements were met, there was one issue around the requirements to note:

- Total Watchers: Github's API returns watchers equal as the number of Star Gazers. No idea exactly why but this seems to be the case for a few years now. Given the limited time I left it as is, I could have gotten this exact number by fetching the data from each repo separately, but i found that would have been too much. So what you see on the grid is both stars and watchers being the same number as that is what Github returns.

Other than this minor issue, plus testing explained below, I think everything which was asked is working as it should.


## Testing

I honestly did try to limit my time to the 4h suggested and realized that I was running already overtime with testing to be done.

I decided to leave it as is and have a brief overview of what I would test explained here:

### Header:

Nothing, it's static content.


### MainLayout:

- Fetch: make sure response is ok, and test for 404 case. If 404 then make sure Alert code is triggered.
- Sorted by Stars array function: test with a standard array making sure that it is copied properly and that the resulting array should be sorted by the stargrazers key.
- Sort: test that when sort functionality is triggered, that the right data is passed for the grid (alphabethical vs stars)

### SortOptions:  

Test when a button is clicked, that the right sort setting is passed to the application

### CardList:

Make sure UI built matches a predefined version based on a dummy json including name, description, stargazers, and Watchers

## Everything else

All other requirements I believe have been met.

1. The UI must be written using React.
2. The application must use GitHub’s API v3 .
3. Each repository displayed on the page must include the following information:
a. Name
b. Description
c. Total stargazers
d. Total watchers
4. The application UI must be designed to be responsive. A user must be able to perform
all interactions on a desktop or mobile device.
