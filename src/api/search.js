import $ from 'jquery';

// Setup Github Users API
export default class SearchAPI {

  static getUsers(query, token) {
    $.ajax({
      url: 'https://api.github.com/search/users',
      type: 'GET',
      headers: { 'access_token': token },
      data : { 'q': query },
    });
  }



}
