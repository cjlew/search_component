import $ from 'jquery';

// Setup Github Users API
export default class SearchAPI {

  static getUsers(query, token) {
    return (
      $.ajax({
        method: 'GET',
        url: 'https://api.github.com/search/users',
        parameter: {
          access_token: 'OAUTH-dea71d1a6ce6c308e849490f703d9082809444f3'
        },
        data : { 'q': query },
      })
    );
  }

}
