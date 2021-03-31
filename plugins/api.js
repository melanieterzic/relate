import Api from '~/assets/scripts/api.js';

export default (context, inject) => {
    const api = new Api({
        url: context.env.apiURL, 
        key: context.env.apiKey
    });
    inject('api', api);
}