# ultimate-test

# Region Population API

This API provides information about the total population and highest population country for a given region.

## Endpoints

- `GET /details/:region`: Returns the total population and highest population country for the region specified.

## Usage

1. Clone this repository:

git clone https://github.com/azeezsodiqkayode/ultimate-test.git

2. Install the dependencies:

npm install

3. Start the server:

npm run dev

4. Make a `GET` request to the `/details/:region` endpoint, replacing `:region` with the name of the region you want to search. For example:

curl http://localhost:5001/api/v1/details/europe

## Testing

To run the integration tests, use the following command:

npm test
