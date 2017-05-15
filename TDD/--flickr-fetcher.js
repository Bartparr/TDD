'use strict';
var FlickrFetcher;

FlickrFetcher = {
    photoObjToURL: function(photoObj) {
        return [ 'https://farm',
            photoObj.farm, '.staticflickr.com/',
            photoObj.server, '/',
            photoObj.id, '_',
            photoObj.secret, '_b.jpg'
        ].join('');
    },

    transformPhotoObj: function(photoObj) {
        return {
            title: photoObj.title,
            url:   FlickrFetcher.photoObjToURL(photoObj)
        };
    },

    fetchFlickrData: function(apiKey,theme, fetch) {
        if ((!fetch) && (typeof jQuery !== 'undefined')) {
            fetch = jQuery.getJSON.bind(jQuery);
        }
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='
                + apiKey.toString() + '&safe_search=1&text='+theme+'s&format=json&nojsoncallback=1'
        return fetch(url);
    },

    fetchPhotos: function(apiKey,theme, fetch) {
        return FlickrFetcher.fetchFlickrData(apiKey,theme, fetch)
            .then(function(data) {
                return data.photos.photo.map(FlickrFetcher.transformPhotoObj);
            });
    }
};

if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
    module.exports = FlickrFetcher;
}
