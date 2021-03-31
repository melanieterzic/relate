import axios from 'axios';

export default class Api {
    constructor(opts) {
		this.apiURL = opts.url;
		this.apiKey = opts.key;

        this.axiosParams = { headers: { 'Authorization': this.apiKey } };
	}

    /*
    |--------------------------------------------------------------------------
    | ACCESSORS
    |--------------------------------------------------------------------------
    */

    // ... (get, post, put, delete)

    /*
    |--------------------------------------------------------------------------
    | ACTIONS
    |--------------------------------------------------------------------------
    */

    // ... (create, filter, update, remove)

    /*
    |--------------------------------------------------------------------------
    | PAGES
    |--------------------------------------------------------------------------
    */
   
    // ROUTES

    get(page, param = null) {
        switch(page) {
            default:
                return { api: {} };
                break;
        }
    }

    // ... (home, 404)
}