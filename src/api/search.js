import $ from 'jquery';

// Setup Github Users API
export default class SearchAPI {

  static getUsers(query, token) {
    return (
      $.ajax({
        method: 'GET',
        url: 'https://api.github.com/search/users',
        parameter: {
          access_token: `OAUTH-${token}`
        },
        data : { 'q': query },
      })
    );
  }

}
